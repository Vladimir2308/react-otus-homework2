"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("./Field"));
exports.default = {
    component: Field_1.default,
    title: 'Field',
};
var Template = function (args) { return (<Field_1.default horiz_count={0} vertic_count={0} {...args}/>); };
//👇 Each story then reuses that template
exports.Primary = Template.bind({});
exports.Primary.args = { horiz_count: 2, vertic_count: 3 };
exports.Secondary = Template.bind({});
exports.Secondary.args = { horiz_count: 5, vertic_count: 5 };
exports.Tertiary = Template.bind({});
exports.Tertiary.args = { horiz_count: 20, vertic_count: 40 };
