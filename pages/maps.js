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

export default function GoogleMaps({ places }) {
  const [locationInfo, setLocationInfo] = useState(null);
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* <Header/> */}
      <div style={{ height: "100vw", width: "100%" }}>
        <Nav />
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
  const places = await res.json();
  console.log(places);
  return {
    props: {
      places,
    },
  };
};
