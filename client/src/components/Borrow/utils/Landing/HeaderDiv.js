import React, {useState, setState} from 'react'
import {Row, Menu, Col, Badge, Modal, Form, Input} from 'antd'
import SignupButton from '../Landing/loginSignupButton'
import LogoutButton from './SignoutButton'
import RegisterButton from '../Landing/RegisterButton'
import MenuLogo from './Assets/DivSixComponents/PhundLogoMenu'
import LTTriangleIcon from './Assets/DivSixComponents/triangleIcon'
import RTCloud from './Assets/DivSixComponents/Cloud'
import '../Landing/CSS/Header.css'
import {store} from '../../../../../Redux/helpers/store'
import {userActions} from '../../../../../Redux/actions';




function HeaderDiv(props) {
   let loggedIn = store.getState().authentication.loggedIn;
    if (loggedIn === false) {
        return (
            <>         
                <Row
                align='top'
    
                >
                    <Col
                    lg={2}
                    style={{justifyItems: 'left'}}
                    className='mobileResponsive'
                    >
                        <LTTriangleIcon></LTTriangleIcon>
                    </Col>
                    <Col
                    lg={2}
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
                    <RegisterButton register={props.register}>

                    </RegisterButton>
                </Menu.Item>
                <Menu.Item>
                        <Badge style={{height: 15, width: 15}} status='warning' title="You need to log on" offset={[1,10]}> 
                            <SignupButton login={props.login}>
                            </SignupButton>  
                       </Badge>        
                </Menu.Item>
            </Menu>
            </Col>
                    <Col
                    lg={2}
                    className='mobileResponsive'
                    >
                        <RTCloud></RTCloud>
                    </Col>
    
                </Row>
            </>
        )
    } else {
        return (

            <>
                <Row
                align='top'
    
                >
                    <Col
                    lg={2}
                    style={{justifyItems: 'left'}}
                    className='mobileResponsive'
                    >
                        <LTTriangleIcon></LTTriangleIcon>
                    </Col>
                    <Col
                    lg={2}
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
                <Menu.Item>
                        <LogoutButton logout={props.logout}></LogoutButton>      
                </Menu.Item>
            </Menu>
            </Col>
                    <Col
                    lg={2}
                    className='mobileResponsive'
                    >
                        <RTCloud></RTCloud>
                    </Col>
    
                </Row>
           </>
        ) 
    }
}



export default HeaderDiv