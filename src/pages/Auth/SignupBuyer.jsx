
// layout
import Register from "../../layouts/Register/register"
// components
import FormBuyer from "../../components/Auth/FormBuyer"
import Advantages from "../../components/Common/Advantages/advantages"

const SignupBuyer = () => {

    return (
        <Register> 
            <FormBuyer />
            <Advantages />
        </Register>
    )
}

export default SignupBuyer