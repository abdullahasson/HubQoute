
// mui
import { Box , Divider } from '@mui/material'
// components
import Entity from '../components/Head/Entity/entity'
import ActiveStatus from '../components/Active Status/active_status'
import DateJoined from '../components/Date Joined/date_joined'
import Categories from '../components/Categories/categories'
import AdditionalNote from '../components/Additional Note/additional_note'
import ContactInfo from "../components/Contact Information/contact_info"
// style
import './clients_card.css'

const ClientsCard = ({
    clients
}) => {

    return (
        <Box className='card clients-card'> 

            <Box className='head'>
                <Entity info={clients} />

                <ActiveStatus isActive={clients.isActive} />
            </Box>

            <DateJoined date={clients.RegistrationDate} />

            <Categories categories={clients.categories} />

            <AdditionalNote note={clients.notes} />

            <Divider />

            <ContactInfo phone={clients.phone} email={clients.email} theme='client'/>
            
        </Box>
    )

}

export default ClientsCard