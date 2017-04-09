import React, { Component } from 'react';
import _ from 'underscore';

class Clickme extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked:0
        };
        //this.click = this.click.bind(this);

        console.log(_([1,2,3]).map((x) => x*x))

    }
    click = () => {
        this.setState(function(previous){
            return {clicked:previous.clicked+1}
        })
    }
    render(){
        return <div>
                    <button onClick={this.click}>Clickme</button>
                    <p>I was clicked {this.state.clicked} times </p>
                </div>

    }
}

export default Clickme;