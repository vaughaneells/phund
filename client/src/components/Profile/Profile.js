import React from 'react'
import {Button, Row, Col} from 'antd'
import './CSS/ProfilePage.css'


function ProfilePage(props) {

    const {firstName} = props

    return(

        <>
        <Row align='middle'>
            Hello {firstName}, it doesn't look like you are registered!
        </Row>
        <Row>
            <p>Why don't you start your registration below</p>
        </Row>
            <Button>Register here</Button>

        <Row>

        <Col
            lg={24}
            >
                <img src={require('../../../src/components/Borrow/utils/Landing/Assets/SVG/ProfileBackground.svg')} />
        </Col>
        </Row>
        
        
        
        

        </>
    )
}

export default ProfilePage