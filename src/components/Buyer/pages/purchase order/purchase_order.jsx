// react
import { useContext , useState } from 'react';
import { useForm , FormProvider } from 'react-hook-form'
// context
import { buyerContext } from '../../../../context/BuyerContext';
// layout
import Page from '../../../../layouts/Pages/page';
// mui
import { MenuItem , Stack } from '@mui/material';
// Ant Design
// import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';
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

import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });


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


  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);


  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

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

            {/* <Upload
              action='http://localhost:5173/HubQoute/'
              listType='picture-card'
              showUploadList={{showRemoveIcon: true , showDownloadIcon: true}}
              accept='.jpg'
              multiple
              fileList=''
            >
              <p>Upload +</p>
            </Upload> */}

            {/* <Upload.Dragger
                action="http://localhost:5173/HubQoute/"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                accept='.jpg'
                multiple
                style={{width: '560px' , background: '#fff' , marginLeft: 'auto' , marginBottom: '24px'}}
              >
                {fileList.length >= 8 ? null : uploadButton}
              </Upload.Dragger>

              {previewImage && (
                <Image
                  wrapperStyle={{
                    display: 'none',
                  }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                  }}
                  src={previewImage}
                />
              )} */}


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