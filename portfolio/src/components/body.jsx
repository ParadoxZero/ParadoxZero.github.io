import { Menu, Card, Timeline, Tabs, Collapse } from 'antd';
import {UserOutlined, ScheduleOutlined, BankOutlined, BookOutlined, BulbOutlined, CodeOutlined} from '@ant-design/icons'
import React from 'react';
import { Education } from './education';
import {Overview} from './overview';

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

    componentDidMount()
    {
        const myDiv = document.querySelector('#section-content')  
        window.addEventListener('scroll', () => {  
        if (window.offsetHeight  >= window.scrollHeight) {  
            console.log('scrolled to bottom');
            // const current_index = this.findIndex(this.state.current.header);
            // const max = this.props.length;
            // const next_index = (current_index+1) % max;
            // this.setState({current:this.props.sections[next_index]})  
        }  
        })
    }

    findIndex = key => {
        const max = this.props.sections.length;
        const sections = this.props.sections;
        for ( let i=0; i<max; ++i)
        {
            if(sections[i].header === key)
            {
                return i;
            }
        }
    }

    findSection = key => {
        for ( let section of this.props.sections)
        {
            if(section.header === key)
            {
                return section;
            }
        }
    }

    handleClick = e => {
        let section = this.findSection(e.key);
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

    renderContent()
    {
        switch(this.state.current.header)
        {
            case 'Overview': return <Overview paragraphs = {this.state.current.content} />
            case 'Experience': return this.renderExperience();
            case 'Education': return <Education content = {this.state.current.content} />
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
            <div className='section-container' id='section-content'>
                {this.renderContent()}
            </div>
            </>
        )
    }
}