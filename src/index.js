// импорт react в TS отличается от привычного import React from 'react' из-за особенностей модульной системы в TS
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// функциональный компонент
var App = function (props) { return React.createElement("h1", null, props.title); };
ReactDOM.render(React.createElement(App, { title: "Hello, React!" }), document.getElementById('root'));
