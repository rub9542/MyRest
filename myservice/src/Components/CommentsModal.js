import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';
import { myUsers, addComments } from '../Actions/index';

class CommentsModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            title:'',
            open:false,
             
        }
    }
    submit = () =>{
        const comments=this.props.comments
        const item={PostId:1, id:comments.length, name:this.state.title, Email:null, Body:null}
        console.log('comments length',comments.length);
        this.props.addComments(item)
        this.setState({
            open:false,
            title:'',
        })
        console.log(item);
    }
    
    render() {
        const comments = this.props.comments;
        console.log('photos are',comments)
        return (
            <div>
                <button className='buttons' onClick={()=> this.setState({open:true})}>New</button>
                <Modal isOpen={this.state.open}>
                    <form onS   ubmit={this.submit}>
                        <div>
                            <ul >
                                <li>
                                    <label>Name</label>
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
    const comments = state.comments;
    // const {photos} = state.;
    // const {todos} = state.todos;
    return{
        comments,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // myUsers: (payload)  =>dispatch(myUsers(payload)),
        addComments : (payload)  =>dispatch(addComments (payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CommentsModal)

