import React, { Component } from 'react'
import './profile.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import  Albums  from './Albums';
import  Posts  from './Posts';
import  Photos from './Photos';
import Todos  from './todos';
// import Nav from './nav';
class Profile extends Component {
    render() {
        return (
            <div className='screen'>
               
                
                    <div>
                            <Switch>
                                <Route path='/albums' exact component={Albums}/>
                                <Route path='/posts' exact component={Posts} />
                                <Route path='/photos' exact component={Photos} />
                                <Route path='/todos' exact component={Todos} />
                            </Switch>
                        
                </div> 
            </div>
        )
    }
}

export default Profile
