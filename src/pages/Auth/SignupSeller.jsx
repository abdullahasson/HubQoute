
// layout
import Register from "../../layouts/Register/register"
// components
import FormSeller from "../../components/Auth/FormSeller"
import Advantages from "../../components/Common/Advantages/advantages"

const SignupSeller = () => {

    return (
        <Register> 
            <FormSeller />
            <Advantages />
        </Register>
    )
}

export default SignupSeller