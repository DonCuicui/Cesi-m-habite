import React, { Component } from 'react';
class Button extends Component {


    render() {
        return (
            <a href="#" onClick={this.props.handleClick}>{this.props.text}</a>
        );
    }
}

export default Button;