import { GithubFilled, InstagramFilled, LinkedinFilled, DownloadOutlined, MailFilled } from "@ant-design/icons";
import { Image, Space } from "antd";
import React from "react";

import './components.css'
import { ErrorNotFound } from "./ErrorNotFound";
import { ReactiveComponent, ViewMode } from "./ReactiveComponent";

export class Header extends ReactiveComponent {
    render() {
        switch (this.state.responsiveStage) {
            case ViewMode.Desktop: return this.renderDesktop();
            case ViewMode.Tablet:
            case ViewMode.Mobile: return this.renderSmallScreen();
            default: return <ErrorNotFound />
        }
    }

    renderSmallScreen() {
        return (
            <>
                <div className="header-row">
                    {this.renderDisplayPIc()}
                </div>
                <div className="header-row">
                    <Space direction="vertical">
                        <h1>{this.props.name}</h1>
                        <span>{this.props.profile}</span>
                        {this.renderSocials()}
                        {this.renderContactMe()}
                    </Space>
                </div>
            </>

        );
    }

    renderDesktop() {
        return (
            <div className="header-row">
                {this.renderDisplayPIc()}
                <div className="name-container">
                    <Space direction="vertical">
                        <h1>{this.props.name}</h1>
                        <span>{this.props.profile}</span>
                        {this.renderSocials()}
                    </Space>
                </div>
                <div className="contact-container">
                    {this.renderContactMe()}
                </div>

            </div>
        );
    }

    renderDisplayPIc() {
        return <div className="display-pic-container">
            <Image src={this.props.picUrl} width={200} height={200} className="display-pic" />
        </div>;
    }

    renderContactMe() {
        return (
            <Space direction="vertical" size='middle'>
                {this.props.socialUrls.email &&

                    <Space direction="horizontal">
                        <MailFilled />
                        <span>{this.props.socialUrls.email}</span>
                    </Space>
                }
                {
                    <Space direction="horizontal">
                        <DownloadOutlined />
                        <span><a href="https://drive.google.com/file/d/1h7wfq7RAuaFvUgSfg59_HZkOJuRb6ibG/view?usp=sharing">Download Resume</a></span>
                    </Space>
                }
            </Space>
        );
    }

    renderSocials() {
        return <Space direction="horizontal" size="large" className="social-icons">
            <a href={this.props.socialUrls.github}><GithubFilled /></a>
            <a href={this.props.socialUrls.linkedin}><LinkedinFilled /></a>
            <a href={this.props.socialUrls.instagram}><InstagramFilled /></a>
        </Space>;
    }
}