import React from 'react'
import {Row, Col, List, Avatar, Button} from 'antd'
import RightSideTriangle from '../DivSixComponents/RSTriangleSVG'
import LeftSideTriangle from '../DivSixComponents/triangleIcon'
import {TeamOutlined, MinusCircleTwoTone} from '@ant-design/icons'
import '../Landing/CSS/DivThree.css'

function DivThree() {

    const LendButton={
        width: "131px",
        height: "40px",
        marginTop:"10",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor:'#71B8F2',
        borderRadius: "25px",
        borderWidth: "1",
        
    }
    const BorrowButton={
        width: "140px",
        height: "40px",
        marginTop:"10",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor:'#FF5776',
        borderRadius: "25px",
        borderWidth: "1",
        
    }
return(
    <>
        <Row
        align="middle"
        >
            <Col
            lg={1}
            md={24}
            >
                <div>
                    <img src={require('../Landing/Assets/SVG/BlueLeftCloud.svg')} />
                </div>
            </Col>
            <Col
            lg={1}
            >
                
            </Col>   
            <Col
            style={{justifyContent: 'left'}}
            lg={5}
            md={24}
            sm={24}
            >
                
                <img className='divThreeImage' src={require('../Landing/Assets/SVG/kiteFamily.svg')} />
            </Col>
            <Col
            lg={1}
            >
                
            </Col> 
            <Col
            lg={6}
            >
            </Col>
            <Col
            lg={8}
            md={24}
            xs={24}
            style={{justifyContent: 'right'}}
            >
                <div>
                    <h1
                        style={{color: '#FF5776', fontSize: '44px', fontFamily: 'Raleway', fontWeight: 'bolder'}}
                    >
                        Borrowers
                        
                    <h1
                        style={{fontSize: '22px', fontFamily: 'Raleway'}}>
                    Simple Loans. Fair payments. 
                    </h1>
                    </h1>
                    
                </div>
                <List
                style={{fontFamily: 'Raleway', fontSize: '22px', color: '#2A2958'}}
                >
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"No late fees"}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"2%-2.5% interest rate"}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"Fast deposit"}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"Improves credit scores"}
                        />
                    </List.Item>
                    <List.Item>
                    <Button
                        style={BorrowButton}
                        >   
                            <div
                                style={{fontFamily: 'Montserrat', color: "#ffffff", fontSize: '14px'}}
                            >
                               Start Borrowing
                            </div>
                            
                        </Button>
                    </List.Item>
                </List>
            </Col>
            <Col
            lg={2}
            className='rightTriangle'
            >
                <RightSideTriangle></RightSideTriangle>
            </Col>

        </Row>
        <Row
        align='middle'
        >
            <Col
            lg={2}
            className='rightTriangle'
            >
                <LeftSideTriangle></LeftSideTriangle>
            </Col>
            <Col
                lg={3}
            >
            </Col>
            <Col
                lg={5}
                sm={24}
            >
                <div>
                    <h1
                        style={{color: '#71B8F2', fontSize: '44px', fontFamily: 'Raleway', fontWeight: 'bolder'}}
                    >
                        Lenders
                        
                    <h1
                        style={{fontSize: '22px', fontFamily: 'Raleway'}}>
                    Small Loans. Big Returns. 
                    </h1>
                    </h1>
                    
                </div>
                <List
                style={{fontFamily: 'Raleway'}}
                >
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"Up to 10% APY"}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"Socially responsible investments"}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"Auto Investment Option"}
                        />
                    </List.Item>
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Avatar icon={<MinusCircleTwoTone twoToneColor="#eb2f96"/>} />}
                        title={"Monthly returns"}
                        />
                    </List.Item>
                    <List.Item>
                    <Button
                        style={LendButton}
                        >   
                            <div
                                style={{fontFamily: 'Montserrat', color: "#ffffff", fontSize: '14px'}}
                            >
                               Start Lending 
                            </div>
                            
                        </Button>
                    </List.Item>
                </List>
                
            </Col>
            <Col
            lg={8}
            sm={12}
            >
                <img className='seniorImage' src={require('../Landing/Assets/SVG/Seniors.svg')} />
            </Col>
            <Col
            lg={4}
            >
            </Col>
            <Col
            lg={2}
            >
             <img className='rightTriangle' src={require('../Landing/Assets/SVG/BlueRightCloud.svg')} />   
            </Col>

        </Row>

    </>
)
}
export default DivThree