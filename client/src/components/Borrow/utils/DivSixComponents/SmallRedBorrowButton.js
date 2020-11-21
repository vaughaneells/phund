import React from 'react'
import {Button, Row, Col} from 'antd'
import {RightCircleOutlined} from '@ant-design/icons'

function SmallBorrowButton() {
    const Buttonstyle={
        width: "180px",
        height: "60px",
        marginTop:"10",
        paddingTop: "10px",
        paddingBottom: "20",
        backgroundColor:'#FF5776',
        borderRadius: "25px",
        borderWidth: "1",
        justifyContent: 'left',
        
    
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
                        style={{alignItems: 'flex-start', fontSize: '25px', color: '#FFFFFF'}}
                        >
                            Borrow
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

export default SmallBorrowButton