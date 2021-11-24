"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.Primary = void 0;
var react_1 = __importDefault(require("react"));
var Item_1 = __importDefault(require("./Item"));
exports.default = {
    component: Item_1.default,
    title: 'Item',
};
var Template = function (args) { return (<Item_1.default onclickItemToField={undefined} order_num={0} display_num={null} {...args}/>); };
exports.Primary = Template.bind({});
exports.Primary.args = { display_num: 2 };
exports.Secondary = Template.bind({});
exports.Secondary.args = { display_num: 5 };
exports.Tertiary = Template.bind({});
exports.Tertiary.args = { display_num: 999 };
