import { Button } from 'antd';
import React from 'react';




function ButtonGroup(props) {
    console.log(props.logout);
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
    return (
        <Button onClick={props.logout} style={styles}>Log Out!</Button>
    )
}
// function mapState(state) {
//     const { loggedIn } = state.authentication;
//     return { loggedIn };
//   }
  
//   const actionCreators = {
//     logout: userActions.logout,
//   };
  
export default ButtonGroup