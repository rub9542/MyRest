

import React, { Component } from 'react';
// import axios from 'axios'
import Modal from 'react-modal'
import './users.css';
import {connect} from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import user from '../user.webp';
import { myUsers,editUser , useredit} from '../Actions/index';
import Usermodal from './usermodal';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
// import { Link, Router } from 'react-router-dom';

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
        const item=this.props.index
        console.log('item recieved', item);
        const users = this.props.users.filter(x => x.id === item);
        // .filter(x=> x.id=== item);
        // const user= users.filter((item)=> item.id === 1)
        console.log('user enabled',users)
        return (
            <div >
              



                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      {/* <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
      </div> */}
      {users.map((item,index)=>(
      <div class="flex flex-col sm:flex-row mt-10" key={index}>
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">{item.name}</h2>

            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Username: {item.username}</p>
            <p class="text-base">Email: {item.email}</p>
            <p class="text-base">Company: {item.company.name}</p>
          </div>
          
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
        <h3 class="font-medium title-font mt-4 text-gray-900 text-lg"><p style={{color:'blue'}}>Profession :</p> <p style={{color:'gray'}}> {item.company.bs}</p></h3>
          <p class="leading-relaxed text-lg mb-4">Address: </p>
          <p class="leading-relaxed text-lg mb-4">{item.address.street},</p>
          <p class="leading-relaxed text-lg mb-4">{item.address.city}, {item.address.zipcode}</p>
          <p class="leading-relaxed text-lg mb-4">Phone: {item.phone}</p>
          <div className='map'>
            {/* <Map/> */}
          {/* <div class="absolute inset-0 bg-gray-300"> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23358.642055388416!2d-37.31726414125906!3d81.15010969411547!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1609221399454!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div> */}
          </div>
          {/* <div class="absolute inset-0 bg-gray-300"> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d23358.642055388416!2d-37.31726414125906!3d81.15010969411547!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1609221399454!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div> */}
          
        </div>
      </div>))}
    </div>
  </div>
</section>
         
   </div>
        )
    }
}



const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const {users} = state.users;
    const {index} = state.userIndex
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        users,
        index,
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


/* // <tr key={index} className='user' >
                        //     {item.edit === false ? */
                            
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


            //             <div className='top'></div>
            //             <div className='content' >
                           
                          
            //                   <div className='title'>
            //                       <img src={user} style={{height:'200px' }}/>
            
            //                   </div>
            //                   <div className='data'>
            //                       {users.map((item,index)=>(
            //                           <div className='bio' key={index}>
            //                               <ul>
            //                                   {item.name} <p>{item.address.city}</p>
            //                                   <li>username : {item.username}</li>
            //                                   <li> email: {item.email}</li>
            //                               </ul>
            //                           </div>
            //                       ))}
            //                   </div>
            //    </div>






//             <section class="text-gray-600 body-font relative">
//   <div class="absolute inset-0 bg-gray-300">
//     <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
//   </div>
//   <div class="container px-5 py-24 mx-auto flex">
//     <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
//       <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
//       <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
//       <div class="relative mb-4">
//         <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
//         <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
//       </div>
//       <div class="relative mb-4">
//         <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
//         <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//       </div>
//       <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//       <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
//     </div>
//   </div>
// </section>