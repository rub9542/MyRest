import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';
import { myUsers, addPosts} from '../Actions/index';

class PostsModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            title:'',
            open:false,
             
        }
    }
    submit = () =>{
        const posts=this.props.posts
        const item={userId:1, id:posts.length, title:this.state.title, body:null}
        console.log('posts length',posts.length);
        this.props.addPosts(item)
        this.setState({
            open:false,
            title:'',
        })
        console.log(item);
    }
    
    render() {
        const posts = this.props.posts;
        console.log('photos are',posts)
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
    const posts = state.posts;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        posts,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // myUsers: (payload)  =>dispatch(myUsers(payload)),
        addPosts: (payload)  =>dispatch(addPosts(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PostsModal)

