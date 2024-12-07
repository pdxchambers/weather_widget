import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSnowflake, faTemperatureHalf, faTemperatureFull, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Icon({temp}) {

    function GetIcon(temp) {
        if (temp <= 32) {
            return faSnowflake; // snowflake icon
        } else if (temp > 32 && temp < 60) {
            return faTemperatureHalf; // low temperature icon
        } else if (temp >= 60 && temp < 80) {
            return faTemperatureFull; // half temperature icon
        } else {
            return faSun //sun icon
        }
    }

    return (
        <span>
            <FontAwesomeIcon icon={GetIcon(temp)} />
        </span>
        
    )
  }