import { Button, Modal, Form, Input } from 'antd';
import React, {useState, setState} from 'react';
import {userActions} from '../../../../actions';
import {useHistory} from 'react-router-dom';

function ButtonGroup(props) {
  let history = useHistory();
    const styles = {
        marginTop:"10",
    paddingTop: "15",
    paddingBottom: "15",
    marginLeft: "30",
    marginRight: "30",
    backgroundColor:'#3850B5',
    borderRadius: "25px",
    borderWidth: "1",
    color: "#ffffff",
    fontSize: '12px'
    }

    const [firstName , setFirstName] = useState({
        firstName: ''
    });
    const [email , setEmail] = useState({
      email: ''
    });
    const [password , setPassword] = useState({
      password: ''
    });

    const handleNameChange = (e) => {
        setFirstName({
          [e.target.name]: e.target.value
        })
    };
    const handleEmailChange = (e) => {
      setEmail({
        [e.target.name]: e.target.value
      })
    };
    const handlePasswordChange = (e) => {
      setPassword({
      [e.target.name]: e.target.value
    })
    };

    const showModal = () => {
        setVisible(true);
      };
      const [visible, setVisible] = React.useState(false);
      const handleCancel = () => {

        setVisible(false);
      };

      const actionCreators = {
        login: userActions.login
      };


    return (


            <>

        <Button onClick={showModal} style={styles}>Register</Button>
        <Modal
        visible={visible}
        onCancel={handleCancel}
        okText="Register"
        onOk={()=> {
          props.register(firstName.firstName, email.email, password.password);
          history.push('/home');
        }}
        >

            <Form>
          <Input
            placeholder="First Name"
            name='firstName'
            onChange={handleNameChange}
          />
          <Input
            placeholder="Email"
            name='email'
            onChange={handleEmailChange}
          />
          <Input
            placeholder="Password"
            name='password'
            onChange={handlePasswordChange}
            type="password"
          />

            </Form>
        </Modal>
        </>


    )
}

export default ButtonGroup