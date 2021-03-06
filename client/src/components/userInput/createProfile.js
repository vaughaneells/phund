import { Button, Layout, Row, Col } from 'antd'
import Icon from '@ant-design/icons';
import React, { useState, useEffect, prevState } from "react";
import socketIOClient from "socket.io-client";
import SSN from './ssn';
import Address from './address.js';
import Driver from './driversLicense.js';
const ENDPOINT = "http://localhost:3000";
const { Content } = Layout;
import customIcon from '../Borrow/utils/Landing/Assets/SVG/AirplaneIcon'
import { FormProvider } from 'antd/lib/form/context';
import Loading from './Loading.js';

class CreateProfile extends React.Component {
  constructor() {
    super(),
    this.state = {
      step: 1,
      ssn: '',
      photoid: '',
      address: '',
      loading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    }, () => {console.log(e.target.value)})
  }
  handleNext() {
    this.setState({
       loading: true,
    });
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1500);
    setTimeout(() => {
      this.setState({
        step: this.state.step + 1,
      })
    }, 2500)
  }
  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    socket.on("show", (data) => {
        console.log(data);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    var userObj = {
      ssn: this.state.ssn,
      address: this.state.address,
      photoid: this.state.photoid
    }
  }

  
  render(){
  const loadingToggle = () => {
    if (this.state.loading) {
      return (
        <Loading />
      )
    }
  }
  if (this.state.step === 1) {
      return (
        <div>
          <Layout>
            <Content style={styles.ContentStyle}>
              <Row>
                <Col>
                  <h1
                    style={styles.h1}
                  >
                    Click the button below to create your profile
                  </h1>
                  <Button onClick={this.handleNext} style={styles.button}>Click here</Button>
                </Col>
              </Row>
              {loadingToggle()}
            </Content>
          </Layout>
        </div>
      )
    } else if (this.state.step === 2) {
      return (
        <div>
          <Layout>
            <Content style={styles.ContentStyle}>
              <SSN
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              > </SSN>
              {loadingToggle()}
            </Content>
          </Layout>
        </div>
      )
    } else if (this.state.step === 3) {
      return (
        <div>
          <Layout>
            <Content style={styles.ContentStyle}>
              <Address
              handleChange={this.handleChange}
              handleNext={this.handleNext}
              ></Address>
              {loadingToggle()}             
            </Content>
          </Layout>
        </div>
      )
    } else {
      return (
        <div>
          <Layout>
            <Content style={styles.ContentStyle}>
              <Driver
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              > </Driver>
             {/* put onSubmit Button here */}
            </Content>
          </Layout>
        </div>
      )
    }
  }
}
const styles = {
  ContentStyle: {
    background: '#2A2958', 
    height: '900px', 
    padding: '50px'
  },
  h1: {
    fontWeight:'bold', 
    fontSize: '30px', 
    color: '#ffffff'
  },
  button: {
    width: "250px",
    height: "40px",
    marginTop:"10",
    paddingTop: "15",
    paddingBottom: "15",
    marginLeft: "30",
    marginRight: "30",
    backgroundColor:'#FF5776',
    borderRadius: "25px",
    borderWidth: "1",
    color: '#ffffff',
    justifyContent: 'center'
  }
}

export default CreateProfile;