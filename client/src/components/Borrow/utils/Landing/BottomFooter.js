import React from 'react'

import {Button, Row, Menu, Col} from 'antd'
import BlueLendButton from '../SVG/BlueLendButton'
import RedBorrowButton from '../SVG/RedBorrowButton'
import CloudImage from '../SVG/Cloud'
import PhundLogo from '../SVG/triangleIcon'
import SignupButton from '../Landing/loginSignupButton'
import Copyright from '../SVG/Copyright'
import MainImage from '../SVG/DIVSix'
import {
    
    InstagramOutlined,
    LinkedinOutlined,
    TwitterOutlined,
  } from '@ant-design/icons';



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

<section className="bottom-footer">



    


<Row>
    <Col
    xs={24}
    lg={10}
    >
    <BlueLendButton>




    
</BlueLendButton>
    </Col>
    <Col>
    
    <Row
    >

        
    </Row>
        
    </Col>
    <Col
   
    xs={24}
    lg={10}>
        <RedBorrowButton></RedBorrowButton>
    </Col>



</Row>
<Row>
    HEYYYY
</Row>
<Row
justify="end"
>
    
    <Col
    span={4}>
    <CloudImage></CloudImage>
    </Col>
    
</Row>
<Row
justify="center">
<h1>Do you have questions?</h1>
       
       
</Row>
<Row
justify="center"
>
    <p>Peer to Peer lending for loans under $500</p>
    
</Row>
<Row
justify="center"
>
   <Button style={Buttonstyles} size="large">Contact Us</Button> 
</Row>
<Row
justify="center"
>
    <MainImage>

    </MainImage>
</Row>
<Row>
    <PhundLogo></PhundLogo>
</Row>
<Row>
<Menu
      mode="horizontal"
       > 
        <Menu.Item><PhundLogo></PhundLogo></Menu.Item>
       <Menu.Item>Products</Menu.Item>
       
       <Menu.Item>How it Works</Menu.Item>
       <Menu.Item>Features</Menu.Item>
       <Menu.Item>Learn</Menu.Item>
       <Menu.Item>Partners</Menu.Item>
      




      <Menu.Item>LOGIN</Menu.Item>
      <SignupButton></SignupButton>
         
      




      
      </Menu>
</Row>
     <Row>
         <Copyright>

         </Copyright>

         <InstagramOutlined />
         
         <LinkedinOutlined />
         <TwitterOutlined />
         
         
    </Row>   



</section>
    )


}

export default PhundFooter