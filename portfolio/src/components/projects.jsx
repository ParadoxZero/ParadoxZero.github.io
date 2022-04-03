import { Card, Skeleton, Space, Tag, Typography } from "antd";
import React from "react";
import { GithubProjectDetail } from "./GithubProjectDetail";
import { ReactiveComponent } from "./ReactiveComponent";

export class Projects extends ReactiveComponent {

    renderPublication(project, index) {
        return (
            <Card className="project-card" title={project.title}>
                <Space direction="vertical">
                <div><Typography.Text strong>DOI -</Typography.Text> <Typography.Text>{project.DOI}</Typography.Text></div>
                <div><Typography.Text strong>Conference - </Typography.Text> <Typography.Text>{project.conference}</Typography.Text></div>
                <div>
                    {project.tags.map((tag, index) => <Tag color='blue'>{tag}</Tag>)}
                </div>
                <div>
                    <Typography.Title level={5}>Abstract</Typography.Title>
                    <Typography.Paragraph>
                        {project.abstract}
                    </Typography.Paragraph>
                </div>
                <div>
                    <Typography.Text strong>Link -</Typography.Text> <Typography.Text><a href={project.link}>{project.link}</a></Typography.Text>
                </div>
                </Space>
            </Card>
        )
    }

    renderDetails = (project, index) => {
        switch (project.type) {
            case "github": return <GithubProjectDetail project={project} key={index} />;
            case "publication": return this.renderPublication(project, index);
        }
    }

    render() {
        const projects = this.props.projects;
        return (
            <>
                <div className="section-inner-container">
                    <Space direction="vertical" size="middle">

                        {projects.map((project, index) =>
                            this.renderDetails(project, index)
                        )}

                    </Space>
                </div>
            </>
        );
    }
}