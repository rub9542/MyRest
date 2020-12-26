
import React, { Component } from 'react';
// import axios from 'axios'
import Modal from 'react-modal'
import '../App.css';
import {connect} from 'react-redux';
import { myUsers,editUser , useredit} from '../Actions/index';
import Usermodal from './usermodal';

export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            text:[],
            edit:false,
            title:'',
        }
    }
    
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/users/';
        const response = await fetch(url);
        const data = await response.json();
        for(let i=0; i<data.length; i++){
            data[i]={...data[i], edit:false,image: { avatar: true, src: '/images/avatar/small/jenny.jpg' }}
            // console.log(data[i]);
        }
        console.log('data',data);
        this.setState({
            text:data,
        })
        this.props.myUsers(data)
        console.log('users are ', data);
    }
     componentDidMount(){
        
        this.getList()
    }
    remove=(index) =>{
        const users=this.props.users
        const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
        console.log('remove',newList);
        
        this.setState({
            text:newList
        })
        this.props.myUsers(newList);
    }
    changeIndex=(index) =>{
        this.props.useredit(index)
    }
    update = (index)=>{
        
        console.log('title',this.state.title);
        this.props.editUser (this.state.title, index)
        this.props.useredit(index)
        this.setState({
            edit:false,
            title:'',
        })
    }
    render() {
        const users = this.props.users;
        // const user= users.filter((item)=> item.id === 1)
        // console.log('photos are',user.Name)
        return (
            <div >
               
                <Usermodal />
               {/* <table>
                <tbody> */}
               <form>
                   <label>
                    <p>Choose A User</p>
                   <select ><option value='none' selected disabled hidden>Select a User</option>
                    {users.map((item,index)=>(
                        <option  style={{color:'green'}}  key={index}>{item.name}</option>
                    ))}
                    </select>
                   </label>
                   <input type='submit'/>
               </form>
                    
                        
                       
                    
                    
                {/* </tbody>
            </table> */}
            </div>
        )
    }
}



const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const {users} = state.users;
    // const {photos} = state.;
    // const {todos} = state.todos;
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
export default connect(mapStateToProps,mapDispatchToProps)(Users)

// export default users;
// https://jsonplaceholder.typicode.com/users/1/photos


// https://jsonplaceholder.typicode.com/users/1/users

// https://jsonplaceholder.typicode.com/users/


 {/* // <tr key={index} className='user' >
                        //     {item.edit === false ? */}
                            
                        //    <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}><p>Name : {item.name}</p> </td>
                        //    : 
                        //    <td>
                        //         <input 
                        //             type='text'
                        //             placeholder={item.name}
                        //             value={this.state.title}
                        //             onChange={(event)=> this.setState({title:event.target.value})}
                        //             />
                        //         <button onClick={()=>this.update(index)}>Save</button>
                        //     </td>}
                           
                        //    <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
                        // </tr>