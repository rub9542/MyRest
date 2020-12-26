// import logo from './logo.svg';
import './App.css';
import  Albums  from './Components/Albums';
import  Comments  from './Components/Comments';
import Photos  from './Components/Photos';
import DropdownEx from './Components/Dropdown';
// import Photos  from './Components/Photos';
import Posts  from './Components/Posts';
import Todos from './Components/todos';
import Users from './Components/users';

function App() {
  return (
    <div className="App">
     <div className='users'>
     {/* <Posts/> */}
     {/* <DropdownEx/> */}
     {/* <Photos/> */}
     {/* <Comments/> */}
     {/* <Todos/> */}
     {/* <Albums/>  */}
        <Users/>
        </div> 
      {/* <Photos/>
      <Posts/>
      <Todos/>
      <Comments/>
      <Albums/> */}
    </div>
  );
}

export default App;
