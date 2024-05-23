import React, { Component } from "react";

export default class Message extends Component {
    constructor() {
        super();
        this.state = {
            poruka: "Pozzzzz",
        };    
    }
    render() {
        return <div>{this.state.poruka}</div>;
    }
}