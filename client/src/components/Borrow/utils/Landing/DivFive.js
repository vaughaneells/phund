import React from 'react'
import {Row, Col, Card, Avatar} from 'antd'

import { EditOutlined, EllipsisOutlined, SettingOutlined, GithubOutlined, AntDesignOutlined, AmazonOutlined } from '@ant-design/icons';
import RightSideTriangle from '../DivSixComponents/RSTriangleSVG'
import LeftSideTriangle from '../DivSixComponents/triangleIcon'




function DivFive() {
    const {Meta} = Card
    return(
        <>
        
            <Row
            style={{justifyContent: 'center', marginTop: '80px'}}
            >
                <div
                style={{alignContent: 'center', color: '#2A2958'}}
                >
                   <h1
                   style={{fontWeight:'bold'}}
                   >
                    Latest Articles
                    </h1>
                    <p>
                        Learn more about Peer to Peer Lending
                    </p> 
                </div>
                
            </Row>
            <Row
            style={{marginBottom: '50px'}}
            >
                <Col
                span={3}
                >
                <LeftSideTriangle></LeftSideTriangle>
                </Col>
                <Col
                span={6}
                >
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
                </Col>
                <Col
                span={6}
                >
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
                </Col>
                <Col
                span={6}
                >
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
                </Col>
                <Col
                span={3}
                >
                
                </Col>
                
            </Row>
            <Row
            style={{justifyContent: 'center'}}
            >
               
                    <p
                    style={{fontWeight:'bold', fontSize: '30px', color: '#2A2958'}}
                    >
                        Our Partners
                    </p>
                
            </Row>
            <Row>
                <Col
                span={4}
                >
                
                </Col>
                <Col
                span={6}
                style={{fontSize: '40px'}}
                >
                        <GithubOutlined></GithubOutlined>
                        <p style={{justifyContent: 'center'}}>Stripe</p>
                        
                </Col>
                <Col
                span={6}
                style={{justifyContent: 'center', fontSize: '40px'}}
                >
                        <AntDesignOutlined></AntDesignOutlined>
                        <p>Ant Design</p>
                </Col>
                <Col
                span={6}
                style={{justifyContent: 'center', fontSize: '40px'}}
                >
                    <div>
                      <AmazonOutlined></AmazonOutlined>
                    <p>Amazon</p>  
                    </div>
                    
                </Col>
                <Col
                span={2}
                >
                    <RightSideTriangle></RightSideTriangle>
                </Col>
            </Row>
            
                
               
        
</>
    )
}
export default DivFive