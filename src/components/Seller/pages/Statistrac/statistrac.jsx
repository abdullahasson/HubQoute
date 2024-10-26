// react
import { useContext, useEffect , useState} from 'react';
// context
import { appContext } from '../../../../context/AppContext';
// layout
import CardContainer from '../../../../layouts/Card container/card_container';
// mui
import { Stack , MenuItem } from "@mui/material"
// components
import RequestsCard from '../../../Common/Cards/Requests/requests_card';
import ResponseRate from "../../../Common/charts/Response rate/response-rate";
import AnalysisRequests from "../../../Common/charts/Analysis of requests/analysis-of-requests"
import OrderSummary from "../../../Common/charts/Order summary/order-summary"
import Button from '../../../Common/Buttons/button';
import Select from '../../../Common/Inputs/Select/select';
// icons
import { faSave } from "@fortawesome/free-solid-svg-icons"
// style
import "./statistrac.css"
// fake Date
import { requests } from "../../../../fake-content";



const Statistrac = () => {

    const {
        setSearshInput
    } = useContext(appContext)
    
    useEffect(() => {
        setSearshInput(false)
    } , [])

    const [showClosedQuote , setShowClosedQuote] = useState(false)
    const handleImageShow = () => {
        setShowClosedQuote(!showClosedQuote)
        document.getElementById('view_pending_orders').classList.toggle("active")
    }

    return (
        <div className="statistrac">
            <div className="charts">
                <ResponseRate />
                <OrderSummary colors={['#238533' , '#0997CA' , '#2140C9']} />
                <AnalysisRequests />
            </div>

            <div className="Requests-for-recent-quotations">
                <div className="head">
                    <h2>
                        طلبات العروض الأسعار الحديثة
                    </h2>

                    <Stack sx={{width: 'fit-content'}} >
                        <Button style={{padding: '5px 10px' ,gap: '9px'}} variant='acceptance'> 
                            <span>عرض جميع الطلبات</span>
                        </Button>

                        <Button id="view_pending_orders" style={{padding: '5px 10px' ,gap: '9px'}} variant='closed' onClick={handleImageShow}>
                            <span>عرض الطلبات المعلقة</span>
                        </Button>

                        {
                            showClosedQuote ? 
                                <Select 
                                    label='حسب الموعد النهائي'
                                    icon={faSave}
                                >
                                    <MenuItem value='a'>A</MenuItem>
                                    <MenuItem value='b'>B</MenuItem>
                                    <MenuItem value='c'>C</MenuItem>
                                </Select> 
                            : null
                        }
                    </Stack>
                </div>

                <CardContainer 
                    data={requests}
                    resourceName='requests'
                    card={RequestsCard}
                />
            </div>
        </div>
    )

}

export default Statistrac;