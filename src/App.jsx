"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = exports.App = void 0;
var react_1 = __importDefault(require("react"));
// import { Provider } from 'react-redux';
var App = function () { return (<ul>
                <li>
                    123
                </li>
                <li>
                   456
                </li>
                <li>
                   789
                </li>
            </ul>); };
exports.App = App;
var Home = function () { return <h2>Minesweeper game Forever!</h2>; };
exports.Home = Home;
