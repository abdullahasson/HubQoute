
// mui
import { Box } from "@mui/material";
// components
import Button from "../../../Buttons/button";
import Mark from "../../components/Mark/mark";
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faStar } from "@fortawesome/free-solid-svg-icons"
// style
import "./quotations_with_pictures.css"

const QuotationsWithPictures = ({ data }) => (
    
    <Box className="quotations-card">
                    
        <div className="image">
            <img src={data.srcImg} alt="" />
            <Mark text='عرض جديد' variant='new-offer' />
        </div>
        

        <div className="quotations-qantity">
            <div>
                <p>Product:</p>
                <span>{data.product}</span>
            </div>
            <div>
                <p>Quantity:</p>
                <span>{data.quantity}</span>
            </div>
        </div>

        <ul>
            <li>
                <img src={data.buyerImg} alt="" />
                <div className="text-info">
                    <div>
                        <p>Grey fabrica & materials</p>
                        <span className="location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {data.buyerLocation}
                        </span>
                        <div className="rating">
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} />
                                {data.buyerrating}
                            </span>
                            <span>
                                ({data.buyerEvaluation})
                            </span>
                        </div>
                    </div>
                    <button>
                        buyer
                    </button>
                </div>
            </li>

            <li>
                <img src={data.supplierImg} alt="" />
                <div className="text-info">
                    <div>
                        <p>Grey fabrica & materials</p>
                        <span className="location">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {data.supplierLocation}
                        </span>
                        <span className="rating">
                            <span className="star">
                                <FontAwesomeIcon icon={faStar} />
                                {data.supplierrating}
                            </span>
                            <span>
                                ({data.supplierEvaluation})
                            </span>
                        </span>
                    </div>
                    <button>
                        supplier
                    </button>
                </div>
            </li>    
            
        </ul>

        <div className="buttons">
            <Button style={{width:'45%'}} variant='schedule'>
                كل التفاصيل 
            </Button>

            <Button style={{width:'45%'}} variant='offer'>
                عرض مقدم
            </Button>
        </div>
    </Box>
)

export default QuotationsWithPictures