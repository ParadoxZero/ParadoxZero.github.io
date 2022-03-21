import { Menu } from 'antd';
import {UserOutlined, ScheduleOutlined, BankOutlined, BookOutlined, BulbOutlined, CodeOutlined} from '@ant-design/icons'
import React from 'react';

export class Body extends React.Component
{
    state = {
        current: ''
    };

    constructor(props)
    {
        super(props);
        this.state.current = props.sections[0].header;
    }

    handleClick = e => {
        this.setState({ current: e.key });
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

    render()
    {
        const sections = this.props.sections;
        return (
            <>
            <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode='horizontal' className='nav-bar-container'>
                {sections.map((section, index)=>
                    <Menu.Item key={section.header} icon={this.mapKeyToIcon[section.iconKey]}>{section.header}</Menu.Item>
                )}
            </Menu>
            </>
        )
    }
}