// react
import { useFormContext } from "react-hook-form"
// mui
import { InputLabel } from "@mui/material"
import "./inputs.css"

const TextField = ({ 
    resourceName ,
    title , 
    Example , 
    style 
}) => {

    const { register } = useFormContext()

    return (
        <div className="select-box" style={style}>
            <InputLabel id="label">
                <div className="txt">
                    <p>
                        {title}
                    </p>

                    <div>
                      <input {...register(resourceName)} placeholder={Example}/>
                    </div>
                </div>
            </InputLabel>
        </div>
    )

}

export default TextField;