
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
        const url ='https://jsonplaceholder.typicode.com/users/1/albums';
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
                <AlbumModal/>
               <table>
                <tbody>
                {albums.map((item,index)=>(
                        
                        <tr key={index} className='user'>
                            {item.edit === false ? 
                            <td style={{color:'green'}} onClick={()=>this.changeIndex(index)}>{item.title}</td>
                            :<td>
                                <input 
                                    type='text'
                                    placeholder={item.title}
                                    value={this.state.title}
                                    onChange={(event)=> this.setState({title:event.target.value})}
                                    />
                                <button onClick={()=>this.update(index)}>Save</button>
                            </td>}
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
    const {albums} = state.albums;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        albums,
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