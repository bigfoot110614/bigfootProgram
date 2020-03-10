import React, { Component } from 'react';
import { render } from 'react-dom';
// import CSSTransitionGroup from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.css'

export default class User extends Component {

    constructor(props){
        super(props)
        this.state = {
            items: ['111'],
        }
    }

    add = () => {
        let newItems = this.state.items
        newItems.push(1111111)
        this.setState({ items: newItems })
    }

    remove = (i) => {
        let newItems = this.state.items.slice()
        newItems.splice(i,1)
        this.setState({ items: newItems })
    }

    getDerivedStateFromProps() {

    }

    componentDidMount(){
        console.log(window.fetch)
        window.fetch('/username')
        .then(data => {
            console.log(data)
        }).finally(a => {
            console.log(a)
        })
    }

    render () {
        // return(<div>
        //    hi, username
        // </div>)
        return (
            <div>
                <button onClick={this.add}></button>
                <div className="project">
                    <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {
                            this.state.items.map((item, i) => (
                                <div className="item-wrapper">
                                    <span className="item" key={i} onClick={this.remove}>{item}</span>
                                </div>
                            ))
                        }
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}