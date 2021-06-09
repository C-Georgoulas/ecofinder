import { Icon, InlineIcon } from '@iconify/react';
import EcoIcon from '@material-ui/icons/Eco';
import styles from '../styles/LocationMarker.module.css'

const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <EcoIcon className={styles.icon}/>
        </div>
    )
}

export default LocationMarker