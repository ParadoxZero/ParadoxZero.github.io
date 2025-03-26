import { Flex, Typography } from "antd";
import React from "react";

const { Text, Link } = Typography;

export function Footer(props) {
    return (
        <Flex vertical gap={4} id="footer">
            <Text>
                {props.content}
            </Text>
            <Text>
                Checkout the awesome ecom store. <Link href="https://thelehar.com">The Lehar.</Link>
            </Text>
        </Flex>
    );
}
