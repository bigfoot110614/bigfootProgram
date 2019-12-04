// import React, { Component } from 'react';
// import { render } from 'react-dom';
//
// class HelloMessage extends Component {
//     render() {
//         return <div>Hello {this.props.name}</div>;
//     }
// }
//
// let div = document.createElement('div')
// div.setAttribute('id', 'appContainer')
// document.appendChild(div)
//
// const mountNode = document.getElementById('appContainer')
// // 加载组件到 DOM 元素 mountNode
// render(<HelloMessage name="John" />, mountNode);
//

import React, { Component } from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {hot} from 'react-hot-loader'

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);

const mountNode = document.getElementById('app');

class HelloMessage extends Component {
    render() {
        return <div>Hello</div>;
    }
}


render(<HelloMessage />, mountNode);

if(hot && process.env.NODE_ENV !== 'production'){
    hot.accept();
}