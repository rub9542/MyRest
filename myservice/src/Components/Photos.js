// import {GrClose} from "react-icons/gr";
import {AiOutlineClose} from "react-icons/ai";

import React, { Component } from 'react';
import axios from 'axios'
import './profile.css';
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
        const url ='https://jsonplaceholder.typicode.com/albums/'+this.props.index+'/photos';
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
                

                       
                     <section class=" body-font">
  <div class=" px-5 py-24 mx-auto">
    <div class="flex flex-col">
      
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5  font-medium title-font text-2xl mb-2 sm:mb-0" >PHOTOS</h1>
        {/* <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p> */}
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 w-1000">
    {photos.map((item,index)=>(
      <div class="container  p-4 md:w-1/3 sm:mb-0 mb-6" key={index} id='blog2'>
        <div class="rounded-lg h-64 overflow-hidden"><div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                              <div className='close' onClick={()=>this.remove(index)}><AiOutlineClose/></div>
                          </div>
          <img alt="content" class="object-cover object-center h-full w-full" src={item.url}/>
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">{item.title}</h2>
        
        {/* <button onClick={()=>this.remove(index)}>Delete</button> */}
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
    // const {albums} = state.albums;
    const {photos} = state.photos;
    const {index} = state.index;
    return{
        photos,
        index,
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