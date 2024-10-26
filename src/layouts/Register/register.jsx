
// style
import "./register.css"

const Register = ({ children }) => {

    return(
        <div className="register">
            <div className="container">
                <div className="content-register">
                    {children}
                </div>
            </div>
        </div>
    )

}

export default Register