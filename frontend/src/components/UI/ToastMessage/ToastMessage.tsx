import React, { Component } from "react";

// import "./ToastMessage.css";


interface ToasterMessageProps {
    text : string;
    icon? : string;
} 

const ToasterMessage = (props : ToasterMessageProps) => {
    return (
        <div className="toaster-message-container">
            <div className="message-icon-wrapper">
                <span className={`${props.icon}-mark`}></span>
            </div>
            <span className="toaster-text">{props.text}</span>
        </div>
    )
}

export default ToasterMessage;
