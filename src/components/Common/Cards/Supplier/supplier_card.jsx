
// mui
import { Box , Divider } from "@mui/material"
// components
import CardHeader from "../components/Head/Card Header/card_header"
import ContactInfo from "../components/Contact Information/contact_info"

// style
import "./supplier_card.css"


const SupplierCard = ({ suppliers }) => {

    return (
        <Box className="supplier-card">

            <CardHeader info={suppliers} />

            <Divider sx={{marginBottom: 1}} />

            <ContactInfo phone={suppliers.phoneNumber} email={suppliers.email} />

        </Box>
    )

}

export default SupplierCard