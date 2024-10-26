
// mui
import { Box, Typography, styled } from '@mui/material'
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCertificate , faStar , faLocationDot } from "@fortawesome/free-solid-svg-icons"
// style
import './card_header.css'


const CardHeader = ({
    info ,
    design = 'vertical'
}) => {

    const isHorizontal = design === "horizontal"

    const {Img , name , location , star , rating , isCertified} = info

    return (
        <CardHeaderBox design={design} className='card-header'>

            <Box display='flex' gap={1}>
                {Img && (<img src={Img} alt="" />)}
                
                {
                    isHorizontal ? (
                        isCertified &&  (
                            <Certified>
                                <FontAwesomeIcon icon={faCertificate} /> 
                                    certified
                            </Certified>
                        )
                    ) : null
                }
            </Box>

            <div className="text-info">
                <div>
                    <p>{name}</p>
                    <span className="location">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {location}
                    </span>
                    <div className="rating">
                        <span className="star">
                            <FontAwesomeIcon icon={faStar} />
                            {star}
                        </span>
                        <span>
                            ({rating})
                        </span>
                    </div>
                </div>

                {
                    isHorizontal ? null : (
                        isCertified &&  (
                            <Certified>
                                <FontAwesomeIcon icon={faCertificate} /> 
                                    certified
                            </Certified>
                        )
                    )
                }
            </div>

        </CardHeaderBox>
    )

}

export default CardHeader

const CardHeaderBox = styled(Box)(({ design }) => ({
    width: design == 'horizontal' ? '15%' : '100%',
    position: 'relative',
    padding: 0,
    paddingBottom: '10px',
    display: 'flex',
    alignItems: design == 'horizontal' ? 'start' : 'center',
    flexDirection: design == 'horizontal' ? 'column' : 'row' ,
    justifyContent: 'space-between',
    gap: '8px'
}) )

const Certified = styled(Typography)(({}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'end',
    gap: '5px',
    backgroundColor: '#42B72A', 
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '200',
    letterSpacing: '0.6666px',
    padding: '6px',
    color: '#fff',
}))