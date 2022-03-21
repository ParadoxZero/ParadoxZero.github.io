import { Col, Row, Image } from "antd";
import React from "react";

import './components.css'

export class Header extends React.Component 
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
        <div className="header-row">
            <div className="display-pic-container" >
            <Image src={this.props.picUrl} width={200} height={200} className="display-pic" />
            </div>
            <div className="name-container">
                <h1>{this.props.name}</h1>
                <span>{this.props.profile}</span>
            </div>
        </div>
        )
    }
}