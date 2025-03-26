import React from 'react';
import { Collapse, Card, Typography } from 'antd';

const { Title, Text } = Typography;

export function Education(props) {
    const content = props.content;
    console.log(props);
    return (
        <Collapse tabPosition='left' className='section-inner-container' bordered={false}
            defaultActiveKey={[...Array(content.length).keys()]} ghost>
            {content.map((detail, index) =>
                <Collapse.Panel header={detail.header} key={index} showArrow >
                    <Card bordered={true} className='section-card'>
                        <Title level={4}>{detail.school}</Title>
                        <Title level={5}>{detail.course}</Title>
                        <Text strong>{detail.timeline}</Text>
                    </Card>
                </Collapse.Panel>
            )}
        </Collapse>
    )
}