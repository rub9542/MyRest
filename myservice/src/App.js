// import logo from './logo.svg';
import './App.css';
import "tailwindcss/tailwind.css"
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
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App"><Router>
      {/* <div className='content'> */}
        <Users/>
      {/* <div className='top'><Nav/></div>
      <div className='body'> <Profile/></div> */}
      {/* </div> */}
     
      {/* <Router>
      <div className='left'>
      <Nav/>
      </div>
      <div className='right'>
      <Profile/>
      </div>
     
         </Router> */}
          </Router>
    </div>
  );
}

export default App;
