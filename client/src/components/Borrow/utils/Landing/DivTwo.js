import React from 'react'
import {Row, Col, Card, Avatar} from 'antd'
import {TeamOutlined, MinusCircleTwoTone} from '@ant-design/icons'
import '../Landing/CSS/DivTwo.css'





function DivTwo () {

    const cardStyle ={
            width: "260px", 
            height: "192px", 
            borderRadius: "16px", 
            // marginRight: "24px", 
            boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
         
                        }
    const {Meta} = Card;

    return (
        <>
        <Row
        style={{marginTop: '100px', marginBottom: '100px'}}
        >
            <Col
            lg={1}
            >
            </Col>
            <Col
            lg={4}
            >
            <img src={require('../Landing/Assets/SVG/AirplaneOne.svg')} />
            </Col>
            <Col
            lg={14}
            

            >
                <h1
                    style={{fontSize: '44px', color: '#ffffff', fontFamily: 'Raleway', fontWeight: 'bolder', textAlign: 'center'}}
                >
                    How does Phund work?
                </h1>
                <Row
                style={{marginBottom: '50px', marginTop: '50px'}}
                >
                    <Col
                    lg={24}
                    xs={24}
                    >
                        <h1
                        style={{fontSize: '44px', color: '#ffffff', fontFamily: 'Raleway', 
                        fontWeight: 'bolder', textAlign: 'center', 
                        WebkitTextStrokeColor: '#FF5776', WebkitTextStrokeWidth: '1px'}}
                        
                        >
                            BORROWERS
                        </h1>
                    </Col>
                    
                </Row>  
                <Row
                type='flex'
                justify='space-between'
                >
                    <Col
                    
                    lg={8}
                    xs={24}
                    >
                        <Card
                        style={cardStyle}
                        className='centerText'
                        >
                            <Meta 
                            title="Step 1" 
                            description="Make an account and accept the Terms of Service" 
                            avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                            ></Meta>
                            
                        </Card>
                    </Col>
                    <Col
                    lg={8}
                    xs={24}
                    
                    >
                        <Card
                        style={cardStyle}
                        className='centerText'
                        >
                            <Meta 
                            title="Step 2" 
                            description="Make an account and accept the Terms of Service" 
                            avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                            ></Meta>
        
                        </Card>
                    </Col>
                    <Col
                    lg={8}
                    xs={24}
                    >
                        <Card
                        style={cardStyle}
                        className='centerText'
                        >
                            <Meta 
                            title="Step 3" 
                            description="Make an account and accept the Terms of Service" 
                            avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                            ></Meta>
                        
                        </Card>
                    </Col>
                    
                </Row>
                <Row
                style={{marginBottom: '50px', marginTop: '50px'}}
                >
                    <Col
                    lg={24}
                    xs={24}
                    >
                        <h1
                        style={{fontSize: '44px', color: '#ffffff', fontFamily: 'Raleway', 
                        fontWeight: 'bolder', textAlign: 'center', WebkitTextStrokeColor: '#FF5776', WebkitTextStrokeWidth: '1px'}}
                        >
                            LENDERS
                        </h1>
                    </Col>
                    
                </Row>  
                <Row>
                    
                    <Col
                    lg={8}
                    xs={24}
                    sm={24}
                    >
                        
                        
                        
                            <Card
                                style={cardStyle}
                                className='centerText'>
                            <Meta 
                            title="Step 1" 
                            description="Make an account and accept the Terms of Service" 
                            avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                            ></Meta>
                        </Card>
                        
                        
                    </Col>
                    <Col
                    lg={8}
                    xs={24}
                    sm={24}
                    >
                        <Card
                            style={cardStyle}
                            className='centerText'
                        >
                            <Meta 
                            title="Step 2" 
                            description="Make an account and accept the Terms of Service" 
                            avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                            ></Meta>
                        </Card>
                    </Col>
                    <Col
                    lg={8}
                    xs={24}
                    sm={24}
                    >
                        <Card
                        style={cardStyle}
                        className='centerText'>
                            <Meta 
                            title="Step 3" 
                            description="Make an account and accept the Terms of Service" 
                            avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                            ></Meta>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col
            lg={4}
            >
            <img src={require('../Landing/Assets/SVG/RightAirplaneDivTwo.svg')} />
            </Col>
            <Col
            lg={1}
            >
            </Col>
        </Row>
        </>
    )
}

export default DivTwo