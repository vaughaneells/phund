import React, {useState, setState} from 'react'
import {Row, Menu, Col, Badge, Modal, Form, Input} from 'antd'
import { store } from '../../../Redux/helpers/store'
import SignupButton from '../../components/Borrow/utils/Landing/loginSignupButton'
import LogoutButton from '../Borrow/utils/Landing/SignoutButton'
import MenuLogo from '../Borrow/utils/Landing/Assets/DivSixComponents/PhundLogoMenu'


function profileHeader(props) {
    let loggedIn = store.getState().authentication.loggedIn;
    if (loggedIn === false) {
        return (
            <>         
                <Row
                align='top'
    
                >
            
                <Col
                lg={24}
                >
                <Menu
                mode="horizontal"
                style={{fontSize: '12px'}}
                > 
                <Menu.Item
                style={{marginRight: 90, fontFamily: 'Raleway', color: '#ffffff'}}
                >
                    <MenuLogo></MenuLogo>
                    PHUND.
                </Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#ffffff'}}
                >Products</Menu.Item>
           
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >How it Works
    
                </Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >Features</Menu.Item>
    
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >Learn</Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >Partners</Menu.Item>
                <Menu.Item>
    
                </Menu.Item>
                <Menu.Item>
                    
                </Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}} 
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
                lg={24}
                className='centerMenu'
                >
                <Menu
                mode="horizontal"
                style={{fontSize: '12px'}}
                > 
                <Menu.Item
                style={{marginRight: 90, fontFamily: 'Raleway', color: '#D8D7FC'}}
                >
                    <MenuLogo></MenuLogo>
                    PHUND.
                </Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >Products</Menu.Item>
           
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >How it Works
    
                </Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >Features</Menu.Item>
    
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
                >Learn</Menu.Item>
                <Menu.Item
                style={{fontFamily: 'Raleway', color: '#D8D7FC'}}
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
                    
                </Row>
           </>
        ) 
    }

    



}

export default profileHeader