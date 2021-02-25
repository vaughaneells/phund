import React from 'react'
import {Row, Col} from 'antd'
import LeftCloud from './Assets/DivSixComponents/LeftCloud'
import RightTriangle from './Assets/DivSixComponents/RSTriangleSVG'
import BlueButton from './Assets/DivSixComponents/SmallBlueLendBtn'
import RedButton from './Assets/DivSixComponents/RedBorrowButton'
import SmallBorrowButton from './Assets/DivSixComponents/SmallRedBorrowButton'
import '../Landing/CSS/DivOne.css'



function DivOne() {
return(
    <>
        {/* <Row>
            <Col
            span={2}
            >
                <LTTriangleIcon></LTTriangleIcon>
            </Col>
            <Col
            span={20}
            >
            </Col>
            <Col
            span={2}
            >
                <RTCloud></RTCloud>
            </Col>
        </Row> */}
        <Row
        align="middle"
        >
            <Col
            lg={2}
            className='LeftCloud'
            >
                <LeftCloud></LeftCloud>
            </Col>
            <Col
            lg={1}
            >
            </Col>
            <Col
            lg={8}
            >
                <div>
                    <h1
                    style={{color: '#2A2958', fontSize: '74px', fontFamily: 'Raleway'}}
                    className='mainHeader'
                    >
                        Small Loans.
                    </h1>
                    <h1
                    style={{color: '#2A2958', fontSize: '74px', fontFamily: 'Raleway'}}
                    className='mainHeader'
                    >
                        Big Impact.
                    </h1>
                </div>
                    <p
                    className='mainHeader'
                    style={{color: '#2A2958', fontSize: '22px', fontWeight: 'unset'}}
                    >
                        Peer to Peer lending for Loans under $500
                    </p>
                        <Row>
                            <Col
                            xl={12}
                            lg={24}
                            md={12}
                            sm={24}
                            xs={24}
                            className='buttonGroup'
                            >
                                <BlueButton>
                                    
                                </BlueButton>
                            </Col>
                            <Col
                            xl={12}
                            lg={24}
                            md={12}
                            sm={24}
                            xs={24}
                            className='buttonGroup'
                            >
                                <SmallBorrowButton></SmallBorrowButton>
                            </Col>
                        </Row>
            </Col>
            <Col
            xs={24}
            lg={4}
            style={{alignContent: 'center'}}
            >
                    <div>
                        <img className="DivOneSVG" src={require('../Landing/Assets/SVG/MainPhundImage.svg')} />
                    </div>
                 
            </Col>
            <Col
            lg={8}
            >
            </Col>
            <Col
            lg={1}
            style={{justifyContent: 'right'}}
            >
                <div className='rightTriangle'>
                    
                    <RightTriangle></RightTriangle>
                </div>
                
            </Col>
        </Row>
       
    </>
)
}
export default DivOne