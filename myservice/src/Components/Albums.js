
import React, { Component } from 'react';
// import axios from 'axios'
import './base.css';
import {connect} from 'react-redux';
import {  myAlbums, updateAlbums, albumEdit } from '../Actions/index';
import AlbumModal from './albumModal';

export class Albums extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[],
             edit:false,
             title:'',
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
    render() {
        const albums = this.props.albums;
        console.log('photos are',albums)
        return (
            <div>
                Albums:
                {/* <AlbumModal/> */}
               
                  <section class="text-gray-600 body-font">
                  <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Albums</h1>
                      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                    </div>
                    
                    <div class="flex flex-wrap -m-4">
                    {albums.map((item,index)=>(
                      <div class="xl:w-1/3 md:w-1/2 p-4 ">
                        <div class="border border-gray-200 p-6 rounded-lg">
                          <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <h2 class="text-lg text-gray-900 font-medium title-font mb-2">{item.title}</h2>
                          {/* <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p> */}
                        </div>
                      </div>))}
                      
                    
                      
                     
                    </div>
                    {/* <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
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
    // const {photos} = state.;
    const {index} = state.index;
    return{
        albums,
        index,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myAlbums: (payload)  =>dispatch( myAlbums(payload)),
        updateAlbums: (payload,index)  =>dispatch(updateAlbums(payload,index)),
        albumEdit: (index) => dispatch(albumEdit(index)),
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