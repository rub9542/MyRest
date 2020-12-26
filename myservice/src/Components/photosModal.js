import React, { Component } from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';
import { myUsers, addPhotos } from '../Actions/index';

class PhotosModal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:'',
            title:'',
            open:false,
             
        }
    }
    submit = () =>{
        const photos=this.props.photos
        const item={Albums:1, Id:photos.length, title:this.state.title, url:'https://via.placeholder.com/600/92c952',  ThumbnailUrl:"https://via.placeholder.com/150/92c952"}
        console.log('photos length',photos.length);
        this.props.addPhotos(item)
        this.setState({
            open:false,
            title:'',
        })
        console.log(item);
    }
    
    render() {
        const photos = this.props.photos;
        console.log('photos are',photos)
        return (
            <div>
                <button className='buttons' onClick={()=> this.setState({open:true})}>New</button>
                <Modal isOpen={this.state.open}>
                    <form onSubmit={this.submit}>
                        <div>
                            <ul >
                                <li>
                                    <label>Title</label>
                                    <input type='text' value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}/>
                                </li>
                                <li>
                                    <button type='submit'>
                                        Submit
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = state =>{
   const photos = state.photos;
   return{
        photos,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // myUsers: (payload)  =>dispatch(myUsers(payload)),
        addPhotos : (payload)  =>dispatch(addPhotos (payload)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PhotosModal)

