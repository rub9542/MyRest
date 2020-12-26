
import React, { Component } from 'react';
import axios from 'axios'
// import './base.css';
import {connect} from 'react-redux';
import {  myAlbums } from '../actions/index';

export class Albums extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[]
        }
    }
    
   
    async componentDidMount(){
        const url ='https://jsonplaceholder.typicode.com/users/1/albums';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        })
        console.log('data is ', data);
        this.props.myAlbums(data)
       
        // this.getData()
    }
    render() {
        // const albums = this.props.albums;
        // console.log('elements are',albums)
        return (
            <div>
               <table>
                   <tbody>
                   {this.props.albums.map((item,index)=>(
                            
                            <tr key={index}>
                               <td> {item.title}</td> 
                            </tr>
                        
                        ))}
                   </tbody>
               </table>
               
              
                       
                    
            </div>
        )
    }
}
const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const {albums} = state.albums;
    // const {comments} = state.comments;
    // const {todos} = state.todos;
    return{
        albums,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myAlbums: (payload)  =>dispatch(myAlbums(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Albums)

// export default Comments