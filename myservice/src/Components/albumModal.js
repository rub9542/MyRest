import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';
import { myUsers, addAlbums} from '../Actions/index';

class AlbumModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            title:'',
            open:false,
             
        }
    }
    submit = () =>{
        const albums=this.props.albums
        const item={userId:1, id:albums.length, title:this.state.title}
        console.log('albums length',albums.length);
        this.props.addAlbums(item)
        this.setState({
            open:false,
            title:'',
        })
        console.log(item);
    }
    
    render() {
        const albums = this.props.albums;
        console.log('photos are',albums)
        return (
            <div>
                <button className='buttons' onClick={()=> this.setState({open:true})}>New</button>
                <Modal isOpen={this.state.open}>
                    <form onSubmit={()=>this.submit()}>
                        <div>
                            <ul >
                                <li>
                                    <label>Title</label>
                                    <input type='text' value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}/>
                                </li>
                                <li>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    const albums = state.albums;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        albums,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // myUsers: (payload)  =>dispatch(myUsers(payload)),
        addAlbums: (payload)  =>dispatch(addAlbums(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AlbumModal)

