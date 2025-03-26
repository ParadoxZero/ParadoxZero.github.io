import React from 'react';
import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

export function Overview(props) {
    const paragraphs = props.paragraphs;
    return (
        <Card className='section-card section-inner-container' bordered={false}>
            {paragraphs.map((content, index) =>
                <Paragraph key={index}>{content}</Paragraph>
            )}
        </Card>
    )
}