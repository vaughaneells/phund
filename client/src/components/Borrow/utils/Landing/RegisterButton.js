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

    const [state , setState] = useState({
        firstName: '',
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ [name]: value });
        
      }

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
          props.register;
          history.push('/home');
        }}
        >
            
            <Form>
          <Input
            placeholder="First Name"
            name='firstName'
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name='email'
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            name='password'
            onChange={handleChange}
          />
                
            </Form>
        </Modal>
        </>


    )
}

export default ButtonGroup