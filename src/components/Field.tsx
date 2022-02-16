import React from 'react';
import './field.css';
import { Speed } from './Wrapper';
interface ComponentProps {
  horiz_count: number;
  vertic_count: number;
  getMembers?: (horiz_count: number, vertic_count: number) => number[][];
  setGeneration: (generation: number) => void;
  intervalMs: number;
  filling_btn_id?: string | null;
}

interface ComponentState {
  members?: number[][];
  intervalMs: number;
  iterations: number;
}

class Field extends React.Component<ComponentProps, ComponentState> {
  timerID: NodeJS.Timer | undefined;
  constructor(props: ComponentProps) {
    super(props);
    console.log('Field constructor');
    this.state = {
      iterations: -1,
      intervalMs: this.props.intervalMs,
    };
  }

  tick(): void {
    if (this.state.iterations === -1) {
      return;
    }
    const members: number[][] = this.calcNextLabel(this.state.members);
    this.setState({ iterations: this.state.iterations + 1, members: members });
    this.props.setGeneration(this.state.iterations);
  }

  componentDidMount(): void {
    console.log('Field componentDidMount');
    this.timerID = setInterval(() => this.tick(), Speed.SpeedSlow);
  }

  componentWillUnmount(): void {
    console.log(' Field componentWillUnmount');
    clearInterval(this.timerID as NodeJS.Timeout);
  }

  shouldComponentUpdate(
    nextProps: ComponentProps,
    nextState: ComponentState
  ): boolean {
    if (this.props.vertic_count !== nextProps.vertic_count) {
      return true;
    }
    if (this.state.iterations !== nextState.iterations) {
      return true;
    }
    if (
      (this.props.filling_btn_id === undefined &&
        nextProps.filling_btn_id !== undefined) ||
      (this.props.filling_btn_id !== undefined &&
        nextProps.filling_btn_id !== undefined &&
        this.props.filling_btn_id !== nextProps.filling_btn_id) ||
      (this.props.filling_btn_id !== undefined &&
        nextProps.filling_btn_id === undefined)
    ) {
      return true;
    }
    return false;
  }

  changeSpeed(intervalMs: number) {
    this.setState({ intervalMs: intervalMs });
    if (this.timerID !== undefined) {
      clearInterval(this.timerID as NodeJS.Timeout);
      this.timerID = setInterval(() => this.tick(), intervalMs);
    }
  }

  pauseLife() {
    clearInterval(this.timerID as NodeJS.Timeout);
    this.timerID = undefined;
  }

  resumeLife() {
    this.timerID = setInterval(() => this.tick(), this.props.intervalMs);
  }

  startLife() {
    if (this.timerID == null) {
      this.timerID = setInterval(() => this.tick(), this.props.intervalMs);
    }
    if (this.props.filling_btn_id != null) {
      this.setState({ iterations: this.state.iterations + 1 });
    }
  }

  clearField() {
    this.pauseLife();
    if (this.state.members === undefined) {
      return;
    }
    const members = this.state.members;
    const member = members[0];
    member.fill(0);
    members.fill(member);
    this.props.setGeneration(0);
    this.setState({ members: members, iterations: -1 });
  }

  generateField(filling: number) {
    const members = this.getMembers(
      this.props.horiz_count,
      this.props.vertic_count,
      filling
    );
    this.setState({ members: members, iterations: -1 });
    this.props.setGeneration(0);
  }

  // changeFieldSize() {
  //   if (this.state.members === undefined) {
  //     return;
  //   }
  //   const members: number[][] = this.getMembersForNewFieldSize(
  //     this.state.members,
  //     this.props.horiz_count,
  //     this.props.vertic_count
  //   );
  //   this.setState({ members: members });
  // }

  getGeneration(): number {
    return this.state.iterations;
  }

  getMembers(
    horiz_count: number,
    vertic_count: number,
    filling: number
  ): number[][] {
    if (this.props.getMembers !== undefined) {
      return this.props.getMembers(horiz_count, vertic_count);
    }
    let rows;
    const items = [];
    let b;
    let countItem = 0;
    for (let i = 0; i < vertic_count; i++) {
      rows = [];
      for (let k = 0; k < horiz_count; k++) {
        b = Math.round(Math.random());
        if (b === 1) {
          countItem++;
        }
        rows.push(b);
      }
      items.push(rows);
    }
    const calcFillingCount = Math.floor(vertic_count * horiz_count * filling);
    if (countItem > calcFillingCount) {
      while (countItem > calcFillingCount) {
        const y = Math.floor(Math.random() * vertic_count);
        const x = Math.floor(Math.random() * horiz_count);
        if (items[y][x] === 1) {
          items[y][x] = 0;
          countItem--;
        }
      }
    } else if (countItem < calcFillingCount) {
      while (countItem < calcFillingCount) {
        const y = Math.floor(Math.random() * vertic_count);
        const x = Math.floor(Math.random() * horiz_count);
        if (items[y][x] === 0) {
          items[y][x] = 1;
          countItem++;
        }
      }
    }
    return items;
  }

  calcNextLabel(membersOld: number[][] | undefined) {
    if (membersOld === undefined) {
      return [];
    }
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

  getMembersForNewFieldSize(
    membersOld: number[][],
    horiz_count: number,
    vertic_count: number
  ): number[][] {
    const membersNew: number[][] = [];
    if (membersOld.length > vertic_count) {
      for (let i = 0; i < vertic_count; i++) {
        membersNew[i] = [];
        for (let j = 0; j < horiz_count; j++) {
          membersNew[i][j] = membersOld[i][j];
        }
      }
    } else {
      for (let i = 0; i < vertic_count; i++) {
        membersNew[i] = [];
        for (let j = 0; j < horiz_count; j++) {
          if (i < membersOld.length && j < membersOld[i].length) {
            membersNew[i][j] = membersOld[i][j];
          } else {
            membersNew[i][j] = 0;
          }
        }
      }
    }
    return membersNew;
  }

  render(): JSX.Element {
    console.log('Field render');
    const { horiz_count, vertic_count } = this.props;

    let members: number[][] | undefined = this.state.members;

    if (members === undefined) {
      members = [...Array(vertic_count)].map(() => Array(horiz_count).fill(0));
    } else if (members.length === 0) {
      members = this.getMembers(horiz_count, vertic_count, 0);
    } else {
      if (members.length != vertic_count) {
        members = this.getMembersForNewFieldSize(
          members,
          horiz_count,
          vertic_count
        );
      }
    }

    const rows = [];

    for (let i = 0; i < members.length; i++) {
      const rowID = `row${i}`;
      const cell = [];
      for (let j = 0; j < members[i].length; j++) {
        const cellID = `cell${i}-${j}`;
        let className: string;
        if (members[i][j] === 1) {
          className = 'Item Item1';
        } else {
          className = 'Item Item0';
        }
        cell.push(
          <td key={cellID} id={cellID} className="collapse">
            <div className={className} />
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
      <table id="simple" className="collapse Field">
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export { Field };
