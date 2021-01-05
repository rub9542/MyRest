
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {  myAlbums, updateAlbums, albumEdit } from '../Actions/index';
import AlbumModal from './albumModal';

export class Albumitems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[],
             edit:false,
             title:'',
        }
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
                            <td onClick={()=>this.props.albumEdit(index)}>jdvk;fbnll..dc</td>
                            // <td style={{color:'green'}} onClick={()=>this.props.albumEdit(index)}>{item.title}</td>
                            :<td>
                                <input 
                                    type='text'
                                    placeholder={item.title}
                                    value={this.state.title}
                                    onChange={(event)=> this.setState({title:event.target.value})}
                                    />
                                <button onClick={()=>this.update(index)}>Save</button>
                            </td>}
                           <td><button onClick={()=>this.remove(index)} >Delete</button></td>
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
export default connect(mapStateToProps,mapDispatchToProps)(Albumitems)

// export default Comments;
// https://jsonplaceholder.typicode.com/albums/1/photos


// https://jsonplaceholder.typicode.com/users/1/albums