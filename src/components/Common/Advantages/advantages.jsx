
// mui
import { Box , styled } from "@mui/material"
// logo
import Logo from "../../../assets/Logo"
// icon
import ListIcon from "../../../assets/Icons/list_icon"


const Advantages = () => {

    return (
        <AdvantagesBox>
            <AdvantagesHead>
                <Logo width={330} />
                <h2>
                    الحل الأمثل لتبسيط وإدارة طلبات عروض الأسعار بكفاءة 
                </h2>
            </AdvantagesHead>
            
            <AdvantagesList>
                <li>
                    <p>"احصل على أفضل العروض بسرعة وسهولة!"</p>
                    <ListIcon />
                </li>

                <li>
                    <p>"شفافية وتنافسية في كل طلب!"</p>
                    <ListIcon />
                </li>

                <li>
                    <p>"طلباتك، عروضنا – بأعلى كفاءة!"</p>
                    <ListIcon />
                </li>

                <li>
                    <p>"توفير الوقت والمال بضغطة زر!"</p>
                    <ListIcon />
                </li>
            </AdvantagesList>
        </AdvantagesBox>
    )
}

export default Advantages


// style
const AdvantagesBox = styled(Box)`
    width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 26px;
`

const AdvantagesHead = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    & h2 {
        font-size: 24px;
        text-align: end;
        margin: 0;
        padding: 0;
        margin-top: 12px;
    }
`

const AdvantagesList = styled(Box)`
    & li {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 12.5px;
        font-size: 17px;
    }
`