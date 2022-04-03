import React from 'react';
import { Card, Skeleton, Space, Typography, Tag } from 'antd';
import { EyeOutlined, ForkOutlined, GithubFilled, StarOutlined } from '@ant-design/icons';

import ReactMarkdown from 'react-markdown';

const GITHUB_DOMAIN_BASE = "https://github.com/";
const GITHUB_API_BASE = "https://api.github.com/repos/"
const GITHUB_README_DOMAIN = "https://raw.githubusercontent.com/"

export class GithubProjectDetail extends React.Component {
    state = {}

    tabList = [];

    readmeContent = '';

    constructor(props) {
        super(props);
        this.state.isLoaded = false;
        this.state.details = {
            stars: 0,
            watchers: 0,
            forks: 0,
            default_branch: "master"
        }
        this.state.loadResult = false;
        this.state.isReadmeLoaded = false;
        this.state.readme = "";
        this.state.readmeResult = false;
        this.state.activeTab = "";
    }

    componentDidMount() {
        this.getRepoDetails(this.props.project.link);
        this.getReadmeDetails(this.props.project.link);
    }

    getRepoDetails(githubUrl) {
        const githubApiUrl = githubUrl.replace(GITHUB_DOMAIN_BASE, GITHUB_API_BASE);
        fetch(githubApiUrl).then(
            (response) => response.json(),
            (res) => {
                this.setState({ isLoaded: true, loadResult: false })
            }).then(res => {
                this.setState({
                    isLoaded: true,
                    details: {
                        stars: res.stargazers_count,
                        forks: res.forks_count,
                        watchers: res.watchers_count,
                        default_branch: res.default_branch
                    },
                    loadResult: true
                });
                if (!this.state.isReadmeLoaded || !this.state.readmeResult) {
                    this.getReadmeDetails(githubUrl);
                }
            });
    }

    getReadmeDetails(githubUrl) {
        const readmeUrl = githubUrl.replace(GITHUB_DOMAIN_BASE, GITHUB_README_DOMAIN)
            + "/" + this.state.details.default_branch + "/" + this.props.project.readmePath;
        fetch(readmeUrl).then(response => response.text(),
            response => {
                this.setState({
                    isReadmeLoaded: true,
                    readmeResult: false || this.state.readmeResult
                });
            }
        ).then(res => {
            this.setState({
                readmeResult: true,
                isReadmeLoaded: true,
            });

            this.readmeContent = res;
            this.tabList = [
                {
                    key: 'description',
                    tab: 'Description'
                },
                {
                    key: 'readme',
                    tab: 'Read Me'
                }
            ];

            this.setState({ activeTab: 'description' });
        });
    }

    renderDescription(project) {
        return (
            <Space direction='vertical' size='middle'>
                <div>
                    {project.tags.map((tag, index) => <Tag color='blue'>{tag}</Tag>)}
                </div>
                <Typography.Text>{project.description}</Typography.Text>
            </Space>
        )
    }

    renderReadme() {
        return <ReactMarkdown children={this.readmeContent} />
    }

    renderContent(project) {
        if (this.state.readmeResult) {
            if (this.state.activeTab == 'readme') {
                return this.renderReadme();
            }
        }

        return this.renderDescription(project);
    }

    render() {
        const project = this.props.project;

        let actions = [
            <a href={project.link} ><GithubFilled /> Link</a>
        ]
        if (this.state.isLoaded && this.state.loadResult) {
            actions.push(
                <span><StarOutlined /> {this.state.details.stars}</span>,
                <span><ForkOutlined /> {this.state.details.forks}</span>,
                <span><EyeOutlined /> {this.state.details.watchers}</span>
            );
        }
        else {
            actions.push(
                <Skeleton.Button active shape='round' />,
                <Skeleton.Button active shape='round' />,
                <Skeleton.Button active shape='round' />
            );
        }

        return (
            <>
                <Card title={project.title} actions={actions} className="project-card"
                    tabList={this.tabList} activeTabKey={this.state.activeTab} onTabChange={key => this.setState({ activeTab: key })}>
                    {this.renderContent(project)}
                </Card>
            </>);
    }
}