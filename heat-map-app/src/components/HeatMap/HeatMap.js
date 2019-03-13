import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import '../../App.css';


export default class HeatMap extends Component {
  constructor(props) {
  super(props);
    this.state = {
      // lat: 51.505,
      // lng: -0.09,
      zoom: 13
    }
  }

  render() {
    console.log("Inside <HeatMap />'s render() function: ", this.props.fakeData);

    const position = this.props.latlng;
    
    if (position) {
      console.log(position, [this.props.lat, this.props.lng]);
      return (
        // <Map className="heatmap" center={position} zoom={this.state.zoom}>
        //   <TileLayer
        //     attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //   />
        //   <Marker position={position}>
        //     <Popup>
        //       <h4>Year of Incident: {this.props.data.year}</h4>
        //       <h4>Type: {this.props.data.incident_type}</h4>            
        //       <h4>Location: {this.props.data.city_or_county}, {this.props.data.state}</h4>
        //       <h4>Number of People Killed: {this.props.data.n_killed}</h4>
        //       <h4>Number of People Injured: {this.props.data.n_injured}</h4>
        //       <h4>Number of Guns Involved: {this.props.data.n_guns_involved}</h4>
        //     </Popup>
        //   </Marker>
        // </Map> 

        <Map className="heatmap" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.coordinates.map(position => {
            return (
              <Marker position={position}>
              <Popup>
                <h4>Year of Incident: {this.props.data.year}</h4>
                <h4>Type: {this.props.data.incident_type}</h4>            
                <h4>Location: {this.props.data.city_or_county}, {this.props.data.state}</h4>
                <h4>Number of People Killed: {this.props.data.n_killed}</h4>
                <h4>Number of People Injured: {this.props.data.n_injured}</h4>
                <h4>Number of Guns Involved: {this.props.data.n_guns_involved}</h4>
              </Popup>
            </Marker>
            );
          })}
        </Map>
    );
    } else {
      return (
        <h1 className="loading-text">Map is Loading...</h1>
      )
    }
  } 
}