"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./item.css");
function Item(props) {
    return (<div className="Item" id={'' + props.order_num} onClick={function () { return props.onclickItemToField(props.order_num); }}>
      {props.display_num}
    </div>);
}
exports.default = Item;
