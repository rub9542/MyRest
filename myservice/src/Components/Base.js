import React, { Component } from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import { myData } from '../Actions';

export class Base extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:[]
        }
    }
    
    // getData() {
    // //     // let newList=[]
    // //     console.log('componentDidMount is working');
    // axios.get('http://127.0.0.1:8000/product/')
    // .then(res=>{
    //     this.setState({
    //         text:res.data
    //         })
            
    //     })
    //     console.log('text is ', this.state.text);
    // //     console.log('text is',this.state.text);
    // //     // this.props.myData(newList)
    // }
    async componentDidMount(){
        const url ='https://jsonplaceholder.typicode.com/posts/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            text:data,
        })
        this.props.myData(this.state.text)
        console.log('data is ', this.state.text);
        // this.getData()
    }
    render() {
        const elements = this.props.elements
        return (
            <div>
                <table>
                    <tbody>
                        {elements.map((item,index)=>(
                            
                                <tr key={index}>
                                    <td>{item.title} = {item.body}</td>
                                    {/* <td>{item.body}</td> */}
                                    {/* <td>{item}</td> */}
                                </tr>
                            
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
// export default Base
const mapStateToProps = state =>{
    const {elements} =state.rest
    return{
        elements
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        myData: (payload)  =>dispatch(myData(payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Base)

