import React, { Component } from 'react';
import { render } from 'react-dom';

export default class User extends Component {

    constructor(){
        super()
        this.state = {
        
        }
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
        return(<div>
           hi, username
        </div>)
    }
}