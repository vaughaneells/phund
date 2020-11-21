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
        </>
    )
}

export default HeaderDiv