import { Menu } from 'antd';
import React from 'react'
import SignupButton from './loginSignupButton'

function Foot() {
    return (
    
      <Menu
      mode="horizontal"
       style={{background: "#E7F4FD"}}> 

       <Menu.Item>Products</Menu.Item>
       <Menu.Item>How it Works</Menu.Item>
       <Menu.Item>Features</Menu.Item>
       <Menu.Item>Learn</Menu.Item>
       <Menu.Item>Partners</Menu.Item>
      




      <Menu.Item>LOGIN</Menu.Item>
      <SignupButton></SignupButton>
         
      





      </Menu>
    )
}

export default Foot