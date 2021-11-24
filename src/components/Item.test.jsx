"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var Item_1 = __importDefault(require("./Item"));
describe('Item test cases', function () {
    it('Item render correctly', function () {
        var order_num = 999;
        var display_num = 888;
        var onclickItemToField = function () { return undefined; };
        var container = (0, react_2.render)(<Item_1.default onclickItemToField={onclickItemToField} order_num={order_num} display_num={display_num}/>).container;
        var cell = container.firstChild;
        expect(cell).not.toBeNull();
        if (!cell)
            return;
        expect(cell.textContent).toEqual('888');
        var element = react_2.screen.getByText(display_num);
        expect(parseInt(element.id) === order_num);
    });
});
