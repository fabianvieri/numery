import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Radio from '../components/Radio';

export default class Numer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            field: "",
            output: {
                operation: "",
                expression: "",
                result: ""
            }
        };
        this.background = this.props.numer.style;
        this.title = this.props.numer.title;
        this.desc = this.props.numer.desc;
        this.placeholder = this.props.numer.placeholder;
        this.url = this.props.numer.url;
        this.id = this.props.numer.id;
    }

    onClick = () => {
        if (this.id === "medium") {
            console.log("masuk");
            fetch(`${this.url}/${this.state.field}`)
                .then(response => response.json())
                .then(response => this.setState({ output: response }));
        }
    }

    onChange = event => {
        this.setState({ field: event.target.value });
    }

    render() {
        return (
            <div style={this.background} id={this.id} className="pa3 tc flex-column justify-center">
                <h1 className="ma0 white-80">{this.title}</h1>
                <p className="f5 white-50">{this.desc}</p>
                <div className="flex justify-center items-center">
                    <Input onchange={this.onChange} placeholder={this.placeholder} type={this.title} />
                    <Button onclick={this.onClick} />
                </div>
                {this.id === "advanced" ? <Radio /> : ""}
                <div className="flex justify-center pa1">
                    <div className="w-70 ba br2 b--dashed bw1 b--white pa4">
                        <p className="white f3">{this.state.output.result || ""}</p>
                    </div>
                </div>
            </div>
        )
    }
}
