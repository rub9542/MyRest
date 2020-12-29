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
import Homepage  from './Components/Homepage';

function App() {
  return (
    <div className="App" className='bg-blue'>
      {/* <Router> */}
      {/* <div className='content'> */}
        {/* <Users /> */}
        <Homepage/>
        {/* <Profile/> */}
        {/* <Posts/> */}
        {/* <Photos/> */}
        {/* <Comments/> */}
        {/* <Albums/> */}
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
          {/* </Router> */}
    </div>
  );
}

export default App;
