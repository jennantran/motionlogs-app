import React, { Component } from 'react';

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    render(){
        const {count} = this.state;
        return(
            <div>
                <h1>Current count: {count} </h1>
            </div>
        );
    }
    componentDidMount(){
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default Timer;