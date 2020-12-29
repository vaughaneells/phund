import React from 'react'
import {Row, Col} from 'antd'




function DivTwo () {
    return (
        <>
        <Row>
            <Col
            lg={2}
            >
            <img src={require('../Landing/Assets/SVG/AirplaneOne.svg')} />
            </Col>
            <Col
            lg={20}
            

            >
                <h1
                    style={{fontSize: '44px', color: '#ffffff', fontFamily: 'Raleway', fontWeight: 'bolder', textAlign: 'center'}}
                >
                    How does it work?
                </h1>  
            </Col>
            <Col
            lg={2}
            >
            
            </Col>
        </Row>
        </>
    )
}

export default DivTwo