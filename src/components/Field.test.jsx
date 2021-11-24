"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var user_event_1 = __importDefault(require("@testing-library/user-event"));
var Field_1 = __importDefault(require("./Field"));
describe('Field test cases', function () {
    it('Field render correctly, click item work 2x3', function () {
        var container = (0, react_2.render)(<Field_1.default horiz_count={20} vertic_count={40}/>).container;
        var elementsByClassName = container.getElementsByClassName('Item')[0];
        expect(react_2.screen.queryByText(1)).not.toBeInTheDocument();
        user_event_1.default.click(elementsByClassName);
        expect(react_2.screen.getByText(1));
    });
    it('Field render correctly, click item work 5x5', function () {
        var container = (0, react_2.render)(<Field_1.default horiz_count={20} vertic_count={40}/>).container;
        var elementsByClassName = container.getElementsByClassName('Item')[0];
        expect(react_2.screen.queryByText(1)).not.toBeInTheDocument();
        user_event_1.default.click(elementsByClassName);
        expect(react_2.screen.getByText(1));
    });
    it('Field render correctly, click item work 20x40', function () {
        var container = (0, react_2.render)(<Field_1.default horiz_count={20} vertic_count={40}/>).container;
        var elementsByClassName = container.getElementsByClassName('Item')[0];
        expect(react_2.screen.queryByText(1)).not.toBeInTheDocument();
        user_event_1.default.click(elementsByClassName);
        expect(react_2.screen.getByText(1));
    });
});
