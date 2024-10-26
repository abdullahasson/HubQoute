
// layout
import Register from "../../layouts/Register/register"
// components
import FormAdmin from "../../components/Auth/FormAdmin"
import Advantages from "../../components/Common/Advantages/advantages"

const SignupAdmin = () => {

    return (
        <Register> 
            <FormAdmin />
            <Advantages />
        </Register>
    )

}

export default SignupAdmin