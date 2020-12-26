// import React, { createRef } from "react";
import { Dropdown, Ref, Button } from "semantic-ui-react";
import '../App.css';
import {connect} from 'react-redux';
import { myUsers,editUser , useredit} from '../Actions/index';


import React, { Component } from 'react'

export class DropdownEx extends Component {
    render() {
        const users = this.props.users;
        console.log('users', users);
        return (
            <div>
                <select>
            {users.map((item,index)=>{
                <option key={index}>{item.name}</option>
            })}
        </select>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    const {users} = state.users;
    return{
        users,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myUsers: (payload)  =>dispatch(myUsers(payload)),
        editUser: (payload,index) =>dispatch(editUser(payload, index)),
        useredit: (index) => dispatch(useredit(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DropdownEx)
