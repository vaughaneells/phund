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
            > 
            <Menu.Item
            style={{marginRight: 90, fontFamily: 'Raleway', fontWeight: "bold"}}
            >
                <MenuLogo></MenuLogo>
                PHUND.
            </Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway', color: '#223D65'}}
            >Products</Menu.Item>
       
            <Menu.Item
            style={{fontFamily: 'Raleway'}}
            >How it Works

            </Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway'}}
            >Features</Menu.Item>

            <Menu.Item
            style={{fontFamily: 'Raleway'}}
            >Learn</Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway'}}
            >Partners</Menu.Item>
            <Menu.Item>

            </Menu.Item>
            <Menu.Item>
                
            </Menu.Item>
            <Menu.Item
            style={{fontFamily: 'Raleway', fontWeight: "bold"}}
            >
                Login                          
            </Menu.Item>
            <Menu.Item>
               <SignupButton></SignupButton>   
            </Menu.Item>
        </Menu>
        <div
        style={{marginLeft: 10, marginTop: 3}}
        >
           
        </div>
            </Row>
        </>
    )
}

export default HeaderDiv