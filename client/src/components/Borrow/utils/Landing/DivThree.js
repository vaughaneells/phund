import React from 'react'
import {Row, Col} from 'antd'
import RightSideTriangle from '../DivSixComponents/RSTriangleSVG'
import LeftSideTriangle from '../DivSixComponents/triangleIcon'


function DivThree() {
return(
    <>
        <Row>
            <Col
            span={2}

            >
                <div>
                    <img src={require('../Landing/Assets/SVG/BlueLeftCloud.svg')} />
                </div>
            </Col>
            <Col
            span={3}
            >
            </Col>
            <Col
            span={5}
            >
                <div>
                    <h1
                    style={{color: '#FF5776'}}
                    >
                        Borrow
                    </h1>
                    <h2>
                        No waiting.
                    </h2>
                    <h3>
                        No tricks.
                    </h3>
                    <h4>
                        This is the way it should be
                    </h4>

                </div>
            </Col>
            <Col
            span={10}
            >
                <img src={require('../Landing/Assets/SVG/kiteFamily.svg')} />
            </Col>
            <Col
            span={2}
            >
                
            </Col>
            <Col
            span={2}
            >
                <RightSideTriangle></RightSideTriangle>
            </Col>

        </Row>
        <Row>
            <Col
            span={2}
            
            >
                <LeftSideTriangle></LeftSideTriangle>
            </Col>
            <Col
            span={1}
            >
            </Col>
            <Col
            span={6}
            >
                <img src={require('../Landing/Assets/SVG/Seniors.svg')} />
            </Col>
            <Col
            span={6}
            >
                <div>

                </div>
            </Col>
            <Col
            span={4}
            >
                <h1
                    style={{color: '#FF5776'}}
                    >
                        Lend
                </h1>
                    <h2>
                        No waiting.
                    </h2>
                    <h3>
                        No tricks.
                    </h3>
                    <h4>
                        This is the way it should be
                    </h4>
            </Col>
            <Col
            span={3}
            >
            </Col>
            <Col
            span={2}
            >
             <img src={require('../Landing/Assets/SVG/BlueRightCloud.svg')} />   
            </Col>

        </Row>

    </>
)
}
export default DivThree