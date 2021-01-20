import React from 'react'

import {Button, Row, Menu, Col, Divider} from 'antd'
import BlueLendButton from '../DivSixComponents/BlueLendButton'
import RedBorrowButton from '../DivSixComponents/RedBorrowButton'
import CloudImage from '../DivSixComponents/Cloud'
import PhundLogo from '../DivSixComponents/triangleIcon'
import SignupButton from './loginSignupButton'
import Copyright from '../DivSixComponents/Copyright'
import MainImage from '../DivSixComponents/DivSixImage'
import {
    
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
  } from '@ant-design/icons';
import MenuLogo from '../DivSixComponents/PhundLogoMenu'
import RightSideTriangle from '../DivSixComponents/RSTriangleSVG'
import LeftCloud from '../DivSixComponents/LeftCloud'
import '../Landing/CSS/customBackground.css'
import '../Landing/CSS/Button.css'
import '../Landing/CSS/Header.css'




function PhundFooter() {

    const Buttonstyles = {
        marginTop:"10",
    paddingTop: "15",
    paddingBottom: "15",
    marginLeft: "30",
    marginRight: "30",
    backgroundColor:'#3850B5',
    borderRadius: "25px",
    borderWidth: "1",
    color: '#ffffff'
    }

   


    return(

        <>
        
        <Row
        className="button-color-background"
        >
            
            <Col
            lg={2}
            xs={5}
            >
            
            </Col>
            <Col
            lg={4}
            xs={8}
            >    
                <Button
                    style={{
                        width: "95px",
                        height: "40px",
                        marginTop:"10",
                        paddingTop: "15",
                        paddingBottom: "15",
                        marginLeft: "30",
                        marginRight: "30",
                        backgroundColor:'#71B8F2',
                        borderRadius: "25px",
                        borderWidth: "1",
                        color: '#ffffff',
                        justifyContent: 'center'
                          }} 
                    className='smallScreenButton'
                >
                    Lend.
                </Button>
                <BlueLendButton>
                </BlueLendButton>
            </Col>
            <Col
            lg={8}
            >
            </Col>
            <Col
            lg={6}
            xs={11}
            >
                <Button
                    className='smallScreenButton'
                    style={{
                        width: "95px",
                        height: "40px",
                        marginTop:"10",
                        paddingTop: "15",
                        paddingBottom: "15",
                        marginLeft: "30",
                        marginRight: "30",
                        backgroundColor:'#FF5776',
                        borderRadius: "25px",
                        borderWidth: "1",
                        color: '#ffffff',
                    }}
                >
                    Borrow.
                </Button>
                <RedBorrowButton></RedBorrowButton>
            </Col>
            <Col
            lg={4}
            >
            </Col>
        </Row>
        <Row
            justify="end"
            >
            <Col
            lg={4}>
            </Col>
    
        </Row>
        <Row
            justify="center"
            style={{marginTop: '50px'}}
        >
            
                <p
                style={{fontWeight: 'bold', fontSize: '40px', color: '#2A2958'}}
                >
                    Do you have questions?
                </p>
        </Row>
        <Row>
            <Col
            lg={2}
            >
                <LeftCloud></LeftCloud>
            </Col>
            <Col
            lg={20}
            style={{textAlign: 'center'}}
            >
                <p
                style={{fontSize: 22, color: '#2A2958', fontFamily: 'Montserrat'}}
                
                >
                    Peer to Peer lending for loans under $500
                </p>
                <Row
                    style={{marginLeft: 20}}
                    justify="center"
                >
                    <Button style={Buttonstyles} size="large">Contact Us</Button> 
                </Row>
            </Col>
            <Col
            lg={2}
            >
                <RightSideTriangle></RightSideTriangle>
            </Col>
            
        </Row>
        
        <Row
        justify="space-between" align="bottom"
        >
            <Col
            lg={4}
            >
            <PhundLogo>
            </PhundLogo>  
            </Col>
            <Col
            lg={18}
            >
                <div>
                    <MainImage>
                    </MainImage> 
                </div>
            
            </Col>
            <Col
            lg={2}
            >
            <CloudImage></CloudImage>
            </Col>
        </Row>
        <Row>
            <Col
            lg={4}
            >
            </Col>
            <Col
            lg={18}
            className='centerMenu'
            >
            
    
            <Menu
            mode="horizontal"
            style={{fontSize: '12px'}}
            > 
            <Menu.Item
            style={{marginRight: 90, fontFamily: 'Raleway', color: '#223D65'}}
            >
                <MenuLogo></MenuLogo>
                PHUND.
            </Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >Products</Menu.Item>
       
            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >How it Works

            </Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >Features</Menu.Item>

            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >Learn</Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >Partners</Menu.Item>
            <Menu.Item>

            </Menu.Item>
            <Menu.Item>
                
            </Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >
                Login                          
            </Menu.Item>
            <Menu.Item>
               <SignupButton></SignupButton>   
            </Menu.Item>
            </Menu>
            </Col>
            <Col
            lg={2}
            >
            </Col>

        </Row>
            
        
        <Row>
            <Divider>
            </Divider>
        </Row>
        <Row>
            <Col
            lg={2}
            >
            <Copyright>
            </Copyright>
            </Col>
            <Col
            lg={19}
            >
            </Col>
            <Col
            lg={1}
            >
            <LinkedinOutlined style={{ fontSize: '32px', cursor: 'pointer',color: '#2A2958', opacity: '0.4'  }} />
            </Col>
            <Col
            lg={1}
            >
            <InstagramOutlined style={{ fontSize: '32px', cursor: 'pointer', color: '#2A2958', opacity: '0.4' }} />
            </Col>
            <Col
            lg={1}
            >
            <TwitterOutlined style={{ fontSize: '32px', cursor: 'pointer', color: '#2A2958', opacity: '0.4'  }} />
            </Col>
            
        </Row>
           
    



</>
    )


}

export default PhundFooter