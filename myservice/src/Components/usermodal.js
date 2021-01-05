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
             company:'',
             email:'',
             area:'',
             city:'',
             zip:'',
             profession:'',
             open:false,
             
        }
    }
    submit = () =>{
        const users=this.props.users
        const item={id:users.length,name:this.state.name, username:this.state.username, email:this.state.email, address: {street:this.state.area,city:this.state.city, zipcode:this.state.zip}, phone:this.state.phone, website:null, company:{name:this.state.company}}
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
                <Modal isOpen={true}>
                <section class="text-gray-600 body-font relative">
                      <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                          <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                              <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </div>
                            </div>
                            <div class="p-2 w-1/2">
                              <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Username</label>
                                <input type="text" id="name" value={this.state.username} onChange={(event)=>this.setState({username:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </div>
                            </div>
                            <div class="p-2 w-1/2">
                              <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}  name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </div>
                            </div>
                            <div class="p-2 w-1/2">
                              <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Phone</label>
                                <input type="email" id="email" value={this.state.phone} onChange={(event)=>this.setState({phone:event.target.value})} name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </div>
                            </div>
                            <div class="p-2 w-1/2">
                              <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Company</label>
                                <input type="text" id="name" value={this.state.company} onChange={(event)=>this.setState({company:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </div>
                            </div>
                            <div class="p-2 w-1/2">
                              <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Profession</label>
                                <input type="text" id="name" value={this.state.profession} onChange={(event)=>this.setState({profession:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                              </div>
                            </div></div>
                            <label for="name" class="leading-7 text-sm text-gray-600"><h2>Address</h2></label>
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Area</label>
                                        <input type="text" id="name" value={this.state.area} onChange={(event)=>this.setState({area:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">City</label>
                                        <input type="text" id="name" value={this.state.city} onChange={(event)=>this.setState({city:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">ZipCode</label>
                                        <input type="text" id="name" value={this.state.zip} onChange={(event)=>this.setState({zip:event.target.value})} name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </section>
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

