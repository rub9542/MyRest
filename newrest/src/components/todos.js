
// import React, { Component } from 'react';
// import axios from 'axios'
// // import './base.css';
// import {connect} from 'react-redux';
// import {  myTodos } from '../actions/index';

// export class Todos extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              text:[]
//         }
//     }
    
   
//     async componentDidMount(){
//         const url ='https://jsonplaceholder.typicode.com/users/3/todos';
//         const response = await fetch(url);
//         const data = await response.json();
//         this.setState({
//             text:data,
//         })
//         console.log('data is ', data);
//         this.props.myTodos(data);
       
//     }
//     render() {
//         // const todos = this.props.todos;
//         // console.log('elements are',todos)
//         return (
//             <div>
//                <table>
//                    <tbody>
//                    {this.state.text.map((item,index)=>(
                            
//                             <tr key={index}>
//                                <td> {item.title}</td> 
//                             </tr>
                        
//                         ))}
//                    </tbody>
//                </table>
               
              
                       
                    
//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) =>{
//     // const {users} = state.user;
//     // const {posts} = state.posts;
//     // const {albums} = state.albums;
//     // const {comments} = state.comments;
//     const {todos} = state.todos;
//     console.log('mapStateToProps',todos);
//     return{
//         todos,
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//     return{
//         myTodos: (payload)  =>dispatch(myTodos(payload)),
//     }
// }


// export default connect(mapStateToProps,mapDispatchToProps)(Todos)

// // export default Todos


import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {requestTodosData} from '../actions';
export class Todos extends Component {
    componentDidMount(){
        this.props.requestTodosData();
    }
    person = (x,i)=>(
        <div key={i}>
            <h1>{x.name}</h1>
        </div>
    )
    render() {
        const results = this.props.data;
        return (
            <div>
                {this.props.data.map(this.person)}
            </div>
        )
    }
}

const mapStateToProps = state =>({data:state.data});

const mapDispatchToProps =dispatch =>bindActionCreators({requestTodosData},dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Todos);