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
            <Collapse.Panel header={detail.header} key={index} showArrow={false}>
                <Card bordered={true} className='section-card'>
                    <h2>{detail.school}</h2>
                    <h4>{detail.course}</h4>
                    <h5>{detail.timeline}</h5>
                </Card>
            </Collapse.Panel>
        )}
        </Collapse>
    )
}