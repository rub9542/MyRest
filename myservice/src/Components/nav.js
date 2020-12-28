import React, { Component } from 'react'
import '../App.css';
import {BrowserRouter as Router,Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div>
                
               
                <nav>
                        <div className='options'>
                            <Link to='/albums'>
                                <a  style={{color:'red'}}>Albums</a>
                            </Link>
                            <Link to='/posts'>
                                <a style={{color:'red'}}>Posts</a>
                            </Link>
                            <Link to='/photos'>
                                <a style={{color:'red'}}>Photos</a>
                            </Link>
                            <Link to='/todos'>
                                <a style={{color:'red'}}>Todo List</a>
                            </Link>
                        </div>
                    </nav>
            </div>
        )
    }
}

export default Nav
