
// layout
import Page from '../../../layouts/Pages/page';
// components
import InstructionSheet from '../../Common/Sheet/instruction_sheet';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/fontawesome-free-regular';


const BuyerInstructions = () => {

    return (
        <Page 
            className='buyer-instructions'
            title='تعليمات الشراء'
            titleIcon={faNewspaper}
            CurrentPage='تعليمات الشراء'
            PreviousPage='الرئيسية'
            searchInput={true}
        >

            <InstructionSheet />

        </Page>
    )

}

export default BuyerInstructions