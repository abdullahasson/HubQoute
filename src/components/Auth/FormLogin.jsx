// react
import { Link } from "react-router-dom"
import { useForm , FormProvider } from "react-hook-form"
// schema
import { signIn } from "../../validation/schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
// mui
import { Stack , Alert } from "@mui/material"
// component
import Input from "../Common/Inputs/Textfield/Input"
import Button from "../Common/Buttons/button"
// icon
import { faEnvelope } from "@fortawesome/fontawesome-free-regular"
import { faMobileScreen , faLock } from "@fortawesome/free-solid-svg-icons"
// style
import "./form.css"

const Form = () => {

    const methods = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(signIn)
    })

    const { handleSubmit , formState:{ errors } } = methods;

    const onSubmit = (data) => {
        console.log(data)
    }

    const firstError = Object.keys(errors).find((key) => errors[key]);

    return (
        <FormProvider {...methods}>
            <div className="form login">
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


                <h2>تسجيل <span>الدخول</span></h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack flexDirection='column' gap={0} sx={{ marginBottom: 2 , marginTop: 1.2}}>

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
                            resourceName='password'
                            placeholder="كلمة المرور" 
                            type='password'
                            icon={faLock}
                        />
                        
                    </Stack>

                    <div className="submit" >
                        <Button variant='login' type='submit'>
                            تسجيل الدخول
                        </Button>


                        <p>
                            ليس لديك حساب ؟
                            {" "}

                            <Link to="/sign-up">
                            إنشاء حساب جديد
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </FormProvider>
    )
}

export default Form