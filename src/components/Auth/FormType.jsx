// react
import { Link } from "react-router-dom";
// mui
import { Stack } from "@mui/material"

const FormBuyer = () => {

    return (
        <div className="form">
            <h2>إنشاء <span>حساب جديد</span></h2>

                <Stack flexDirection='column' gap={1} sx={{margin: 2}}>
                    <Link className="account-btn" to="/sign-up/buyer" style={{background: "var(--secondary-button-background-color)"}}>
                        انشاء حساب كمشتري
                    </Link>

                    {/* <Link className="account-btn" to="/sign-up/seller" style={{background: "var(--primary-button-background-color)"}}>
                        انشاء حساب كبائع
                    </Link> */}

                    <Link className="account-btn" to="/sign-up/admin" style={{background: "var(--third-button-background-color)"}}>
                        انشاء حساب كعميل
                    </Link>
                </Stack>

                <div className="submit">
                    <p>
                        لديك حساب بالفعل ؟
                    {" "}
                    <Link to="/sign-in">
                        تسجيل الدخول 
                    </Link>
                    </p>
                </div>
         </div>
    )
}

export default FormBuyer;