import React from 'react'
import {Button, Row, Col} from 'antd'
import './CSS/ProfilePage.css'
import { useHistory } from 'react-router-dom';


function ProfilePage(props) {

    const history = useHistory();
    const {firstName} = props
    const startCreatingProfile = () => {
        history.push('/createProfile')
    }

    return(

        <>
        <Row align='middle'>
            Hello {firstName}, it doesn't look like you are registered!
        </Row>
        <Row>
            <p>Why don't you start your registration below</p>
        </Row>
            <Button onClick={startCreatingProfile}>
                Register here
            </Button>

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