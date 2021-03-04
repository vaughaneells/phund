import React from 'react';
import { Input, Form } from 'antd'

const Address = (props) => {
  const {handleChange, handleNext} = props;
  return (
    <div className="fade">
      <Form>
        <Form.Item>
          <Input
          placeholder='Address'
          onChange={(event) => {event.persist(); handleChange(event)}}
          onPressEnter={handleNext}/>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Address;