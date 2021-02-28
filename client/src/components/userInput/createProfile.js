import {Input} from 'antd'
import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

function createProfile() {
  const [ ssn, setSsn ] = useState("");
  const [ photoId, setPhotoId ] = useState("");
  const [ address, setAddress ] = useState("");
  const [response, setResponse] = useState("");
  
  var handleSSN = (e) => {
    setSsn({
        [e.target.name] : e.target.value
    })
    
  }
  var submitSSN =(e) => {
      e.preventDefault();
      console.log('SUBMITTED CORRECTLY');
    const socket = socketIOClient(ENDPOINT);
      socket.emit('data', ssn)
  }
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("show", (data) => {
        console.log(data);
    });
  }, []);
  
  return (
    <Input
    onChange={handleSSN}
    onPressEnter={submitSSN}
    name='ssn'
    type='text'
    >
      
    </Input >
  );
}

export default createProfile;