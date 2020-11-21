import { Row } from 'antd';
import React from 'react'
import SignupButton from './loginSignupButton'
import PhundLogo from '../DivSixComponents/PhundLogo'
import ArtIcon from '../DivSixComponents/triangleIcon'
import CloudImage from '../DivSixComponents/Cloud'



function Foot() {
    return (
      <>
        <Row
        justify='center'
        >
          <ArtIcon></ArtIcon>
          <CloudImage></CloudImage>

        </Row>
        
     
      
      </>
    )
}

export default Foot