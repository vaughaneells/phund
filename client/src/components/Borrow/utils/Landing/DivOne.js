import React from 'react'
import {Row, Col} from 'antd'
import LTTriangleIcon from '../DivSixComponents/triangleIcon'
import RTCloud from '../DivSixComponents/Cloud'
import LeftCloud from '../DivSixComponents/LeftCloud'
import RightTriangle from '../DivSixComponents/RSTriangleSVG'
import BlueButton from '../DivSixComponents/SmallBlueLendBtn'
import RedButton from '../DivSixComponents/RedBorrowButton'
import SmallBorrowButton from '../DivSixComponents/SmallRedBorrowButton'



function DivOne() {
return(
    <>
        <Row>
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
        </Row>
        <Row
        align="middle"
        >
            <Col
            span={4}
            >
                <LeftCloud></LeftCloud>
            </Col>
            <Col
            span={6}
            >
                <div>
                    <h1
                    style={{color: '#2A2958', fontWeight: 'bolder', fontSize: '60px'}}
                    >
                        Small Loans.
                    </h1>
                    <h1
                    style={{color: '#2A2958', fontWeight: 'bolder', fontSize: '60px'}}
                    >
                        Big Impact.
                    </h1>
                </div>
                    <p
                    style={{color: '#2A2958'}}
                    >
                        Peer to Peer lending for Loans under $500
                    </p>
                        <Row>
                            <Col
                            span={12}
                            >
                                <BlueButton>
                                    Lend
                                </BlueButton>
                            </Col>
                            <Col
                            span={12}
                            >
                                <SmallBorrowButton></SmallBorrowButton>
                            </Col>
                        </Row>
            </Col>
            <Col
            span={12}
            style={{alignContent: 'center'}}
            >
                    <div>
                        <img src={require('../Landing/Assets/SVG/MainPhundImage.svg')} />
                    </div>
                 
            </Col>
            <Col
            span={2}
            >
                <RightTriangle></RightTriangle>
            </Col>
        </Row>
       
    </>
)
}
export default DivOne