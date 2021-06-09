import {React, useState, useEffect} from "react";
import Header from '../components/Header'
import Nav from '../components/Nav'
import LocationMarker from '../components/LocationMarker'
import AutoComplete from '../components/AutoComplete'
import Head from 'next/head';
import GoogleMapReact from "google-map-react";
import { server } from '../config'

export default function GoogleMaps({ places }) {

  return (
    <>
        {/* <Header/> */}
    <div style={{ height: "100vw", width: "100%" }}>
      <Nav/>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCzUM0Q4A_eblQI6SKATy2gOBkt6byFsnA" }}
        defaultCenter={{ lat: 55.6761, lng: 12.5683 }}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        // onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
      >
       {places && places.map((place) => (
        <LocationMarker key={place._id} lat={place.lat} lng={place.lng}/>
        ))}
      </GoogleMapReact>
    </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/locations`)
  const places = await res.json()
  console.log(places);
  return {
    props: {
      places,
    },
  }
}