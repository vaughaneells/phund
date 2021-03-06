import React from 'react'
import {Row, Col, Card, Avatar} from 'antd'
import '../Landing/CSS/DivFive.css'
// import { GithubOutlined, AntDesignOutlined, AmazonOutlined } from '@ant-design/icons';
// import RightSideTriangle from '../DivSixComponents/RSTriangleSVG'
import LeftSideTriangle from './Assets/DivSixComponents/triangleIcon'




function DivFive() {
    const {Meta} = Card
    return(
        <>
         <Row
            align="middle"
        >
            <Col
            lg={8}
            >
            </Col>
            <Col
            lg={8}
            xs={24}
            style={{justifyItems: 'center'}}
            >
               <div
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: '70px'}}
                >     
                    <h1
                        style={{display: 'flex', justifyContent: 'center'}}
                    >
                    Latest Articles
                    </h1>
                </div>
                <div
                        style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"}}
                >
                    <h2
                    style={{justifyItems: 'center', fontSize: '18px'}}
                    >
                    Learn more about all things finance
                    </h2> 
                </div>
            </Col>
            <Col
                lg={8}
            >
            </Col>
            </Row>
            <Row
            style={{marginBottom: '50px'}}
            >
                <Col
                lg={3}
                md={0}
                className='hideDiv'
                >
                <LeftSideTriangle></LeftSideTriangle>
                </Col>
                <Col
                lg={6}
                md={8}
                >
                <Card
                    style={{ width: 300 }}
                    cover={
                    <img src={require('../Landing/Assets/SVG/MainPhundImage.svg')} />
                    }
                    
                    >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Hello"
                    description="This is the description"
                    />
                    </Card>
                </Col>
                <Col
                lg={6}
                md={8}
                >
                    <Card
                    style={{ width: 300 }}
                    cover={
                    <img src={require('../Landing/Assets/SVG/MainPhundImage.svg')} />
                    }
                    
                    >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                    </Card>
                </Col>
                <Col
                lg={6}
                md={8}
                >
                    <Card
                    style={{ width: 300 }}
                    cover={
                    <img src={require('../Landing/Assets/SVG/MainPhundImage.svg')} />
                    }
                    
                    >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                    </Card>
                </Col>
                <Col
                lg={3}
                md={0}
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
           
            
                
               
        
</>
    )
}
export default DivFive