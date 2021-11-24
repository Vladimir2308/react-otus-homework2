"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Item_1 = __importDefault(require("./Item"));
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(props) {
        var _this = _super.call(this, props) || this;
        _this.onclickItemToField = function (id) {
            if (_this.state.display_num === id) {
                _this.setState({
                    display_num: null,
                });
            }
            else {
                _this.setState({
                    display_num: id,
                });
            }
        };
        _this.state = {
            display_num: null,
        };
        return _this;
    }
    Field.prototype.render = function () {
        var _a = this.props, horiz_count = _a.horiz_count, vertic_count = _a.vertic_count;
        var members = getMembers(horiz_count, vertic_count);
        var rows = [];
        var counter = 0;
        var fieldStyle = {
            borderCollapse: 'collapse',
            padding: 0,
        };
        function getMembers(horiz_count, vertic_count) {
            var items = [];
            var rows;
            for (var i = 0; i < horiz_count; i++) {
                rows = [];
                for (var k = 0; k < vertic_count; k++) {
                    rows.push(Math.round(Math.random()));
                }
                items.push(rows);
            }
            return items;
        }
        for (var i = 0; i < members.length; i++) {
            var rowID = "row" + i;
            var cell = [];
            for (var j = 0; j < members[i].length; j++) {
                var cellID = "cell" + i + "-" + j;
                counter++;
                var num = null;
                if (this.state.display_num === counter) {
                    num = counter;
                }
                // cell.push(<td key={cellID} id={cellID} style={fieldStyle}><Item display_num={members[i][j]} order_num={counter} itemToField={this.itemToField}/></td>)
                cell.push(<td key={cellID} id={cellID} style={fieldStyle}>
            <Item_1.default display_num={num} order_num={counter} onclickItemToField={this.onclickItemToField}/>
          </td>);
            }
            rows.push(<tr key={i} id={rowID} style={fieldStyle}>
          {cell}
        </tr>);
        }
        return (<div className="Field">
        <div className="row">
          <div className="col ">
            <table id="simple" style={fieldStyle}>
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>
      </div>);
    };
    return Field;
}(react_1.default.Component));
exports.default = Field;
