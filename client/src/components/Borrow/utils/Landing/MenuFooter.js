import { Row } from 'antd';
import React from 'react'
import SignupButton from './loginSignupButton'
import PhundLogo from '../SVG/PhundLogo'
import ArtIcon from '../SVG/triangleIcon'
import CloudImage from '../SVG/Cloud'



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