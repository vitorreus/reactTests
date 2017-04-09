import React, { Component } from 'react';

class Load extends Component {
    constructor (props) {
        super(props)
        fetch('test.json').then( function(d) {
            d.json().then(function(j) {
                this.setState({data:j})
            }.bind(this))
        }.bind(this));
        this.state = {x:1,data:[]}

        setInterval(function(){
            this.setState(function(prevState) {
            return {
                x:prevState.x+1
            }})
        }.bind(this), 100)
    }
    render(){
        return <div>
                    <div>{this.props.name}</div>
                    <div>{this.state.x}</div>   
                    <div>
                    {this.state.data.map( it =>
                        <div key={it.id}>{it.content}</div>
                    )}
                    </div>   
                </div>
        

    }
}


export default Load;