import React, { Component } from 'react';
import { Button, Container } from "react-bootstrap";
import './start.css'

class startPage extends Component {
    render() {
        return (
            <div className="startPage">
            <Button style={{borderRadius: "30px"}} href="/user/details" className="startChat" variant="success"><span>Start Chatting</span></Button>
            <Button style={{borderRadius: "30px"}} href="/howtostart" className="faq" variant="outline-dark">How to get started?</Button>
        </div>
        );
    }
}

export default startPage;