import React from "react";
import Item from "./Item";

interface IProps {
  horiz_count: number;
  vertic_count: number;
}

interface IState {
  display_num?: number | null;
}

class Field extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      display_num: null,
    };
  }

  onclickItemToField = (id: number) => {
    if (Number(this.state.display_num) === id) {
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
    let members = getMembers(this.props.horiz_count, this.props.vertic_count);

    let rows = [];
    let counter = 0;
    const fieldStyle = {
      borderCollapse: "collapse",
      padding: 0,
    } as React.CSSProperties;

    function getMembers(horiz_count: Number, vertic_count: Number) {
      let items = [];
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
      let rowID = `row${i}`;
      let cell = [];
      for (let j = 0; j < members[i].length; j++) {
        let cellID = `cell${i}-${j}`;
        counter++;
        let num = null;
        if (Number(this.state.display_num) === counter) {
          num = counter;
        }
        // cell.push(<td key={cellID} id={cellID} style={fieldStyle}><Item display_num={members[i][j]} order_num={counter} itemToField={this.itemToField}/></td>)
        cell.push(
          <td key={cellID} id={cellID} style={fieldStyle}>
            <Item
              display_num={num}
              order_num={counter}
              onclickItemToField={this.onclickItemToField}
            />
          </td>
        );
      }
      rows.push(
        <tr key={i} id={rowID} style={fieldStyle}>
          {cell}
        </tr>
      );
    }
    return (
      <div className="Field">
        <div className="row">
          <div className="col ">
            <table id="simple" style={fieldStyle}>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Field;
