// mui 
import { Box } from "@mui/material"
// style
import './info.css'


const Info = ({
    data ,
    gap = '16px'
}) => {

    const {
        shippingTerms,
        leadTime,
        priceTag , 
        category , 
        product , 
        offeredQuantity ,
        weightUnit ,
        unitPrice ,
        totalPrice ,
        minimumOrderQuantity , 
        quantity , 
        paymentMethod , 
        paymentTerms , 
        deliveryDuration , 
        description 
    } = data

    return (
        <Box className="quotations-qantity" gap={gap} marginTop={gap=='8px' ? 0 : 1}>

            {
                shippingTerms ? (
                    <div>
                        <p>Shipping Terms :</p>
                        <span>{shippingTerms}</span>
                    </div>                    
                ) : null 
            }

            {
                leadTime ? (
                    <div>
                        <p>Lead Time :</p>
                        <span>{leadTime}</span>
                    </div>
                ) : null
            }

            {
                priceTag ? (
                    <div>
                        <p>Pric tag:</p>
                        <span className="price-tag">{priceTag}</span>
                    </div>                    
                ) : null 
            }
 
            {
                category ? (
                    <div>
                        <p>Category:</p>
                        <span>{category}</span>
                    </div>
                ) : null
            }

            {
                product ? (
                    <div>
                        <p>Product:</p>
                        <span>{product}</span>
                    </div>
                ) : null
            }

            {
                offeredQuantity ? (
                    <div>
                        <p>Offered Quantity:</p>
                        <span>{offeredQuantity}</span>
                    </div>
                ) : null
            }

            {
                weightUnit ? (
                    <div>
                        <p>Weight Unit:</p>
                        <span>{weightUnit}</span>
                    </div>
                ) : null
            }

            {
                unitPrice ? (
                    <div>
                        <p>Unit Price:</p>
                        <span>{unitPrice}</span>
                    </div>
                ) : null
            }

            {
                totalPrice ? (
                    <div>
                        <p>Total Price:</p>
                        <span>{totalPrice}</span>
                    </div>
                ) : null
            }

            {
                minimumOrderQuantity ? (
                    <div>
                        <p>Minimum order quantity:</p>
                        <span>{minimumOrderQuantity}</span>
                    </div>
                ) : null
            }

            {
                quantity ? (
                    <div>
                        <p>Quantity:</p>
                        <span>{quantity}</span>
                    </div>
                ) : null
            }

            {
                paymentMethod ? (
                    <div>
                        <p>payment method :</p>
                        <span>{paymentMethod}</span>
                    </div>
                ) : null
            }

            {
                paymentTerms ? (
                    <div>
                        <p>payment terms :</p>
                        <span>{paymentTerms}</span>
                    </div>
                ) : null
            }

            {
                deliveryDuration ? (
                    <div>
                        <p>Delivery duration :</p>
                        <span>{deliveryDuration}</span>
                    </div>
                ) : null
            }

            {
                description ? (
                    <div>
                        <p>Description :</p>
                        <span>{description}</span>
                    </div>
                ) : null
            }

        </Box>
    )

}

export default Info