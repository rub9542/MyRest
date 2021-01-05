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
        console.log('id recieved from albums', this.props.id);
        const url ='https://jsonplaceholder.typicode.com/albums/'+this.props.id+'/photos/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        })
        this.props.myPhotos(this.state.text)
        console.log('photos are ', data);
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
        console.log('photos recieved',photos)
        return (
            <div>
                {/* <PhotosModal/> */}
                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Photos</h1>
      {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p> */}
    </div>
    <div class="flex flex-wrap -m-4">
    {photos.map((item, index)=>(
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={item.url}/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-60  ">
          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
             <div  onClick={()=>this.remove(index)}><AiOutlineClose/></div>
         </div>
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{item.title}</h2>
            {/* <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          </div>
        </div>
      </div>))}
      {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
      {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
      {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
      {/* <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366"/>
          <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
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
    const {index} = state.userIndex;
    const albumId= state.albumId;
    return{
        photos,
        index,
        albumId,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myPhotos: (payload)  =>dispatch(myPhotos(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Photos)

{/* // export default Comments;
// https://jsonplaceholder.typicode.com/albums/1/photos */}



 
                        
//     <tr key={index} className='user'>
//         {/* <td style={{color:'red'}}>{item.title}</td> */}
//        <td > <img src={item.url}/></td>
//        <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
//     </tr>

// ))}

// <section class=" body-font">
//   <div class=" px-5 py-24 mx-auto">
//     {/* <div class="flex flex-col">
      
//       <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//         <h1 class="sm:w-2/5  font-medium title-font text-2xl mb-2 sm:mb-0" >PHOTOS</h1>
//       </div>
//     </div> */}
//     <div class="container1 flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 w-1000">
//     
//       <div class="album  p-4 md:w-1/3 sm:mb-0 mb-6" key={index} id='blog2'>
//         <div class="rounded-lg h-64 overflow-hidden"><div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
//             <div className='close' onClick={()=>this.remove(index)}><AiOutlineClose/></div>
//         </div>
//           <img alt="content" class="object-cover object-center h-full w-full" src={item.url}/>
//         </div>
//         <h2 class="text-xl font-medium title-font  mt-5">{item.title}</h2>
        
//       </div>))}
//     </div>
//   </div>
// </section>