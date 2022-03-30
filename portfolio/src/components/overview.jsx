import React from 'react';
import {Card} from 'antd';

export function Overview(props)
{
    const paragraphs = props.paragraphs;
    console.log(props);
    return (
        <Card className='section-card section-card-details' bordered={false}>
        {paragraphs.map( (content, index) => 
            <p>{content}</p>
        )}
    </Card>
    )
}