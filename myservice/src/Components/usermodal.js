import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';
import { myUsers, addUser } from '../Actions/index';

class Usermodal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
             name:'',
             username:'',
             phone:'',
             open:false,
             
        }
    }
    submit = () =>{
        const users=this.props.users
        const item={id:users.length,name:this.state.name, username:this.state.username, email:null, address: {}, phone:this.state.phone, website:null, company:{}}
        console.log('users length',users.length);
        this.props.addUser(item)
        this.setState({
            open:false,
            name:'',
            username:'',
            phone:'',
        })
        console.log(item);
    }
    
    render() {
        // const users = this.props.users;
        // console.log('photos are',users)
        return (
            <div>
                <button className='buttons' onClick={()=> this.setState({open:true})}>New</button>
                <Modal isOpen={this.state.open}>
                    <form onSubmit={()=>this.submit()}>
                        <div>
                            <ul >
                           <li><label>Name</label>
                            <input type='text' value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
                            <label>username</label>
                            <input type='text' value={this.state.username} onChange={(event)=>this.setState({username:event.target.value})}/>
                            </li> 
                            {/* <li>
                            <label>Email</label>
                            <input type='text' value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
                            </li> */}
                            <li>
                            <label>Phone</label>
                            <input type='text' value={this.state.phone} onChange={(event)=>this.setState({phone:event.target.value})}/>
                            </li>
                            <li>
                                <button type='submit'>
                                    Submit
                                </button>
                            </li>
                            </ul>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const users = state.users;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        users,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myUsers: (payload)  =>dispatch(myUsers(payload)),
        addUser: (payload)  =>dispatch(addUser(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Usermodal)

