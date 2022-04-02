import { Menu, Card, Timeline } from 'antd';
import {UserOutlined, ScheduleOutlined, BankOutlined, BookOutlined, BulbOutlined, CodeOutlined} from '@ant-design/icons'
import React from 'react';
import { Education } from './education';
import {Overview} from './overview';
import { ErrorNotFound } from './ErrorNotFound';
import { Experience } from './experience';

export class Body extends React.Component
{
    state = {
        current: {}
    };

    scroll_debounce_timestamp = 0;

    constructor(props)
    {
        super(props);
        this.state.current = props.sections[0];
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

    renderContent()
    {
        switch(this.state.current.header)
        {
            case 'Overview': return <Overview paragraphs = {this.state.current.content} />
            case 'Experience': return <Experience experience= {this.state.current.content} />
            case 'Education': return <Education content = {this.state.current.content} />
            default: return <ErrorNotFound />
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