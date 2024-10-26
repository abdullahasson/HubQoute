
// mui
import { Typography } from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// style
import './mark.css'

const Mark = ({
    text ,
    variant ,
    icon
}) => {

    return (
        <Typography className={`mark ${variant}`}>
            {icon ?
                <FontAwesomeIcon icon={icon} /> : null
            }
            {text}
        </Typography>
    )

}

export default Mark