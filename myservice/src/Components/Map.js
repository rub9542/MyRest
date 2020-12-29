import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class Map extends Component {
    render() {
        return (
            <div>
                {/* <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat:-37.3159, lng: 81.1496}}
        /> */}
        <Map google={this.props.google} zoom={14}>
 
             <Marker onClick={this.onMarkerClick}
                     name={'Current location'} />

             <InfoWindow onClose={this.onInfoWindowClose}>
                 <div>
                   <h1>{this.state.selectedPlace.name}</h1>
                 </div>
             </InfoWindow>
        </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(Map)
