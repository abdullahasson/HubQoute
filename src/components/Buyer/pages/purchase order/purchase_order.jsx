// react
import { useContext } from 'react';
import { useForm , FormProvider } from 'react-hook-form'
// context
import { buyerContext } from '../../../../context/BuyerContext';
// layout
import Page from '../../../../layouts/Pages/page';
// mui
import { MenuItem , Stack } from '@mui/material';
// components
import AutocompleteBox from "../../components/Inputs/Autocomplete/autocomplete_box"
import TextField from '../../components/Inputs/Textfield/TextField';
import TextAreaBox from '../../components/Inputs/Textarea/textarea_box';
import DropBox from '../../components/Inputs/Dropzone/drop_box';
import Button from "../../../Common/Buttons/button"
import Select from '../../../Common/Inputs/Select/select';
// icon
import { faComments } from "@fortawesome/fontawesome-free-regular"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"


const PurchaseOrder = () => {

  const {
    setConfirmationDialog ,
  } = useContext(buyerContext)

  const methods = useForm()

  const { handleSubmit , control } = methods

  const onSubmit = (data) => {
    setConfirmationDialog(true)
    console.log(data)
  }

  return (  
    <Page 
      className='create-purchase-order'
      title='إنشاء طلب جديد'
      titleIcon={faSquarePlus}
      CurrentPage='إنشاء طلب عرض السعر'
      PreviousPage='طلبات الشراء'
      PreviousPageIcon={faComments}
      searchInput={false}

      head={
        <Select 
          label='نوع الطلب RFI, RFP, RFQ'
        >          
          <MenuItem value='a'>A</MenuItem>
          <MenuItem value='b'>B</MenuItem>
          <MenuItem value='c'>C</MenuItem>
        </Select>
      }
    >
      <FormProvider {...methods}>
        <form style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }} onSubmit={handleSubmit(onSubmit)}>

            <Stack flexDirection='row-reverse'>
              <AutocompleteBox 
                control={control}
                name='productCategory'
                resourceName='productCategory'
                title={'اختر تصنيف المنتج'}
                Example={'المثال: المواد الخام للمنظفات'}
                listOptions={[{title: 'ABC'} , {title: 'EFG'} , {title: 'HNV'}]}
              />

              <AutocompleteBox 
                control={control}
                name='subcategory'
                resourceName='subcategory'
                title={'اختر التصنيف الفرعي'}
                Example={'المثال : الصودا الكاوية'}
                listOptions={[{title: 'ABC'} , {title: 'EFG'} , {title: 'HNV'}]}
              />
            </Stack>

            <Stack flexDirection='row-reverse'>
              <TextField 
                resourceName='productName'
                style={{flex: 2}}
                title={'اسم المنتج'} 
                Example={'الصودا الكاوية (شكل الرقائق نقاء 99%)'}
              />

              <TextField 
                resourceName='Quantity'
                style={{flex: 1}}
                title={'الكمية'} 
                Example={'1 طن'}
              />

              <AutocompleteBox 
                control={control}
                name='unitOfMeasure'
                resourceName='unitOfMeasure'
                style={{flex: 1}}
                title={'الواحدة'}
                Example={'1000 كيلو'}
                listOptions={[{title: 'A'} , {title: 'B'} , {title: 'C'}]}
              />
            </Stack>

            <TextAreaBox 
              resourceName='detailsRequiredProduct'
              title={'تفاصيل المنتج المطلوب'} 
              Example={' اللون، الشكل، الأبعاد، الوزن، عدد المنصات، إلخ...'}
            />

            <TextAreaBox 
              resourceName='inquiryDetails'
              title='تفاصيل الاستفسار'
              Example='ملاحظات مهمة , معايير معينة , إلخ ...'
            />

            <DropBox 
              name='images'
            />

            <Button 
              style={{width: '45%' , margin: 'auto'}} 
              variant='acceptance' 
              type='submit'
              inert
            >
              نشر طلب عرض الأسعار
            </Button>
        </form>
      </FormProvider>
    </Page>
  )

}



export default PurchaseOrder;