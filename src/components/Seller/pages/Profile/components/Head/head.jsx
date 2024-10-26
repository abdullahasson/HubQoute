// react

// mui
import { Box , Typography , IconButton} from "@mui/material"
// components
import Button from "../../../../../Common/Buttons/button"
// logo
import Logo from "/Logo.svg"
// images
import companyImg from "../../../../../../assets/images/company_img.png"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShareNodes , faCertificate } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots } from "@fortawesome/fontawesome-free-regular"

// svg
import Flag from "../../../../../../assets/SVG/flag"
// style
import "./head.css"

const Head = () => {

    return (
        <Box className="head">
            <Box className="background-profile-image">
                <Box />

                <Box className="logo">
                    <img src={Logo} />
                    <Typography component='h1'>
                        HubQuote
                    </Typography>
                </Box>
            </Box>

            <Box className="company">
                <Box className="txt">
                    <Box className="company-icon">
                        <img src={companyImg} alt="" />
                    </Box>

                    <Box className="company-info">
                        <Typography className="company-name" variant="h6">
                            شركة مورد   
                        </Typography>

                        <Box className='certified'>
                            <Typography variant="p">certified</Typography>
                            <FontAwesomeIcon icon={faCertificate} />
                        </Box>

                        <Box className="location">
                            <Flag />

                            <Typography className="country">
                                المملكة العربية السعودية   
                            </Typography>
                        </Box>
                    </Box>  

                    <Box>
                        <Button variant='acceptance'>
                            <FontAwesomeIcon icon={faCommentDots} />
                            تواصل       
                        </Button>
                    </Box>
                </Box>
                
                <IconButton className='share-account'>
                    <FontAwesomeIcon icon={faShareNodes} />
                </IconButton>
            </Box>
        </Box>
    )

}

export default Head;