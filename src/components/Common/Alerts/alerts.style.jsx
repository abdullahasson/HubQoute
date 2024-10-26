import { styled , Box, DialogTitle, DialogContentText, DialogActions } from "@mui/material";


export const Alert = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width : 500px;
    height: 440px;
    border-radius: 22px;
    padding: 15px 22px;
    box-sizing: border-box;
    direction: rtl;
`
 
export const AlertTitle = styled(DialogTitle)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    & .alert-big-icon {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 126px;
        width: 126px;
        border-radius: 100%;
        background: #FFEAEA;
        border: 3px solid #EA1212;
        font-size: 66px;
        color: #EA1212;
    }
`

export const AlertText = styled(DialogContentText)`
    width: 100%;
    height: 145px;
    text-align: center;

    & h3 {
        font-size: 24px;
        font-weight: 700;
        line-height: 35px;
        margin-bottom: 16px;
    }

    & p {
        font-size: 20px;
        font-weight: 500;
    }
`

export const AlertControls = styled(DialogActions)`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 12px;

    & > button {
        width: 40%;
        font-size: 23px;
        font-weight: 400;
        padding: 6px 0;
    }
`