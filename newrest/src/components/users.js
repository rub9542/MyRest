import React, {Component} from 'react'
import axios from 'axios';
import {myUsers} from '../actions/index';
import {connect} from 'react-redux';

// function Users(props) {
//     const url = 'https://jsonplaceholder.typicode.com/users/';
//     const [username, setUsers] = useState(null)

//     let content = null
    
//     useEffect(() => {
//         axios.get(url)
//         .then(response =>{
//             setUsers(response.data)
//         })
//         props.myUsers(users);
//     }, [url])
//     if(username){
        
//         content = <div>
//                 <table>
//                 <tbody>{username.map((item,index)=>(
//                         <tr key={index}>
//                             <td>{item.name}</td>
//                         </tr>
//                     ))
//                     }
                    
//                 </tbody>
//             </table> 
//         </div>
//     }
//     const users1= props.users;
//     return (
//         <div>
            
//             {content}
//         </div>
//     )
// }

// export default Users
//


class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[],
             id:[1,2,3,4,5,6,7,8,9]
        }
    }
    
    async componentDidMount(){
        // const myTodos= this.props.myTodos;
        const url ='https://jsonplaceholder.typicode.com/users/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        })
        console.log('data is ', data);
        // this.props.myUsers(data);
        console.log('text is', this.state.text);
       
        // this.getData()
    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    {this.state.text.map((item,index)=>{
                    <tr key={index}>
                        <td>{item.id}</td>
                        </tr>})}
                        
                    </tbody>
                </table>
                {/* <ul>
                {this.state.id.map((item,index)=>{
                    <li key={index}>{item}</li>})}
                </ul> */}
                {/* <table>
                    <tbody>
                    {this.props.users.map((item,index)=>{
                        <tr key={index}>
                            <td>{item.name}</td>
                        </tr>
})}
                    </tbody>
                </table> */}
                
            </div>
        )
    }
}
export default Users

// const mapStateToProps = state =>{
//         const {users} = state.users;
//         // const {posts} = state.posts;
//         // const {albums} = state.albums;
//         // const {comments} = state.comments;
//         // const {todos} = state.todos;
//         return{
//             users,
//         }
//     }
//     const mapDispatchToProps = (dispatch) =>{
//         return{
//             myUsers: (payload)  =>dispatch(myUsers(payload)),
//         }
//     }
    
    
//     export default connect(mapStateToProps,mapDispatchToProps)(Users)
