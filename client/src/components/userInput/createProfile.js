import {Input} from 'antd'
import React, { useState, useEffect, prevState } from "react";
import socketIOClient from "socket.io-client";
import SSN from './ssn';
import Address from './address.js';
import Driver from './driversLicense.js';
const ENDPOINT = "http://localhost:3000";

class CreateProfile extends React.Component {
  constructor() {
    super(),
    this.state = {
      step: 1,
      ssn: '',
      photoid: '',
      address: ''
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
      step: this.state.step+1,
    }, () => {console.log(this.state.step)})
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

    if (this.state.step === 1) {
      return (
        <div>
          <Input
          type="text"
          placeholder="Create"
          onPressEnter={this.handleNext}
          />
        </div>

      )
    } else if (this.state.step === 2) {
      return (
        <div>
          <SSN
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          > </SSN>
        </div>
      )
    } else if (this.state.step === 3) {
      return (
        <div>
          <Address
          handleChange={this.handleChange}
          handleNext={this.handleNext}
          ></Address>
        </div>
      )
    } else {
      return (
        <div>
          <Driver
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          > </Driver>
        </div>
      )
    }
  }
}


export default CreateProfile;