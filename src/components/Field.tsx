import React from 'react';
import Item from './Item';
import './field.css';

interface ComponentProps {
  // parentCallback: (button_id: number) => void;
  horiz_count: number;
  vertic_count: number;
  getMembers?: (horiz_count: number, vertic_count: number) => number[][];
  speed: number;
}

interface ComponentState {
  display_num?: number | null;
  members?: Array<number>;
  speed: number;
  iterations: number;
}

class Field extends React.Component<ComponentProps, ComponentState> {
  private members: number[][] = [];
  timerID: NodeJS.Timer | undefined;
  constructor(props: ComponentProps) {
    super(props);
    console.log('constructor');
    this.state = {
      iterations: 0,
      speed: this.props.speed,
    };
  }

  tick(): void {
    this.setState({ iterations: this.state.iterations + 1 });
  }

  componentDidMount(): void {
    console.log('Field componentDidMount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(): void {
    console.log(' Field componentWillUnmount');
    clearInterval(this.timerID as NodeJS.Timeout);
  }

  shouldComponentUpdate(
    nextProps: ComponentProps,
    nextState: ComponentState
  ): boolean {
    if (this.props.speed != nextProps.speed) {
      clearInterval(this.timerID as NodeJS.Timeout);
      let interval: number;
      if (nextProps.speed === 1) {
        interval = 1000;
      } else if (nextProps.speed === 2) {
        interval = 500;
      } else {
        interval = 100;
      }
      this.timerID = setInterval(() => this.tick(), interval);
      return true;
    }
    // return !(this.state.display_num === nextState.display_num);
    return this.state.iterations < nextState.iterations;
  }

  //todo переключение поля
  getMembers(horiz_count: number, vertic_count: number): number[][] {
    if (this.props.getMembers !== undefined) {
      return this.props.getMembers(horiz_count, vertic_count);
    }
    // if(this.props.getMembers)
    const items = [];
    let rows;
    for (let i = 0; i < vertic_count; i++) {
      rows = [];
      for (let k = 0; k < horiz_count; k++) {
        rows.push(Math.round(Math.random()));
      }
      items.push(rows);
    }
    return items;
  }

  calcNextLabel(membersOld: number[][]) {
    let count;
    const membersNew: number[][] = [];
    for (let x = 0; x < membersOld.length; x++) {
      membersNew[x] = [];
      for (let y = 0; y < membersOld[x].length; y++) {
        count = 0;
        //после x
        if (x !== membersOld.length - 1) {
          if (membersOld[x + 1][y] === 1) {
            ++count;
          }
          if (y !== 0) {
            if (membersOld[x + 1][y - 1] === 1) {
              ++count;
            }
          }
          if (y !== membersOld[x].length - 1) {
            if (membersOld[x + 1][y + 1] === 1) {
              ++count;
            }
          }
        }
        //до x
        if (x !== 0) {
          if (membersOld[x - 1][y] === 1) {
            ++count;
          }
          if (y !== 0) {
            if (membersOld[x - 1][y - 1] === 1) {
              ++count;
            }
          }
          if (y !== membersOld[x].length - 1) {
            if (membersOld[x - 1][y + 1] === 1) {
              ++count;
            }
          }
        }
        //после y
        if (y !== membersOld[x].length - 1) {
          if (membersOld[x][y + 1] === 1) {
            ++count;
          }
        }
        //до y
        if (y !== 0) {
          if (membersOld[x][y - 1] === 1) {
            ++count;
          }
        }
        if (count < 2 || count > 3) {
          membersNew[x][y] = 0;
        } else {
          if (membersOld[x][y] === 1 || count === 3) {
            membersNew[x][y] = 1;
          } else {
            membersNew[x][y] = 0;
          }
        }
      }
    }
    return membersNew;
  }

  onclickItemToField = (id: number): void => {
    // todo add pause for iteration here
    if (this.state.display_num === id) {
      this.setState({
        display_num: null,
      });
    } else {
      this.setState({
        display_num: id,
      });
    }
  };

  render() {
    console.log('Field render');

    const { horiz_count, vertic_count } = this.props;
    if (this.members.length === 0) {
      this.members = this.getMembers(horiz_count, vertic_count);
    } else {
      if (this.members.length != vertic_count) {
        this.members = this.getMembers(horiz_count, vertic_count);
      } else {
        this.members = this.calcNextLabel(this.members);
      }
    }

    const rows = [];
    let counter = 0;

    for (let i = 0; i < this.members.length; i++) {
      const rowID = `row${i}`;
      const cell = [];
      for (let j = 0; j < this.members[i].length; j++) {
        const cellID = `cell${i}-${j}`;
        counter++;
        let num = null;
        if (this.state.display_num === counter) {
          num = counter;
        }
        cell.push(
          <td key={cellID} id={cellID} className="collapse">
            <Item
              // display_num={num}
              display_num={this.members[i][j]}
              order_num={counter}
              onclickItemToField={this.onclickItemToField}
            />
          </td>
        );
      }
      rows.push(
        <tr key={i} id={rowID} className="collapse">
          {cell}
        </tr>
      );
    }
    return (
      <div>
        <div className="Field">
          <div className="row">
            <div className="col ">
              <table id="simple" className="collapse">
                <tbody>{rows}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Field };
