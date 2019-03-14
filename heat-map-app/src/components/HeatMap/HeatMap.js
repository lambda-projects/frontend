import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../../App.css';


const HeatMap = (props) => {
  console.log(props.ohioData[0]);
  const position = [props.lat, props.lng];

    if (position) {

      return (
        <Map className="heatmap" center={position} zoom={props.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {props.ohioData.map(incident => {
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
};

export default HeatMap;