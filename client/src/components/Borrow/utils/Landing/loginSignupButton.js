import { Button, Modal, Form, Input } from 'antd';
import React, {useState, setState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {userActions} from '../../../../actions';


function ButtonGroup(props) {
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

    const [email, setEmail] = useState({
      email : ""
    });
    const [password, setPassword] = useState({
      password: ""
    });

    const handleEmailChange = (e) => {
      setEmail({
        [e.target.name] : e.target.value
      })
    };
    const handlePasswordChange = (e) => {
      setPassword({
        [e.target.name] : e.target.value
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

      let history = useHistory()



    return (


            <>

        <Button onClick={showModal} style={styles}>Login</Button>
        <Modal
        visible={visible}
        onCancel={handleCancel}
        okText="Login"
        onOk={() => {
            props.login(email.email, password.password);
            history.push('/home');
            }}>
            <Form>
          <Input
            placeholder="EMAIL"
            name='email'
            onChange={handleEmailChange}
          />
          <Input
            placeholder="PASSWORD"
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