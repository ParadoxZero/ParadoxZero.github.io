import { GithubFilled, InstagramFilled, MailOutlined, LinkedinFilled } from "@ant-design/icons";
import { Card, Image, Space } from "antd";
import React from "react";

import './components.css'

export class Header extends React.Component 
{
    render()
    {
        return(
        <div className="header-row">
            <div className="display-pic-container" >
            <Image src={this.props.picUrl} width={200} height={200} className="display-pic" />
            </div>
            <div className="name-container">
                <Space direction="vertical">
                    <h1>{this.props.name}</h1>
                    <span>{this.props.profile}</span>
                    <Space direction="horizontal" size="large" className="social-icons">
                        <a href={this.props.socialUrls.github}><GithubFilled/></a>
                        <a href={this.props.socialUrls.linkedin}><LinkedinFilled/></a>
                        <a href={this.props.socialUrls.instagram}><InstagramFilled/></a>
                    </Space>
                </Space>
            </div>
        </div>
        )
    }
}