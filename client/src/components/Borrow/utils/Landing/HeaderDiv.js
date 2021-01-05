import React from 'react'
import {Row, Menu} from 'antd'
import SignupButton from '../Landing/loginSignupButton'
import MenuLogo from '../DivSixComponents/PhundLogoMenu'



function HeaderDiv() {
    return (
        <>
            <Row
            justify='center'
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
            </Row>
        </>
    )
}

export default HeaderDiv