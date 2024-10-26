
// mui
import { Box , CircularProgress , styled } from '@mui/material' 

const PageLoad = () => {

    return (
        <LoaderBox>
            <CircularProgress />
        </LoaderBox>
    )

}

export default PageLoad

// style
const LoaderBox = styled(Box)`
    width: 100% ;
    height: 100%;
    position: absolute;
    left: 50% ;
    top: 50%;
    translate: -50% -50%;
    display: flex;
    justify-content: center ;
    align-items: center;
`