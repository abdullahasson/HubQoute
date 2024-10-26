
// mui
import { 
    Box , 
    Checkbox , 
    Divider , 
    Typography , 
    Badge , 
    IconButton 
} from '@mui/material'
// componets
import Mark from '../components/Mark/mark';
import Button from "../../Buttons/button";
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment , faNewspaper } from '@fortawesome/fontawesome-free-regular';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
// style
import "./contracts_card.css"



const ContractsCard = ({ contracts }) => {

    const label = { inputProps: { 'aria-label': 'Checkbox' } };

    return (
        <Box className="contracts-card">

            <Box className="head">
                
                <Box className="txt">
                    <Typography variant="body2" display='inline'>
                        status:
                    </Typography>

                    <Mark text={contracts.statusText} icon={faCircleCheck} variant={contracts.status} />
                </Box>

                <Checkbox
                    {...label}
                    color='success'
                    checked={contracts.check}
                    readOnly={true}
                    size='medium'
                />

            </Box>

            <Box className="body">
                <Typography variant="body1" display='inline'>
                    {contracts.title}
                </Typography>

                <Box className="info">
                    <Box className="txt">
                        <Typography variant="body2" display='inline' sx={{color: '#7F7F7F'}}>
                            Owner
                        </Typography>
                        <Typography variant="body2" display='inline'>
                            {contracts.owner}
                        </Typography>
                    </Box>

                    <Box className="txt">
                        <Typography variant="body2" display='inline' sx={{color: '#7F7F7F'}}>
                            Created
                        </Typography>
                        <Typography variant="body2" display='inline'>
                            {contracts.created}
                        </Typography>
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <Box className="chat">
                        <Typography variant="body2" display='inline'>
                            Chat
                        </Typography>

                        <IconButton>
                            <Badge badgeContent={contracts.chatNum} color="primary" size={3}>
                                <FontAwesomeIcon icon={faComment} />
                            </Badge>
                        </IconButton>
                    </Box>
                </Box>
            </Box>


            <Divider />


            <Box className="foot">

                <Box>
                    <Typography variant="body2" display='inline'>
                        Signatory ({contracts.signatory})
                    </Typography>

                    <Box>
                        <FontAwesomeIcon icon={faNewspaper} className='txt-green' />{"  "}
                        <Typography variant="body2" display='inline'>
                            Juneydi{' '}
                        </Typography>
                        <Typography variant="body2" display='inline' sx={{color: '#7F7F7F'}}>
                            as camat
                        </Typography>
                    </Box>
                </Box>

                <Button variant='acceptance' style={{padding: '2px 12px' , width: '40%'}}>
                    All Details
                </Button>
            </Box>

        </Box>
    )

}

export default ContractsCard