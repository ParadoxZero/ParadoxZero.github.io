import { Menu, Card, Timeline, Descriptions } from 'antd';
import {UserOutlined, ScheduleOutlined, BankOutlined, BookOutlined, BulbOutlined, CodeOutlined} from '@ant-design/icons'
import React from 'react';

export class Body extends React.Component
{
    state = {
        current: {}
    };

    constructor(props)
    {
        super(props);
        this.state.current = props.sections[0];
    }

    findSectinon = key => {
        for ( let section of this.props.sections)
        {
            if(section.header === key)
            {
                return section;
            }
        }
    }

    handleClick = e => {
        let section = this.findSectinon(e.key);
        this.setState({ current: section });
    };

    IconfontStyle = {
        fontSize: '16px'
    }

    mapKeyToIcon = {
        'UserOutlined': <UserOutlined style={this.IconfontStyle}/>,
        'ScheduleOutlined': <ScheduleOutlined style={this.IconfontStyle}/>,
        'BankOutlined': <BankOutlined style={this.IconfontStyle}/>,
        'BookOutlined':<BookOutlined style={this.IconfontStyle}/>,
        'BulbOutlined':<BulbOutlined style={this.IconfontStyle}/>,
        'CodeOutlined': <CodeOutlined style={this.IconfontStyle}/>
    };

    renderExperience()
    {
        const section = this.state.current;
        const experiences = section.content;
        return (
            <>
                <Timeline mode="alternate" className='experience'>
                    {experiences.map( (experience, index) =>
                        <Timeline.Item>
                            <Card bordered={true} hoverable={true} className='section-card experience-card'>
                                <h2>{experience.title}</h2>
                                <h4>{experience.timeline}</h4>
                                    <ul>
                                        {experience.points.map((point, index)=>
                                            <li>{point}</li>
                                        )}
                                    </ul>
                            </Card>
                        </Timeline.Item>
                    )}
                </Timeline>
            </>
        )
    }

    renderOverview()
    {

        return (
            <Card className='section-card section-card-details' bordered={false}>
                {this.state.current.Content.map( (content, index) => 
                    <p>{content}</p>
                )}
            </Card>
        )
    }

    renderEducation()
    {
        const content = this.state.current.content;
        return (
            <div style={{width: '60vw'}}>
            {content.map((detail,index) =>
                <Descriptions title={detail.title} bordered layout='vertical'>
                    <Descriptions.Item label="School">{detail.school}</Descriptions.Item>
                </Descriptions>
            )}

            </div>
        )
    }

    renderContent()
    {
        switch(this.state.current.header)
        {
            case 'Overview': return this.renderOverview();
            case 'Experience': return this.renderExperience();
            case 'Education': return this.renderEducation();
            default: return (<p>No Idea, what?</p>)
        }
    }

    render()
    {
        const sections = this.props.sections;
        return (
            <>
            <Menu onClick={this.handleClick} selectedKeys={this.state.current.header} mode='horizontal' className='nav-bar-container'>
                {sections.map((section, index)=>
                    <Menu.Item key={section.header} icon={this.mapKeyToIcon[section.iconKey]}>{section.header}</Menu.Item>
                )}
            </Menu>
            <div className='section-container'>
                {this.renderContent()}
            </div>
            </>
        )
    }
}