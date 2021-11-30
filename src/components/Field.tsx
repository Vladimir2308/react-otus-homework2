import React from 'react';
import Item from './Item';
import './field.css';

interface ComponentProps {
  horiz_count: number;
  vertic_count: number;
}

interface ComponentState {
  display_num?: number | null;
}

class Field extends React.Component<ComponentProps, ComponentState> {
  constructor(props: ComponentProps) {
    super(props);
    this.state = {
      display_num: null,
    };
  }

  onclickItemToField = (id: number): void => {
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
    const { horiz_count, vertic_count } = this.props;
    const members = getMembers(horiz_count, vertic_count);

    const rows = [];
    let counter = 0;

    function getMembers(horiz_count: number, vertic_count: number): number[][] {
      const items = [];
      let rows;
      for (let i = 0; i < horiz_count; i++) {
        rows = [];
        for (let k = 0; k < vertic_count; k++) {
          rows.push(Math.round(Math.random()));
        }
        items.push(rows);
      }
      return items;
    }

    for (let i = 0; i < members.length; i++) {
      const rowID = `row${i}`;
      const cell = [];
      for (let j = 0; j < members[i].length; j++) {
        const cellID = `cell${i}-${j}`;
        counter++;
        let num = null;
        if (this.state.display_num === counter) {
          num = counter;
        }
        cell.push(
          <td key={cellID} id={cellID} className="collapse">
            <Item
              display_num={num}
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
      <div className="Field">
        <div className="row">
          <div className="col ">
            <table id="simple" className="collapse">
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export { Field };
