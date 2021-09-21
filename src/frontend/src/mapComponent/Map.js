import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './map.css';
import { data } from '../data_context';

const mapStyles = {
  position: "relative",
  left: '20px',
  width: '1200px',
  height: '550px'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.data = data;
    this.state = {
      showingInfoWindow: false,  // Hides or shows the InfoWindow
      activeMarker: {},          // Shows the active marker upon click
      selectedPlace: {},         // Shows the InfoWindow to the selected place upon a marker
      currentTime: this.data["dataSet1"]["date"],
      currentData: this.data["dataSet1"]
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentTime: nextProps.time }); 
    let obj = Object.values(this.data).find(obj => {
      return obj["date"].getTime() === nextProps.time.getTime()});
    if (obj !== undefined) {
      this.setState({ currentData: obj}); 
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.selectedPlace.totalSuspendedSolids);
  }
    

  close = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    console.log(this.state.currentTime);
    console.log(this.state.currentData);
    return (
      <Map
        google={this.props.google}
        onClick={this.close}
        zoom={16}
        style={mapStyles}
        initialCenter={
          {
            lat: 46.7419041,
            lng: 11.442103
          }
        }
      >
        <Marker
          name={'bouy1'}
          position={{lat: 46.743, lng: 11.4451}}
          date={this.state.currentData["date"]}
          totalSuspendedSolids={this.state.currentData["bouy1"]["totalSuspendedSolids"]}
          totalDissolvedSolids={this.state.currentData["bouy1"]["totalDissolvedSolids"]}
          onClick={this.onMarkerClick}
        />
        <Marker
          name={'bouy2'}
          position={{lat: 46.7426, lng: 11.4471}}
          date={this.state.currentData["date"]}
          totalSuspendedSolids={this.state.currentData["bouy2"]["totalSuspendedSolids"]}
          totalDissolvedSolids={this.state.currentData["bouy2"]["totalDissolvedSolids"]}
          onClick={this.onMarkerClick}
        />
        <Marker
          name={'bouy3'}
          position={{lat: 46.7407, lng: 11.442}}
          date={this.state.currentData["date"]}
          totalSuspendedSolids={this.state.currentData["bouy3"]["totalSuspendedSolids"]}
          totalDissolvedSolids={this.state.currentData["bouy3"]["totalDissolvedSolids"]}
          onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.close}
        >
          <h3>{'Data retrieved on: ' + this.state.currentTime}</h3>
          <div class="info"> 
            <h4>{'Total Suspended Solids'}</h4>
            <p>{' NTU'}</p>
          </div>
          <div class="info"> 
            <h4>{'Total Dissolved Solids'}</h4>
            <p>{' ppm'}</p>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.apiKeyValue
})(MapContainer);