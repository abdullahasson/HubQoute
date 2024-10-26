// react
import { useContext , useEffect } from "react"
import { useNavigate } from "react-router-dom"
// context
import { appContext } from "../../context/AppContext"
// mui
import { Box , Breadcrumbs , Typography , Link , Stack } from "@mui/material"
// components
import PageTitle from "../../components/Common/Pages Title/page_title"
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
// style
import "./page.css"


const Page = ({
    children, 
    head,
    className, 
    title, 
    titleIcon, 
    contentNumber,
    CurrentPage, 
    PreviousPage, 
    PreviousPageIcon , 
    searchInput,
}) => {

    const {
        setSearshInput
    } = useContext(appContext)
    
    useEffect(() => {
        setSearshInput(searchInput || false)
    } , [])

    const navigate = useNavigate()

    return (
        <Box className={`page ${className}`}>
            <Breadcrumbs separator={<FontAwesomeIcon icon={faChevronLeft} />} aria-label="breadcrumb">
                <Typography className="current-page">
                    {CurrentPage}
                </Typography>

                <Link
                    underline="hover"
                    color="inherit"
                    onClick={() => navigate(-1)}
                    className="previous-page"
                >
                    {PreviousPage}
                    
                    {
                        PreviousPageIcon ?  <FontAwesomeIcon icon={PreviousPageIcon} /> : null
                    }
                </Link>
            </Breadcrumbs>

            <Box className='main-title'>
                <Stack className="title-row">
                    <PageTitle iconTitle={titleIcon} numberOfContent={contentNumber}>
                        {title}
                    </PageTitle>

                    {head}
                </Stack>

                {children}
                
            </Box>
        </Box>
    )

}

export default Page