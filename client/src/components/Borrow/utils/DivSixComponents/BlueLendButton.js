import {Button, Row, Col} from 'antd'
import React from 'react'
import {RightCircleOutlined} from '@ant-design/icons'
import '../Landing/CSS/Button.css'




function ClickLend() {
  const Buttonstyles = {
    width: "508px",
    height: "135px",
    marginTop:"10",
    paddingTop: "15",
    paddingBottom: "15",
    marginLeft: "30",
    marginRight: "30",
    backgroundColor:'#71B8F2',
    borderRadius: "25px",
    borderWidth: "1",

}
    return(
        <>
          <Button
          className="blue"
          style={Buttonstyles}
          >
            <Row>
              <p
              style={{alignItems: 'flex-start', fontSize: 30, position: 'relative', marginTop: 10, fontWeight: 'bold', marginBottom: 0}}
              >
              Lend.
              </p>
            </Row>
            <Row>
              <Col
              span={2}
              >
                <p
                style={{ fontSize: 20 }}
                >
                Investment Porfolios starting at $25
              </p>
              </Col>
              <Col
              span={18}
              >
              </Col>
              <Col
              span={4}
              >
              <RightCircleOutlined 
                style={{color: "#FFFFFF", fontSize: 50, marginBottom: 15}} 
              />
              </Col>
              </Row>       
          </Button>
        </>
)
}

export default ClickLend