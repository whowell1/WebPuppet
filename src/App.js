import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

state = {
    stores: [
    
            {latitude: 33.7490, longitude: -84.3880},
            {latitude:38.9108, longitude:-75.5277},
            {latitude:34.007, longitude:-81.0348},
            {latitude: 24.4539, longitude:54.3773},
            {latitude: 40.7657, longitude:140.9176},
            {latitude: 35.2271, longitude:-80.8431}
            
            /////////////////////////////
            


          ]
        }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  // state = {
  //   showingInfoWindow:false,
  //   activeMarker: {},
  //   selectedPlace: {}
  // }
  render() {
    return (
      <Map
      google={this.props.google}
      zoom={2}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: 130.176}}
    >
      <Marker position={{ lat: 35.443, lng: 139.63}} />

      {this.displayMarkers()}

    </Map>
);
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoRYLBYIz5qKDfuJnfBGVy-QG-0RLswTw'
})(MapContainer);


// import React, {Component} from 'react';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat: -1.2884,
//          lng: 36.8233
//         }}
//       />
//     );
//   }
// }


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyAoRYLBYIz5qKDfuJnfBGVy-QG-0RLswTw'
// })(GoogleMapsContainer);


