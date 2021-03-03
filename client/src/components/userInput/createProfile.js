import {Input} from 'antd'
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import SSN from './ssn';
import Address from './address.js';
import Driver from './driversLicense.js';
const ENDPOINT = "http://localhost:3000";

class CreateProfile extends React.Component {
  constructor() {
    super(),
    this.state = {
      step: 'create',
      ssn: '',
      photoid: '',
      address: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

   
  handleChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    })
  }
  onCreate(e) {
    this.setState({
      step: 'ssn'
    }, () => console.log(this.state))
  }
  componentDidMount() {
    const socket = socketIOClient(ENDPOINT);
    socket.on("show", (data) => {
        console.log(data);
    });
  }
  render(){
  
    if (this.state.step === 'create') {
      return (
        <Input
        type="text" 
        placeholder="Create"
        onPressEnter={() => this.onCreate()}
        /> 
      )
    } else if (this.state.step === 'ssn') {
      return (
        <div>
          <SSN handleChange={this.handleChange}> </SSN>
        </div>
      )
    } else if (this.state.step === 'address') {
      return (
        <div>
          <Address handleChange={this.handleChange}></Address>
        </div>
      )
    } else {
      return (
        <div>
          <Driver handleChange={this.handleChange}> </Driver>
        </div>
      )
    }
  }
}


export default CreateProfile;