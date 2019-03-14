import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../../App.css';

export default class HeatMap extends React.Component {
  state = {
    ohioData: this.props.ohioData,
    lat: null,
    lng: null,
    zoom: 13
  }

  componentDidMount() {
    this.setState = ({
      latLng: [this.state.ohioData.lat, this.state.ohioData.lng]
    })
  }

  render() {
    if (this.state.lat) {
      console.log(this.state.ohioData);

      return (
        <Map className="heatmap" center={this.state.latLng} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {this.state.ohioData.map(incident => {
              const position = [incident.latitude, incident.longitude];

              return (
                <Marker 
                  key={incident.incident_id} 
                  position={position} 
                >
                  <Popup>
                    <h4>Date: {incident.date}</h4>
                    <h4>Type: {incident.incident_type}</h4>            
                    <h4>Number Killed: {incident.n_killed}</h4>
                    <h4>Number Injured: {incident.n_injured}</h4>
                  </Popup>
                </Marker>
              )
          })};
        </Map>
      )
    } else {
      return (
        <h1 className="loading-text">Map is Loading...</h1>
      );
    }
  }
};