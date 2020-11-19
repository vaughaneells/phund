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
    }

   


    return(

        <>
        
        <Row
        className="button-color-background"
        >
            
            <Col
            span={2}
            >
            
            </Col>
            <Col
            span={4}
            >
                <BlueLendButton>
                </BlueLendButton>
            </Col>
            <Col
            span={8}
            >
            </Col>
            <Col
            span={6}
            >
                <RedBorrowButton></RedBorrowButton>
            </Col>
            <Col
            span={4}
            >
            </Col>
        </Row>
        <Row
            justify="end"
            >
            <Col
            span={4}>
            </Col>
    
        </Row>
        <Row
            justify="center">
                <p
                style={{fontWeight: 'bold', fontSize: 45}}
                >
                    Do you have questions?
                </p>
        </Row>
        <Row>
            <Col
            span={2}
            >
                <LeftCloud></LeftCloud>
            </Col>
            <Col
            span={20}
            style={{textAlign: 'center'}}
            >
                <p
                style={{fontSize: 22}}
                
                >
                    Peer to Peer lending for loans under $500
                </p>
            </Col>
            <Col
            span={2}
            >
                <RightSideTriangle></RightSideTriangle>
            </Col>
            
        </Row>
        <Row
            style={{marginBottom: 20, marginLeft: 20}}
            justify="center"
            >
            <Button style={Buttonstyles} size="large">Contact Us</Button> 
        </Row>
        <Row
        justify="space-between" align="bottom"
        >
            <Col
            span={4}
            >
            <PhundLogo>
            </PhundLogo>  
            </Col>
            <Col
            span={18}
            >
                <div>
                    <MainImage>
                    </MainImage> 
                </div>
            
            </Col>
            <Col
            span={2}
            >
            <CloudImage></CloudImage>
            </Col>
        </Row>
        
        <Row
            justify='center'
            >
    
        <Menu
            mode="horizontal"
            > 
            <Menu.Item
            style={{marginRight: 90}}
            >
                <MenuLogo></MenuLogo>
                PHUND.
            </Menu.Item>
            <Menu.Item>Products</Menu.Item>
       
            <Menu.Item>How it Works</Menu.Item>
            <Menu.Item>Features</Menu.Item>
            <Menu.Item>Learn</Menu.Item>
            <Menu.Item>Partners</Menu.Item>
            <Menu.Item
            style={{marginLeft:90}}
            >
                Login

                
                               
            </Menu.Item>
              
        </Menu>
        <div
        style={{marginLeft: 10, marginTop: 3}}
        >
          <SignupButton></SignupButton>   
        </div>
         
        </Row>
        <Row>
            <Divider>
            </Divider>
        </Row>
        <Row>
            <Col
            span={2}
            >
            <Copyright>
            </Copyright>
            </Col>
            <Col
            span={20}
            >
            </Col>
            <Col
            span={2}
            >
            <InstagramOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
            <LinkedinOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
            <TwitterOutlined style={{ fontSize: '22px', cursor: 'pointer' }} />
            </Col>
            
        </Row>
           
    



</>
    )


}

export default PhundFooter