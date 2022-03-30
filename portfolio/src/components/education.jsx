import React from 'react';
import {Collapse, Card} from 'antd';

export function Education(props)
{
    const content = props.content;
    console.log(props);
    return (
        <Collapse tabPosition='left' style={{width: '60vw'}} bordered={false} 
            defaultActiveKey={[...Array(content.length).keys()]} ghost>
        {content.map((detail,index) =>
            <Collapse.Panel header={detail.title} key={index} showArrow={false}>
                <Card bordered={true} className='section-card'>
                    <h2>{detail.title}</h2>
                    <h4>{detail.school}</h4>
                </Card>
            </Collapse.Panel>
        )}
        </Collapse>
    )
}