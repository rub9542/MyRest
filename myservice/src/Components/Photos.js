
import React, { Component } from 'react';
import axios from 'axios'
import './base.css';
import user from '../user.webp';
// import image from "https://via.placeholder.com/600/92c952"
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
                {/* <PhotosModal/> */}
                {photos.map((item,index)=>(
                       <section class="text-gray-600 body-font" key={index}>
                       <div class="container px-5 py-24 mx-auto">
                         <div class="flex flex-wrap -m-4">
                           <div class="p-4 md:w-1/3">
                             <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                               <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={item.url} alt="blog"/>
                               <div class="p-6">
                                 <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                 <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                                 
                               </div>
                             </div>
                           </div>
                           </div>
                           </div>
                     </section>
                       
                    ))}
                       
                    
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



// {photos.map((item,index)=>(
                        
//     <tr key={index} className='user'>
//         {/* <td style={{color:'red'}}>{item.title}</td> */}
//        <td > <img src={item.url}/></td>
//        <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
//     </tr>

// ))}