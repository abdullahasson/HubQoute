
// layout
import Register from "../../layouts/Register/register"
// components
import FormLogin from "../../components/Auth/FormLogin"
import Advantages from "../../components/Common/Advantages/advantages"
// alerts
import ForgetPassword from "../../components/Common/Alerts/Forget password/forget_password"


const Login = () => {

    return (
        <Register> 
            <FormLogin />
            <Advantages />

            {/* alert */}
            <ForgetPassword />
        </Register>
    )

}

export default Login