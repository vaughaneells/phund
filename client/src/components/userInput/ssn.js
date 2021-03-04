import React, {useState} from 'react'
import { Form, Input } from 'antd'
import './CSS/CreateProfile.css'


function SSN(props) {
    const {handleChange, handleNext} = props;
    return(
        <div
        className="fade"
        >
            <Form>
                <Form.Item>
                    <Input
                    name="ssn"
                    placeholder='SSN'
                    onChange={(event) => {event.persist(); handleChange(event)}}
                    onPressEnter={handleNext}/>
                </Form.Item>
            </Form>

        </div>
    )
}
    export default SSN
