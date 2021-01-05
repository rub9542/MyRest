import {AiOutlineClose} from "react-icons/ai";
import Modal from 'react-modal'

import React, { Component } from 'react';
import { IoImagesOutline } from "react-icons/io5";
import './profile.css';
import {connect} from 'react-redux';
import {  myAlbums, updateAlbums, albumEdit, albumIndex } from '../Actions/index';
import AlbumModal from './albumModal';
import { Comments } from "./Comments";
import Photos  from "./Photos";
import { Link, Router } from "react-router-dom";

export class Albums extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            modal:false,
             text:[],
             edit:false,
             title:'',
             getIndex:'',
        }
    }
    async getList () {
        const url ='https://jsonplaceholder.typicode.com/users/'+this.props.index+'/albums';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        })
        const text=this.state.text
        for(let i=0; i<text.length; i++){
            text[i]={...text[i], edit:false}
            console.log(text[i]);
        }
        
        this.props.myAlbums(text)
        console.log('albums are ', this.state.text);
    }
     componentDidMount(){
        
        this.getList()
    }
    remove=(index) =>{
        console.log('remove clicked');
        const users=this.props.albums
        const newList = users.filter((x)=> this.state.text.indexOf(x) !== index);
        console.log('remove',newList);
        
        this.setState({
            text:newList
        })
        
        // const data=[...newList, edit:false]
        this.props.myAlbums(newList);
    }
    changeIndex=(index) =>{
        this.props.albumEdit(index)
    }
    update = (index)=>{
        
        console.log('title',this.state.title);
        this.props.updateAlbums(this.state.title, index)
        this.props.albumEdit(index)
        this.setState({
            edit:false,
            title:'',
        })
    }
    changeIndex=(index) =>{
        // this.props.albumEdit(index);
        console.log('chosen index', index)
        this.setState({
            modal:!this.state.modal,
        })
    }
    select =(index)=>{
        console.log('album clicked', index)
        this.setState({
            getIndex:index,
        })
        this.props.albumIndex(index+1);
        console.log('album index is',index)

    }
    chosen = (index1) =>{
        console.log('edit index', index1)
        this.setState({
            index:index1,
            modal:!this.state.modal,
        })
        
    }
    render() {
        const albums = this.props.albums;
        console.log('albums recieved',albums)
        return (
            <div>
                {/* <AlbumModal/> */}
                <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class=" album flex flex-wrap -m-4">{albums.map((item,index)=>(
      <div class="blog1 p-4 lg:w-1/3" key={index} >
          
        <div class="album h-full bg-gray-100   rounded-lg overflow-hidden text-center relative">
        <div class="button  w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
             <div  onClick={()=>this.remove(index)}><AiOutlineClose/></div>
         </div>
          {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
          <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.title}</h1>
          {/* <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4" id='images'>
                                <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                    
                                    <span class="ml-4 flex items-start flex-col leading-none">
                                      <span class="text-4xl text-gray-600 mb-1" onClick={()=>this.changeIndex(index)}  ><IoImagesOutline/></span>
                                    </span>
                                </button>
                                
                            </div>
          
        </div>
        <Modal isOpen={this.state.modal}>
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" id='blog3' onClick={()=>this.changeIndex(index)}>
                Exit
            </button>
            <Photos id={index+1}/>
        </Modal>
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
    const {albums} = state.albums;
    const albumId = state.albumId;
    const {index} = state.userIndex;
    return{
        albums,
        index,
        albumId,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myAlbums: (payload)  =>dispatch( myAlbums(payload)),
        updateAlbums: (payload,index)  =>dispatch(updateAlbums(payload,index)),
        albumEdit: (index) => dispatch(albumEdit(index)),
        albumIndex: (index) => dispatch(albumIndex(index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Albums)

// export default Comments;
// https://jsonplaceholder.typicode.com/albums/1/photos


// https://jsonplaceholder.typicode.com/users/1/albums


// <table>
// <tbody>
// {albums.map((item,index)=>(
        
//         <tr key={index} className='user'>
//             {item.edit === false ? 
//             <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}>{item.title}</td>
//             :<td>
//                 <input 
//                     type='text'
//                     placeholder={item.title}
//                     value={this.state.title}
//                     onChange={(event)=> this.setState({title:event.target.value})}
//                     />
//                 <button onClick={()=>this.update(index)}>Save</button>
//             </td>}
//            <td><button className='delete' onClick={()=>this.remove(index)} >Delete</button></td>
//         </tr>
    
//     ))}
// </tbody>
// </table>


{/* //  <Modal isOpen={this.state.modal}>
                        //                     <section class="text-gray-600 body-font relative">
                        //                         <div class="container px-5 py-24 mx-auto">
                        //                             <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        //                                 <div class="relative">
                        //                                     <label for="name" class="leading-7 text-sm text-gray-600">Title</label>
                        //                                     <input type="text" id="name" name="name" value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        //                                 </div>
                                                        
                        //                                 <div class="p-2 w-full">
                        //                                     <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>this.update(index)}>Save</button>
                        //                                 </div>
                        //                                 <div class="p-2 w-full">
                        //                                     <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"  onClick={()=>this.chosen()}>Cancel</button>
                        //                                 </div>
                        //                             </div>
                        //                         </div>
                        //                     </section>
                        //                 </Modal>  */}