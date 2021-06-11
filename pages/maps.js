import { React, useState, useEffect } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import LocationInfoBox from "../components/LocationInfoBox";
import LocationMarker from "../components/LocationMarker";
import AutoComplete from "../components/AutoComplete";
import Head from "next/head";
import GoogleMapReact from "google-map-react";
import { server } from "../config";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/Maps.module.css";

export default function GoogleMaps({ places, locations }) {
  const [locationInfo, setLocationInfo] = useState(null);
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* <Header/> */}
      <Nav />
      <div style={{ height: "100vw", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCzUM0Q4A_eblQI6SKATy2gOBkt6byFsnA" }}
          defaultCenter={{ lat: 55.6761, lng: 12.5683 }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          // onGoogleApiLoaded={({ map, maps }) => ModelsMap(map, maps)}
        >
          {places &&
            places.map((place) => (
              <LocationMarker
                key={place._id}
                lat={place.lat}
                lng={place.lng}
                name={place.name}
                onClick={() =>
                  setLocationInfo({
                    id: place._id,
                    name: place.name,
                    description: place.description,
                    verified: place.verified,
                  })
                }
              />
            ))}
            {locations &&
            locations.map((location) => (
              <LocationMarker
              key={location.venue.id}
              lat={location.venue.location.lat}
              lng={location.venue.location.lng}
              name={location.venue.name}
              onClick={() =>
                setLocationInfo({
                  id: location.venue.id,
                  name: location.venue.name,
                })
              }
            />
            ))}
        </GoogleMapReact>
        <div onClick={() => setLocationInfo(null)}>
          {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
        <Collapse in={open}>
          <Alert
            severity="info"
            className={styles.alert}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Click on the green leafs to find out more!
          </Alert>
        </Collapse>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/locations`);
  const res2 = await fetch('https://api.foursquare.com/v2/venues/explore?client_id=R3IILPL0D3VGXAUHYMVJ0FPX4Z2UOXWUBZXDTILSXA3GJK1G&client_secret=N425VQMWBN4RH43YJPG3YQDX132ZLJRXQ1KFW1Q5C1XLRLV3&v=20180323&limit=10&ll=55.6761,12.5683&query=vegan');
  const places = await res.json();
  const places2 = await res2.json();
  const locations = places2.response.groups[0].items
  console.log(locations);
  return {
    props: {
      places,
      locations,
    },
  };
};
