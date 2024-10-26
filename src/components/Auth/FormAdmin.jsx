// react
import { Link } from "react-router-dom"
import { useForm , FormProvider } from "react-hook-form"
// schema 
import { adminRegistration } from "../../validation/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
// mui
import { Stack , Alert } from "@mui/material"
// components
import Button from "../Common/Buttons/button"
import Input from "../Common/Inputs/Textfield/Input"
// icon
import { faEnvelope , faBuilding } from "@fortawesome/fontawesome-free-regular"
import { faMobileScreen , faLock , faIdCard } from "@fortawesome/free-solid-svg-icons"
// style 
import './form.css'


const FormAdmin = () => {

    const methods = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(adminRegistration)
    })

    const { handleSubmit , formState:{errors} } = methods;

    const onSubmit = (data) => {
        console.log(data)
    }

    const firstError = Object.keys(errors).find((key) => errors[key]);

    return ( 
        <FormProvider {...methods}>
            <div className="form" style={{position: 'relative'}}>
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

                    <Stack flexDirection='column' gap={0} sx={{marginBottom: 2}}>

                        <Input
                            resourceName='companyName'
                            // error={formState.errors.companyName?.message}
                            placeholder="اسم الشركة"
                            icon={faBuilding}
                        />

                        <Input
                            resourceName='email'
                            // error={formState.errors.email?.message}
                            placeholder="البريد الإلكتروني" 
                            icon={faEnvelope}
                        />

                        <Input 
                            resourceName='nationalId'
                            // error={formState.errors.nationalId?.message}
                            placeholder="رقم الهوية"
                            icon={faIdCard}
                        />

                        <Input
                            resourceName='saudiPhoneNumber'
                            // error={formState.errors.saudiPhoneNumber?.message}
                            placeholder="رقم الجوال" 
                            icon={faMobileScreen}
                        />

                        <Input 
                            resourceName='password'
                            // error={formState.errors.password?.message}
                            placeholder="كلمة المرور" 
                            type='password'
                            icon={faLock}
                        />

                        <Input 
                            resourceName='confirmPassword'
                            // error={formState.errors.confirmPassword?.message}
                            placeholder="اعادة كلمة المرور"  
                            type='password'
                            icon={faLock}
                        />

                    </Stack>

                    <div className="submit">
                        <Button variant='admin' type='submit'>
                            إنشاء حساب عميل
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

export default FormAdmin;