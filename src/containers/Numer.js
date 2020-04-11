import React, { Component } from 'react';
import Input from '../components/Input';

export default class Numer extends Component {

    constructor(props) {
        super(props);
        this.background = this.props.numer.background;
        this.title = this.props.numer.title;
    }

    render() {
        return (
            <div style={this.background}>
                <Input />
            </div>
        )
    }
}
