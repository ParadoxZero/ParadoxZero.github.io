import { GithubFilled, InstagramFilled, LinkedinFilled, DownloadOutlined, MailOutlined } from "@ant-design/icons";
import { Image, Space, Flex, Typography } from "antd";
import React from "react";

import './components.css'
import { ErrorNotFound } from "./ErrorNotFound";
import { ReactiveComponent, ViewMode } from "./ReactiveComponent";

const { Title, Paragraph, Link } = Typography;

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
                        <Title level={1}>{this.props.name}</Title>
                        <Paragraph>{this.props.profile}</Paragraph>
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
                        <Title level={1}>{this.props.name}</Title>
                        <Paragraph>{this.props.profile}</Paragraph>
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

        const email = "mailto:" + this.props.socialUrls.email;
        return (
            <Flex vertical justify="space-between" gap={15} align="center" size='middle'>
                {this.props.socialUrls.email &&
                    <Link href={email}>
                        <Flex gap={10} justify="space-between" align="center">
                            <MailOutlined style={{ fontSize: 20 }} label={this.props.socialUrls.email} />
                            <span>{this.props.socialUrls.email}</span>
                        </Flex>
                    </Link>
                }
                {
                    <Link href={this.props.socialUrls.resume}>
                        <Flex gap={10} justify="space-between" align="center" >
                            <DownloadOutlined style={{ fontSize: 20 }} />
                            <span>Download Resume</span>
                        </Flex>
                    </Link>

                }
            </Flex>
        );
    }

    renderSocials() {
        return <Space direction="horizontal" size="large" className="social-icons">
            <Link href={this.props.socialUrls.github}><GithubFilled /></Link>
            <Link href={this.props.socialUrls.linkedin}><LinkedinFilled /></Link>
            <Link href={this.props.socialUrls.instagram}><InstagramFilled /></Link>
        </Space>;
    }
}