import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker, withScriptjs, withGoogleMap } from 'google-maps-react';

var placesAPIKey = "AIzaSyCV_5GYLCJmQYZiHFvqRCrNBmrGq5Frqjw";
var link1 = <a href="https://cutt.ly/dw2EtKI">baby Wren</a>;








const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    randomFact: {}
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  render() {
    return (

       <Map google={this.props.google} zoom={3}
          onClick={this.onMapClicked}>

<Marker onClick={this.onMarkerClick}
      position ={{lat:35.4437, lng: 139.6380 }}
        name = {"This is the start of my story. Every story has origin story not matter how insignificant. I have very little memories here."}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
      </InfoWindow>



      <Marker onClick={this.onMarkerClick}
      position ={{lat:33.7490, lng: -84.3880 }}
        name = {"Georgia Tech, where the adventures continue. Atlanta Skyline: https://cutt.ly/aw2Ejp6"}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name} + link1</p>
          </div>
      </InfoWindow>

      <Marker onClick={this.onMarkerClick}
      position ={{lat:38.9108, lng: -75.5277 }}
        name = {"The northern years. https://cutt.ly/Bw2EJwB"}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
      </InfoWindow>

      <Marker onClick={this.onMarkerClick}

      position ={{lat:34.007, lng: -81.0348 }}
        name = {"The sad formative years of my life. https://cutt.ly/Fw2ECfa"}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
      </InfoWindow>

      <Marker onClick={this.onMarkerClick}
      position ={{lat:24.4539, lng: 54.3773 }}
        name = {"The cultural excursions. Burj Al-Arab: https://cutt.ly/nw2E9EV"}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
      </InfoWindow>
      <Marker onClick={this.onMarkerClick}
      position ={{lat:40.7657, lng: 140.9176}}
        name = {"Living in Asia. This is https://cutt.ly/0w2RwQO"}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
      </InfoWindow>

      <Marker onClick={this.onMarkerClick}
      position ={{lat:35.2271,lng: -80.8431}}
        name = {"Summer Days. https://cutt.ly/Nw2Ruak"}
        /> 
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <p>{this.state.selectedPlace.name}</p>
          </div>
      </InfoWindow>    
          </Map>

);
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAoRYLBYIz5qKDfuJnfBGVy-QG-0RLswTw'
})(MapContainer);





