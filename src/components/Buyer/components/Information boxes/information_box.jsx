// react
// mui
import { Box } from "@mui/material"
// components
import Title from "../../../Common/Title/title"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
// style
import "./information_box.css"


const InformationBox = ({children , title , rate}) => {

    return (
        <Box className="information-box">
            <Box className="info-head">
                <Title>
                    {title}
                </Title>
                {
                    rate &&
                    <Box className="rating">
                        <p>التقييم :</p>
                        <span>
                            <FontAwesomeIcon icon={faStar} />
                            {rate}
                        </span>
                    </Box>
                }
            </Box>

            <Box className="info-content">
                {children}
            </Box>
        </Box>
    )

}

export default InformationBox