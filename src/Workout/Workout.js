import React, { Component } from 'react';

class Workout extends Component{
    render(){
        return(
            <section id={this.props.id}>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
             </section>
        );
    }
}

export default Workout;