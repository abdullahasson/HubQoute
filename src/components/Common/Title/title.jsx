// react
// mui
import { Box , styled } from "@mui/material"

const Title = ({children}) => {

    return (
        <TitleBorder>
            {children}
        </TitleBorder>
    )

}

export default Title

// style
const TitleBorder = styled(Box)`
    position: relative;
    width: fit-content;
    padding: 10px;
    margin: 12px;
    margin-left: auto;
    font-weight: 600;
    color: var(--sixth-text-color);

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 8px; 
        padding: 1.8px; 
        background: linear-gradient(90deg, #FFC94B 0%, #0BBBBB 100%); 
        -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
    mask-composite: exclude; 
    }
`