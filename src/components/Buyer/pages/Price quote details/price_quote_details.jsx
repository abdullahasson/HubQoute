
// mui
import { Box } from "@mui/material";
// layout
import Page from '../../../../layouts/Pages/page';
// components
import ProductsTable from '../../components/Tables/products_table';
import InformationBox from "../../components/Information boxes/information_box";
import Info from "../../components/Information boxes/info"
import Button from '../../../Common/Buttons/button';
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate , faPaste } from "@fortawesome/free-solid-svg-icons";
import { faComments , faNewspaper } from "@fortawesome/fontawesome-free-regular";
// img
import img1 from "../../../../assets/images/sup.png"
// style
import "./price_quote_details.css"

const PriceQuoteDetails = () => {

    return(
        <Page 
            className='price-quote-details'
            title='تفاصيل عرض سعر'
            titleIcon={faNewspaper}
            CurrentPage='تفاصيل عرض السعر'
            PreviousPage='طلبات الشراء'
            PreviousPageIcon={faComments}
            searchInput={false}
        >
            <Box className="offer-details-content">
                <Box className="supplier-buyer-details">
                    <Box className="supplier-image">
                        <img src={img1} alt="" />
                    </Box>

                    <Box className="infos">
                        <InformationBox title="معلومات المورد" rate="4.5">
                            <Info title="اسم الشركة" />
                            <Info title="العنوان" />
                            <Info title="البريد الالكتروني" />
                            <Info title="رقم الهاتف" />
                        </InformationBox>

                        <InformationBox title="معلومات المشتري" rate="4.5">
                            <Info title="اسم الشركة" />
                            <Info title="العنوان" />
                            <Info title="البريد الالكتروني" />
                            <Info title="رقم الهاتف" />
                        </InformationBox>

                        <InformationBox title="تفاصيل العرض">
                            <Info title="رقم العرض" />
                            <Info title="تاريخ الإصدار" />
                            <Info title="تاريخ انتهاء الصلاحية" />
                        </InformationBox>
                    </Box>
                </Box>
                
                <Box className="details-product">
                    <ProductsTable />

                    <InformationBox title='تفاصيل التسليم'>
                        <Info title="موعد التسليم" />
                        <Info title="مكان التسليم" />
                    </InformationBox>

                    <InformationBox title='التوقيع والتأكيد'>
                        <Info title="الاسم" />
                        <Info title="المسمي الوظيفي" />
                        <Info title="التاريخ" />
                    </InformationBox>
                </Box>

                <Box className="btn-details">
                    <Button variant='acceptance' style={{width: '300px'}}>
                         قبول عرض السعر
                    </Button>

                    <Button variant='negotiate'>
                        <span>تفاوض</span>   
                        <FontAwesomeIcon icon={faCertificate} />
                    </Button>

                    <Button variant='review'>
                        مراجعة
                        <FontAwesomeIcon icon={faPaste} />
                    </Button>

                    <Button variant='reject'>
                    رفض العرض
                    </Button>
                </Box>
            </Box>
        </Page>
    )

}


export default PriceQuoteDetails;