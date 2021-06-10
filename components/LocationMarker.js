import { Icon, InlineIcon } from "@iconify/react";
import EcoIcon from "@material-ui/icons/Eco";
import styles from "../styles/LocationMarker.module.css";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const LocationMarker = ({ lat, lng, onClick, name }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <span>{name}</span>
      <EcoIcon className={styles.icon} />
    </div>
  );
};

export default LocationMarker;
