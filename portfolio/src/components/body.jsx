import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined, ScheduleOutlined, BankOutlined, BookOutlined, BulbOutlined, CodeOutlined, MenuOutlined } from '@ant-design/icons'
import React from 'react';
import { Education } from './education';
import { Overview } from './overview';
import { ErrorNotFound } from './ErrorNotFound';
import { Experience } from './experience';
import { ReactiveComponent, ViewMode } from './ReactiveComponent';
import { Projects } from './projects';

export class Body extends ReactiveComponent {
    state = {};

    constructor(props) {
        super(props);

        const current_path = this.getUrlPath(props);
        this.fetchSectionFromRoute(current_path);
        
    }

    findSection = key => {
        for (let section of this.props.sections) {
            if (section.header === key) {
                return section;
            }
        }
    }

    handleClick = e => {
        let section = this.findSection(e.key);
        this.setSection(section);
    };

    IconfontStyle = {
        fontSize: '16px'
    }

    mapKeyToIcon = {
        'UserOutlined': <UserOutlined style={this.IconfontStyle} />,
        'ScheduleOutlined': <ScheduleOutlined style={this.IconfontStyle} />,
        'BankOutlined': <BankOutlined style={this.IconfontStyle} />,
        'BookOutlined': <BookOutlined style={this.IconfontStyle} />,
        'BulbOutlined': <BulbOutlined style={this.IconfontStyle} />,
        'CodeOutlined': <CodeOutlined style={this.IconfontStyle} />
    };

    setSection(section) {
        this.setState({ current: section });
        window.location.assign("/#/" + section.header);
    }

    getUrlPath(props) {
        if (window.location.pathname === "/" && window.location.hash.length === 0) { 
            // No path in url -> go to first section
            const new_path = props.sections[0].header;
            window.location.assign("/#/" + new_path);
            return new_path;
        }

        const current_path = window.location.hash.replace("/", "").replace("#", "");
        return current_path;
    }

    fetchSectionFromRoute(current_path) {
        const section = this.findSection(current_path);
        if (section)
            this.state.current = section;
        else
            this.state.current = {header:'NotFound'}; // generate error section by giving invalid keyword. 
    }

    renderContent() {
        switch (this.state.current.header) {
            case 'Overview': return <Overview paragraphs={this.state.current.content} />
            case 'Experience': return <Experience experience={this.state.current.content} />
            case 'Education': return <Education content={this.state.current.content} />
            case 'Projects': return <Projects projects = {this.state.current.content} />
            default: return <ErrorNotFound />
        }
    }

    render() {
        const sections = this.props.sections;
        return (
            <>
                {this.renderMenu(sections)}
                <div className='section-container' id='section-content'>
                    {this.renderContent()}
                </div>
            </>
        )
    }

    renderMenu(sections) {
        switch (this.state.responsiveStage){
            case ViewMode.Desktop:
            case ViewMode.Tablet: return this.renderNavBar(sections);
            case ViewMode.Mobile: return this.renderMobileMenu(sections);
            default: return <ErrorNotFound />;
        }
    }

    renderNavBar(sections) {
        return(
        <Menu onClick={this.handleClick} selectedKeys={this.state.current.header} mode='horizontal' className='nav-bar-container'>
            {sections.map((section, index) => <Menu.Item key={section.header} icon={this.mapKeyToIcon[section.iconKey]}>{section.header}</Menu.Item>
            )}
        </Menu>
        );
    }

    renderMobileMenu(sections) {
        return (
            <div className='mobile-menu'>
                <Dropdown overlay={this.renderNavBar(sections)} overlayClassName="mobile-menu-overlay">
                    <Button type='primary' icon={<MenuOutlined />} className='mobile-menu-button' ghost size='large'>
                        Menu 
                    </Button>
                </Dropdown>
            </div>
        )
    }
}