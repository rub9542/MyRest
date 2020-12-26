import React, { Component } from 'react'
import { myComments } from '../actions/index';
import {connect} from 'react-redux';
export class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[]
        }
    }
    async componentDidMount(){
        const url = 'https://jsonplaceholder.typicode.com/users/1/albums';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        }) 
        console.log('data is ', data);
        this.props.myComments(data)
       
    }
    
    render() {
        // const comments =this.props.comments;
        return (
            <div>
                <table>
                    <tbody>
                        {
                            this.props.comments.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    // const {users} = state.user;
    // const {posts} = state.posts;
    // const {albums} = state.albums;
    const {comments} = state.comments;
    // const {todos} = state.todos;
    return{
        comments,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myComments: (payload)  =>dispatch(myComments(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Comments)
// export default Comments
