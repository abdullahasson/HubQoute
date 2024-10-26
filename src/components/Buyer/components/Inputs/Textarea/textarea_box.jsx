// react
import { useFormContext } from "react-hook-form"
// mui
import { InputLabel } from "@mui/material"
import "./textarea_box.css"

const TextAreaBox = ({ 
    resourceName ,
    title , 
    Example 
}) => {

    const { register } = useFormContext()

    return (
        <div className="select-box">

            <InputLabel id="label">
                <div className="txt">
                    <p>
                        {title}
                    </p>

                    <div>
                        <textarea  
                            {...register(resourceName)}
                            placeholder={Example}
                        />
                    </div>
                </div>
            </InputLabel>

        </div>
    )

}

export default TextAreaBox;