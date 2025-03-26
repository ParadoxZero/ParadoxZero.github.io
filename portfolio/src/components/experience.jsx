import React from 'react';
import { Timeline, Card, Typography, Flex } from 'antd';
import { ReactiveComponent, ViewMode } from './ReactiveComponent';

const { Title, Text } = Typography;

export class Experience extends ReactiveComponent {

    render() {
        const experiences = this.props.experience;
        let renderMode = "alternate";
        if (this.state.responsiveStage > ViewMode.Desktop) {
            renderMode = "left";
        }

        return (
            <>
                <Timeline mode={renderMode} className='section-inner-container'>
                    {experiences.map((experience, index) =>
                        <Timeline.Item key={index}>
                            <Card bordered={true} hoverable={true} className='section-card experience-card'>
                                <Flex vertical gap={10}>
                                    <Title level={4}>{experience.title}</Title>
                                    <Text strong>{experience.timeline}</Text>
                                    <ul>
                                        {experience.points.map((point, index) =>
                                            <li key={index}><Text>{point}</Text></li>
                                        )}
                                    </ul>
                                </Flex>
                            </Card>
                        </Timeline.Item>
                    )}
                </Timeline>
            </>
        )
    }
}