
import React, { Component } from 'react';
import axios from 'axios'
import './base.css';
import {connect} from 'react-redux';
import { myComments, myUsers,myPhotos } from '../Actions/index';
import PhotosModal from './photosModal';

export class Photos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[]
        }
    }
    
   
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/albums/1/photos';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        })
        this.props.myPhotos(this.state.text)
        console.log('photos are ', this.state.text);
    }
     componentDidMount(){
        
        this.getList()
    }
    remove=(index) =>{
        console.log('remove clicked');
        const users=this.props.photos
        const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
        console.log('remove',newList);
        
        this.setState({
            text:newList
        })
        this.props.myPhotos(newList);
    }
    render() {
        const photos = this.props.photos;
        console.log('photos are',photos)
        return (
            <div>
                <PhotosModal/>
               <table>
                <tbody>
                {photos.map((item,index)=>(
                        
                        <tr key={index} className='user'>
                            {/* <td style={{color:'red'}}>{item.title}</td> */}
                           <td > <img src={item.url}/></td>
                           <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
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
    // const {albums} = state.albums;
    const {photos} = state.photos;
    // const {todos} = state.todos;
    return{
        photos,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myPhotos: (payload)  =>dispatch(myPhotos(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Photos)

// export default Comments;
// https://jsonplaceholder.typicode.com/albums/1/photos