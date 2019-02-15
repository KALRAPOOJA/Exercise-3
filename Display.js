import React, { Component } from 'react';

class Display extends Component{
    render()
    {
        return(
        <div>
        <div>This is {this.props.name} and my age is {this.props.age}</div>
        
            </div>
        )
    }
}
export default Display;