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
            },
            trivia: "",
            isError: false
        };
        this.background = this.props.numer.style;
        this.title = this.props.numer.title;
        this.desc = this.props.numer.desc;
        this.placeholder = this.props.numer.placeholder;
        this.url = this.props.numer.url;
        this.id = this.props.numer.id;
        if (this.id === "advanced") {
            this.calcState = "derive";
        } else {
            this.calcState = "";
        }
    }

    onClick = () => {
        if (this.id === "trivia") {
            fetch(`${this.url}/${this.state.field}/trivia`)
                .then(response => response.text())
                .catch(this.fetchCatch)
                .then(response => this.setState({ trivia: response }));
        } else {
            const currUrl = this.id === "advanced" ? `${this.url}/${this.calcState}` : this.url;
            fetch(`${currUrl}/${this.state.field}`)
                .then(response => response.json())
                .catch(this.fetchCatch)
                .then(response => this.setState({ output: response }));
        }
    }

    fetchCatch = () => {
        this.setState({ isError: true });
    }

    onChange = event => {
        this.setState({ field: event.target.value });
    }

    radioChange = event => {
        this.calcState = event.target.value;
    }

    processResult() {
        const error = `can't process your number or expression`;
        if (!this.state.isError) {
            if (this.id === "trivia") {
                if (this.state.trivia.includes("Cannot")) {
                    return error;
                }
                return this.state.trivia;
            }
            else {
                if (this.state.output.result === "NaN") {
                    return error;
                } else {
                    const result = this.state.output.result;
                    if (this.id === "basic" && result !== "" && result.length > 1) {
                        return result.split(" ").map(s => `${s[0]}`).join(", ");
                    }
                }
                return this.state.output.result;
            }
        }
        return error;
    }

    render() {
        return (
            <div style={this.background} id={this.id} className="pa5 tc flex-column justify-center">
                <h1 className="ma0 white-80">{this.title}</h1>
                <p className="f5 white-50">{this.desc}</p>
                <div className="flex justify-center items-center">
                    <Input onchange={this.onChange} placeholder={this.placeholder} type={this.title} />
                    <Button onclick={this.onClick} />
                </div>
                {this.id === "advanced" ? <Radio onchange={this.radioChange} /> : ""}
                <div className="flex justify-center pa1">
                    <div className="w-70 ba br2 b--dashed bw1 b--white pa3">
                        <p className="white f3"> {this.processResult()} </p>
                    </div>
                </div>
            </div>
        )
    }
}
