// mui
import { Typography , styled } from "@mui/material"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PageTitle = ({
    children ,
    numberOfContent ,
    iconTitle
}) => {

    return (
        <Title variant="h5" component="h6">
            {(numberOfContent || '')}{' '}

            {children}
            
            <TitleIcon component='span'>
                <FontAwesomeIcon icon={iconTitle} />
            </TitleIcon>
        </Title>
    )

}

export default PageTitle

// styles
const Title = styled(Typography)`
    width: fit-content; 
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid var(--sixth-text-color);
    font-size: 24px;
    font-weight: 400; 
    font-family: 'cairo';
    color: var(--sixth-text-color); 
`

const TitleIcon = styled(Typography)`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D2DBFF;
    border-radius: 16px;
    color: var(--sixth-text-color);
`