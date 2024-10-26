// react
import { useContext, useEffect , useState} from 'react';
// context
import { appContext } from '../../../../context/AppContext';
// layout
import CardContainer from '../../../../layouts/Card container/card_container'
// components
import QuotationsWithPictures from '../../../Common/Cards/Quotations/Quotations with pictures/quotations_with_pictures'
import QuotationsWithoutPictures from '../../../Common/Cards/Quotations/Quotations without pictures/quotations_without_pictures' 
import ResponseRate from "../../../Common/charts/Response rate/response-rate";
import AnalysisRequests from "../../../Common/charts/Analysis of requests/analysis-of-requests"
import OrderSummary from "../../../Common/charts/Order summary/order-summary"
import Button from '../../../Common/Buttons/button';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus , faChartArea } from "@fortawesome/free-solid-svg-icons"
// style
import "./statistrac.css"
// fake Date
import { quotations } from "../../../../fake-content";



const Statistrac = () => {

    const {
        setSearshInput
    } = useContext(appContext)
    
    useEffect(() => {
        setSearshInput(false)
    } , [])

    const [showWithImage , setshowWithImage] = useState(true)
    const handleImageShow = () => {
        setshowWithImage(!showWithImage)
        document.getElementById('price_comparison_table').classList.toggle("active")
    }

    return (
        <div className="statistrac">
            <div className="charts">
                <ResponseRate />
                <OrderSummary colors={['#238533' , '#EE3E3E' , '#2140C9']} />
                <AnalysisRequests />
            </div>

            <div className="Requests-for-recent-quotations">
                <div className="head">
                    <h2>
                        طلبات العروض الأسعار الحديثة
                    </h2>

                    <div >
                        <Button style={{padding: '5px 9px' ,gap: '9px'}} variant='acceptance'> 
                            <span>إنشاء طلب جديد</span>
                            <FontAwesomeIcon icon={faSquarePlus} bounce />
                        </Button>

                        <Button id="price_comparison_table" style={{padding: '5px 9px' ,gap: '9px'}} variant='schedule'>
                            <span>جدول مقارنة الأسعار</span>
                            <FontAwesomeIcon icon={faChartArea} />
                        </Button>
                    </div>
                </div>

                <CardContainer
                    data={quotations}
                    resourceName='data'
                    card={showWithImage ? QuotationsWithPictures : QuotationsWithoutPictures}
                />

            </div>
        </div>
    )

}

export default Statistrac;