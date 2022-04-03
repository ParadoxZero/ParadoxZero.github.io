import React from 'react';
import {Timeline, Card} from 'antd';
import { ReactiveComponent, ViewMode } from './ReactiveComponent';

export class Experience extends ReactiveComponent{
    
    render() {
        const experiences = this.props.experience;
        let renderMode = "alternate";
        if(this.state.responsiveStage > ViewMode.Desktop)
        {
            renderMode = "left";
        }
        
        return (
            <>
                <Timeline mode={renderMode} className='section-inner-container'>
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
}