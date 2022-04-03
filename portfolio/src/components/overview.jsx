import React from 'react';
import {Card} from 'antd';

export function Overview(props)
{
    const paragraphs = props.paragraphs;
    return (
        <Card className='section-card section-inner-container' bordered={false}>
        {paragraphs.map( (content, index) => 
            <p key={index}>{content}</p>
        )}
    </Card>
    )
}