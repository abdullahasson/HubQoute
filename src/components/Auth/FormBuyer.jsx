// react
import { Link } from "react-router-dom"
import { useForm , FormProvider } from "react-hook-form"
// schema
import { buyerRegistration } from "../../validation/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
// mui
import { Stack , Alert } from "@mui/material"
// components
import Button from "../Common/Buttons/button"
import Input from "../Common/Inputs/Textfield/Input"
// icon
import { faEnvelope , faBuilding , } from "@fortawesome/fontawesome-free-regular"
import { faMobileScreen , faLock , faGlobe , faCubes } from "@fortawesome/free-solid-svg-icons"
// css
import "./form.css"
import { useEffect } from "react"


const FormBuyer = () => {

    const methods = useForm({
        mode: 'onSubmit' ,
        resolver: zodResolver(buyerRegistration)
    })

    const { handleSubmit , formState:{errors} } = methods

    const onSubmit = (data) => {
        console.log(data)
    }

    const firstError = Object.keys(errors).find((key) => errors[key]);

    return (
        <FormProvider {...methods}>
            <div className="form buyer">
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
                            resourceName='country'
                            placeholder="البلد / المدينة"
                            icon={faGlobe}
                        />

                        <Input 
                            resourceName='category'
                            placeholder="اختر الفئة ( منظفات , مواد البناء , إلخ )"
                            icon={faCubes}
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
                        <Button variant='buyer' type='submit'>
                            إنشاء حساب مشتري
                        </Button>

                        <p>
                            لديك حساب بالفعل ؟
                            {" "}

                            <Link to="/sign-in">
                                تسجيل الدخول 
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}

export default FormBuyer;