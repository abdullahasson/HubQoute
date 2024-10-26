// mui
import { Box , Stack , Typography , MenuItem , List  , ListItem , ListItemText, ListItemAvatar , styled } from "@mui/material"
// components
import CardContainer from "../../../../../../layouts/Card container/card_container"
import RfqCard from "../../../../../Common/Cards/RFQ/rfq_card"
import Select from "../../../../../Common/Inputs/Select/select"
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTableList , faGlobe , faTag , faCircle } from "@fortawesome/free-solid-svg-icons"
// fake content
import { rfq } from "../../../../../../fake-content"
// image
import Product from "../../../../../../assets/images/product 1.jpg"
// style
import './vertical_page.css'


const VerticalPage = () => {
  return (
    <Box className='rfq-vertical'>

        <Stack direction='row-reverse'>
          <Select
              label='اختر الفئة' 
              labelLng='ar'
              icon={faTableList}
          >
              <MenuItem value='a'>A</MenuItem>
              <MenuItem value='b'>B</MenuItem>
              <MenuItem value='c'>C</MenuItem>
          </Select>

          <Select
              label='البلد / المدينة' 
              labelLng='ar'
              icon={faGlobe}
          >
              <MenuItem value='a'>A</MenuItem>
              <MenuItem value='b'>B</MenuItem>
              <MenuItem value='c'>C</MenuItem>
          </Select>

          <Select
              label='حسب السعر' 
              labelLng='ar'
              icon={faTag}
          >
              <MenuItem value='a'>A</MenuItem>
              <MenuItem value='b'>B</MenuItem>
              <MenuItem value='c'>C</MenuItem>
          </Select>
        </Stack>

        <Stack
          flexDirection={"row"}
          alignItems='start'
        >
            <Box flex={2.2}>
                <CardContainer 
                    data={rfq}
                    resourceName='rfq'
                    card={RfqCard}
                    columnsNumber={2}
                    cardProps={{
                        position: 'vertical'
                    }}
                />
            </Box>

            <Box className='product-box'>
                <Typography component='h4'>
                    المنتجات{' '}
                    <FontAwesomeIcon icon={faCircle} />
                </Typography>

                <List width='100%' direction='rtl' sx={{marginTop: '16px'}}>
                    <ListItem>
                        <ListItemText
                            primaryTypographyProps={{color: '#2140C9' , fontSize: '18px' , fontWeight: '600'}}
                            primary="أنابيب صلبة"
                            secondaryTypographyProps={{color: '#51526C' , fontSize: '14px' , fontWeight: '400'}}
                            secondary='1000 وحدة'
                        />

                        <img src={Product} alt=""/>
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primaryTypographyProps={{color: '#2140C9' , fontSize: '18px' , fontWeight: '600'}}
                            primary="صفائح الفولاز"
                            secondaryTypographyProps={{color: '#51526C' , fontSize: '14px' , fontWeight: '400'}}
                            secondary='1000 وحدة'
                        />

                        <img src={Product} alt=""/>
                    </ListItem>
                </List>
            </Box>
        </Stack>
    </Box>
  )
}

export default VerticalPage