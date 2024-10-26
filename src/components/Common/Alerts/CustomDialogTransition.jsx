// react
import { forwardRef } from "react"
// mui
import { 
    Slide 
} from "@mui/material"


// direction left
export const TransitionLeft = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

// direction right
export const TransitionRight = forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});