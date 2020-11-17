import React from 'react'
import {Row, Col, Card, Avatar} from 'antd'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';



function DivFive() {
    const {Meta} = Card
    return(
        <>
        
            <Row>
                <p>
                    Latest Articles
                </p>
            </Row>
            <Row>
                            <Card
                    style={{ width: 300 }}
                    cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                    }
                    actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                    ]}
                     >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>
            </Row>
                
               
        
</>
    )
}
export default DivFive