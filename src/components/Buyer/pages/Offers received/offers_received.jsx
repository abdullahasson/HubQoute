
// layout
import Page from '../../../../layouts/Pages/page';
import CardContainer from '../../../../layouts/Card container/card_container';
// mui
import { Stack , MenuItem } from "@mui/material";
// components
import OfferCard from '../../../Common/Cards/offers received/offer_card';
import Select from "../../../Common/Inputs/Select/select"
// icon
import { faStore , faNewspaper , faGlobe , faTableList } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/fontawesome-free-regular"
// fake content
import { offers } from "../../../../fake-content";

const OffersReceived = () => {

    return (    
        <Page 
            className='offers-received'
            title='كل العروض المستلمة'
            contentNumber={`(${offers.length})`}
            titleIcon={faNewspaper}
            CurrentPage='كل العروض السعر المقدمة'
            PreviousPage='الرئيسية'
            PreviousPageIcon={faStore}
            searchInput={true}
        >    

            <Stack sx={{marginBottom: 2.7}}>

                <Select 
                    label='المدينة / البلد'
                    labelLng='ar'
                    icon={faGlobe}
                >
                    <MenuItem value='a'>A</MenuItem>
                    <MenuItem value='b'>B</MenuItem>
                    <MenuItem value='c'>C</MenuItem>
                    <MenuItem value='d'>D</MenuItem>
                </Select>

                <Select 
                    label='تقييم المورد'
                    labelLng='en'
                    icon={faStar} 
                >
                    <MenuItem value='a'>A</MenuItem>
                    <MenuItem value='b'>B</MenuItem>
                    <MenuItem value='c'>C</MenuItem>
                    <MenuItem value='d'>D</MenuItem>
                </Select>

                <Select 
                    label='اختر الفئة'
                    labelLng='ar'
                    icon={faTableList}
                >
                    <MenuItem value='a'>A</MenuItem>
                    <MenuItem value='b'>B</MenuItem>
                    <MenuItem value='c'>C</MenuItem>
                    <MenuItem value='d'>D</MenuItem>
                </Select>
            </Stack> 


            <CardContainer 
                data={offers}
                resourceName='offers'
                card={OfferCard}
            />

        </Page>
    )

}

export default OffersReceived;