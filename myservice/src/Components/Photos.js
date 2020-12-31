
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
                
                       {/* <section class="text-gray-600 body-font" >
                       <div class="container px-5 py-24 mx-auto">
                       {photos.map((item,index)=>(
                         <div class="flex flex-wrap -m-4">
                        
                           <div class="p-4 md:w-1/3" key={index}>
                             <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                               <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={item.url} alt="blog"/>
                               <div class="p-6">
                                 <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                                 
                               </div>
                             </div>
                           </div>
                           </div>))}
                           </div>
                     </section> */}
                       
                     <section class="text-gray-600 body-font">
  <div class="container  px-5 py-24 mx-auto">
    <div class="flex flex-col">
      {/* <div class="h-1 bg-gray-200 rounded overflow-hidden">
        <div class="w-24 h-full bg-indigo-500"></div>
      </div> */}
      <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
        <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 w-1000">
    {photos.map((item,index)=>(
      <div class="p-4 md:w-1/3 sm:mb-0 mb-6" key={index} id='blog2'>
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={item.url}/>
        </div>
        <h2 class="text-xl font-medium title-font  mt-5">{item.title}</h2>
        {/* <p class="text-base leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p> */}
        {/* <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a> */}
        <button onClick={()=>this.remove(index)}>Delete</button>
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