// react
import { Link } from "react-router-dom"
// mui
import { Box , Breadcrumbs , Typography , IconButton} from "@mui/material"
// components
import Button from "../../../Common/Buttons/button"
// logo
import Logo from "/Logo.svg"
// images
import companyImg from "../../../../assets/images/company_img.png"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft , faShare } from "@fortawesome/free-solid-svg-icons"
import { faShareSquare , faEdit } from "@fortawesome/fontawesome-free-regular"
// svg
import Flag from "../../../../assets/SVG/flag"
// style
import "./head.css"

const Head = () => {

    return (
        <Box className="head">
            <Box className="background-profile-image">
                <Breadcrumbs separator={<FontAwesomeIcon icon={faChevronLeft} />} aria-label="breadcrumb">
                    <Link
                        className="previous-page"
                    >  
                        الصفحات العامة
                    </Link>

                    <Typography className="current-page">
                        إعدادت الحساب 
                    </Typography>
                </Breadcrumbs>

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
                            شركة السعودية للمنتجات  
                        </Typography>

                        <Box className="location">
                            <Flag />

                            <Typography className="country">
                                المملكة العربية السعودية   
                            </Typography>
                        </Box>
                    </Box>  
                </Box>
                

                <Box className="buttons">
                    <Button variant='share' style={{padding: '8px 12px'}}>    
                        <FontAwesomeIcon icon={faShareSquare} />
                        مشاركة
                    </Button>


                    <Button variant='acceptance' style={{padding: '8px 12px'}}>
                        <FontAwesomeIcon icon={faEdit} />
                        تعديل
                    </Button>
                </Box>  

                <IconButton className='share-account'>
                    <FontAwesomeIcon icon={faShare} />
                </IconButton>
            </Box>
        </Box>
    )

}

export default Head;