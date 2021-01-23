import React from 'react'
import {Button, Row, Col} from 'antd'
import {RightCircleOutlined} from '@ant-design/icons'

function SmallLendButton() {
    const Buttonstyle={
        width: "180px",
        height: "54px",
        marginTop:"10",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor:'#71B8F2',
        borderRadius: "25px",
        borderWidth: "1",
        justifyContent: 'left',
        color: '#ffffff'
    }

    return(
        <>
            <Button
            style={Buttonstyle}
            >
               <Row>
                   <Col
                   span={3}
                   >
                   <div>
                        <p
                        style={{alignItems: 'flex-start', fontSize: '18px', color: '#ffffff', fontWeight: 'bolder', fontFamily: 'Raleway'}}
                        >
                            Lend.
                        </p>
                    </div>
                   </Col>
                   <Col
                   span={17}
                   >
                   </Col>
                   <Col
                   span={4}
                   >
                        <RightCircleOutlined
                        style={{color: '#FFFFFF', fontSize: '30px'}}
                        >

                        </RightCircleOutlined>
                   </Col>
                    
                   
                </Row> 
                    

                
                    
                
            </Button>
        </>
        )
} 

export default SmallLendButton