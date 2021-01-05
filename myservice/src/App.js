// import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
import { myUsers,editUser , useredit, myIndex} from './Actions/index';
import {connect} from 'react-redux';

import  Albums  from './Components/Albums';
import  Comments  from './Components/Comments';
import Photos  from './Components/Photos';
import DropdownEx from './Components/Dropdown';
// import Photos  from './Components/Photos';
import Posts  from './Components/Posts';
import Nav from './Components/nav'
import Todos from './Components/todos';
import Users from './Components/users';
import Profile from './Components/Profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Homepage  from './Components/Homepage';
import Usermodal from './Components/usermodal';

function App(props) {
  return (
    <div className="App" >
      {/* <Photos id={5}/> */}
      <div className='container'><Router>
        
        {props.index ==='' ? 
        <Homepage/> : <Nav/>

      }
        <Switch>
                                    <Route path='/user/albums' exact component={Albums} />
                                    <Route path='/user/{this.state.point}/posts' exact component={Posts} />
                                    <Route path='/user/todos' exact component={Todos} />
                                    <Route path='/user' exact component={Users} />
                                    <Route path='/' exact component={Homepage} />


                                </Switch>
          </Router></div>
    </div>
  );
}

const mapStateToProps = state =>{
  const {albums} = state.albums;
  const {posts} = state.posts;
  const {users} = state.users;
  const {index} = state.userIndex;
  const {photos} = state.photos;
  const {todos} = state.todos;
  return{
      users,
      index,
      photos,
      todos,
      posts,
      albums,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
      myUsers: (payload)  =>dispatch(myUsers(payload)),
      editUser: (payload,index) =>dispatch(editUser(payload, index)),
      useredit: (index) => dispatch(useredit(index)),
      myIndex:(index)=> dispatch(myIndex(index)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)