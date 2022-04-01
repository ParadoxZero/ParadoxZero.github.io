import React from 'react';
import {Timeline, Card} from 'antd';

export function Experience(props) {
    const experiences = props.experience;
    return (
        <>
            <Timeline mode="alternate" className='experience'>
                {experiences.map( (experience, index) =>
                    <Timeline.Item key={index}>
                        <Card bordered={true} hoverable={true} className='section-card experience-card'>
                            <h2>{experience.title}</h2>
                            <h4>{experience.timeline}</h4>
                                <ul>
                                    {experience.points.map((point, index)=>
                                        <li key={index}>{point}</li>
                                    )}
                                </ul>
                        </Card>
                    </Timeline.Item>
                )}
            </Timeline>
        </>
    )
}