import React, { Component } from 'react';
class TextBox extends Component {


    render() {
        return (
            <div>
                <h1> T'as Cliqué {this.props.nbClicked} fois </h1>
            </div>
        );
    }
}

export default TextBox;
