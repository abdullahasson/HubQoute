// react

// mui
import { 
  Box , 
  Typography , 
  Divider , 
  List , 
  ListItem , 
  IconButton ,
  ListItemAvatar ,
  ListItemText 
} from '@mui/material'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/fontawesome-free-regular'
// style
import './active_certificates.css'

const ActiveCertificates = () => {

    return (
        <Box className='active-certificates' >
            <Box className="heading">
                <Typography>
                    Active Certificates
                </Typography>
            </Box>

            <Divider />

            <Box>
              <List className='list'>
                  <ListItem
                    secondaryAction={
                        <>
                          <IconButton edge="end" aria-label="download">
                            <FontAwesomeIcon icon={faDownload} />
                          </IconButton>
                          <Typography component='p'>Download</Typography>
                        </>
                    }
                  >

                    <ListItemAvatar>
                      <FontAwesomeIcon icon={faFile} />
                      <ListItemText primary="ISO" />
                    </ListItemAvatar>
                  </ListItem>

                  <ListItem
                    secondaryAction={
                        <>
                          <IconButton edge="end" aria-label="download">
                            <FontAwesomeIcon icon={faDownload} />
                          </IconButton>
                          <Typography component='p'>Download</Typography>
                        </>
                    }
                  >

                    <ListItemAvatar>
                      <FontAwesomeIcon icon={faFile} />
                      <ListItemText primary="Aerospace" />
                    </ListItemAvatar>

                  </ListItem>

              </List>
            </Box>
        </Box>
    )

}

export default ActiveCertificates