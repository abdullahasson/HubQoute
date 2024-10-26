
// mui
import { Box , Divider } from '@mui/material'
// components
import Entity from '../components/Head/Entity/entity'
import DateJoined from "../components/Date Joined/date_joined"
import ActiveStatus from '../components/Active Status/active_status'
import Categories from '../components/Categories/categories'
import AdditionalNote from '../components/Additional Note/additional_note'
import ContactInfo from "../components/Contact Information/contact_info"
// style
import './buyers_card.css'


const BuyersCard = ({
    buyers
}) => {

    return (
        <Box className='card buyers-card'> 

            <Box className='head'>
                <Entity info={buyers} cardType='buyer' />

                <ActiveStatus isActive={buyers.isActive} />
            </Box>

            <DateJoined date={buyers.RegistrationDate} />

            <Categories categories={buyers.categories} cardType='buyers' />

            <AdditionalNote note={buyers.notes} />

            <Divider variant='fullWidth' component='div' />

            <ContactInfo phone={buyers.phone} email={buyers.email} />
            
        </Box>
    )

}

export default BuyersCard