// react

import { Link } from "react-router-dom"
import { useForm , FormProvider } from "react-hook-form"
// zod
import { sellerRegistration } from "../../validation/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
// mui
import { 
    Stack ,
    Alert
 } from "@mui/material"
// component 
import Input from "../Common/Inputs/Textfield/Input"
import Button from "../Common/Buttons/button"
// icon
import { faEnvelope , faBuilding , } from "@fortawesome/fontawesome-free-regular"
import { faMobileScreen , faLock } from "@fortawesome/free-solid-svg-icons"
// style
import './form.css'
import { useEffect } from "react"


const FormSeller = () => {

    const methods = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(sellerRegistration)
    })

    const { handleSubmit , formState:{errors} } = methods;

    const onSubmit = (data) => {
        localStorage.setItem('newSeller' , JSON.stringify(data))
        console.log(data)
    }

    const firstError = Object.keys(errors).find((key) => errors[key]);

    return (
        <FormProvider {...methods}>

            <div className="form">
                {firstError && (
                    <Alert 
                        dir="rtl" 
                        severity="error" 
                        icon={false}
                        sx={{marginBottom: 2 , position: 'absolute' , top: '-4px' , translate: '-0px -100%'}}
                    >
                        {errors[firstError].message}
                    </Alert>
                )}


                <h2>إنشاء <span>حساب جديد</span></h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <Stack flexDirection='column' gap={0}>

                        <Input
                            resourceName='companyName'
                            placeholder="اسم الشركة"
                            icon={faBuilding}
                        />

                        <Input
                            resourceName='email'
                            placeholder="البريد الإلكتروني" 
                            icon={faEnvelope}
                        />

                        <Input
                            resourceName='saudiPhoneNumber'
                            placeholder="رقم الجوال" 
                            icon={faMobileScreen}
                        />

                        <Input
                            resourceName='commercialRegistrationNumber'
                            placeholder="رقم السجل التجاري"
                        />

                        <Input 
                            resourceName='vatNumber'
                            placeholder="رقم ضريبة القيمة المضافة" 
                        />
                        
                        <Input 
                            resourceName='password'
                            placeholder="كلمة المرور" 
                            type='password'
                            icon={faLock}
                        />

                        <Input 
                            resourceName='confirmPassword'
                            placeholder="اعادة كلمة المرور"  
                            type='password'
                            icon={faLock}
                        />

                    </Stack> 


                    <div className="submit">
                        <Button variant='seller' type='submit'>
                            إنشاء حساب بائع
                        </Button>

                        <p>
                                لديك حساب بالفعل ؟
                            {" "}

                            <Link to="/HubQoute/sign-in">
                                تسجيل الدخول 
                            </Link>
                        </p>
                    </div>

                </form>
            </div>
        </FormProvider>
    )
}

export default FormSeller;