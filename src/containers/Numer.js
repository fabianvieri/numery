import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

export default class Numer extends Component {

    constructor(props) {
        super(props);
        this.background = this.props.numer.style;
        this.title = this.props.numer.title;
        this.desc = this.props.numer.desc;
        console.log(this.background);
    }

    onInput = () => {

    }

    render() {
        return (
            <div style={this.background} id={this.title} className="vh-50 pa3 tc">
                <h1 className="ma0 white-80">{this.title}</h1>
                <p className="f5 white-50">{this.desc}</p>
                <Input onkeyup={this.onInput} />
                <Button onpress={this.onInput} />
            </div>
        )
    }
}
