import React from 'react';
import { Input } from 'antd'

const driversLicense = ({handleChange}) => {
  return (
    <div className="fade">
      <Input
      onChange={handleChange}
      placeholder="Hello from Driver's License"
      />
    </div>
  )
};


export default driversLicense;