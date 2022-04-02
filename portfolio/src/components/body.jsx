import { Menu, Card, Timeline } from 'antd';
import {UserOutlined, ScheduleOutlined, BankOutlined, BookOutlined, BulbOutlined, CodeOutlined} from '@ant-design/icons'
import React from 'react';
import { Education } from './education';
import {Overview} from './overview';
import { ErrorNotFound } from './ErrorNotFound';
import { Experience } from './experience';

const DEBOUNCE_TIME_DELTA = 500;

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

    componentDidMount() 
    {
        let root = document.getElementById('root');
        root.addEventListener( 'wheel', this.handleScrollGesture);        
    }

    componentWillUnmount() {
        let root = document.getElementById('root');
        root.removeEventListener('wheel', this.handleScrollGesture);
    }

    handleScrollGesture = (ev) => {
        //console.log(ev);
        if(Date.now() - this.scroll_debounce_timestamp > DEBOUNCE_TIME_DELTA)
        {
            if(ev.deltaY > 0) //Going down
            {
                if (this.isScrollAtBottom()) {
                    this.moveSection(1);
                }
            }
            else // going up
            {
                if (this.isScrollAtTop()) {
                        
                    this.moveSection(-1);
                }
            }
            this.scroll_debounce_timestamp = Date.now();
        }
    }

    isScrollAtBottom() {
        let root = document.getElementById('root');
        //console.log(window.innerHeight, window.scrollY, root.scrollHeight)
        return root.scrollHeight - (window.innerHeight + window.scrollY) <= 10;
    }

    isScrollAtTop() {
        let root = document.getElementById('root');
        //console.log(window.innerHeight, window.scrollY, root.scrollHeight)
        return window.scrollY <= 10;
    }

    moveSection = (step) => {
        console.log(this.state)
        if(this.state.current)
        {
            const current_index = this.findIndex(this.state.current.header);
            const next_index = (current_index + 1*step + this.props.sections.length) % this.props.sections.length;
            this.setState({ current:this.props.sections[next_index] });
        }
    };

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

    }

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