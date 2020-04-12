import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Radio from '../components/Radio';

export default class Numer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            field: ""
        };
        this.background = this.props.numer.style;
        this.title = this.props.numer.title;
        this.desc = this.props.numer.desc;
        this.placeholder = this.props.numer.placeholder;
        this.url = this.props.numer.url;
    }

    onClick = event => {

    }



    onChange = event => {
        this.setState({ field: event.target.value });
    }

    render() {
        return (
            <div style={this.background} id={this.title} className="vh-50 pa3 tc overflow-auto">
                <h1 className="ma0 white-80">{this.title}</h1>
                <p className="f5 white-50">{this.desc}</p>
                <div className="flex justify-center items-center">
                    <Input onchange={this.onChange} placeholder={this.placeholder} type={this.title} />
                    <Button onclick={this.onClick} />
                </div>
                {this.title === "ccalculus" ? <Radio /> : ""}
            </div>
        )
    }
}
