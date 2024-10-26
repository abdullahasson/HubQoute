
// mui
import { Box , styled } from '@mui/material';
// mui/x-charts
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
// components
import Button from "../../Buttons/button"
// style
import "./response-rate.css"

const ResponseRate = () => {

    const settings = {
        width: 200,
        height: 200,
        value: 90
    };

    return (
        <ResponseRateBox>
            <Button variant='chart'>معدل استجابة الطلبات</Button>

            <ChartContainer>
                <AnimateShadow />
                <Gauge
                    {...settings}
                    cornerRadius={50}
                    text={({value}) => `${value}%`}
                    sx={(theme) => ({
                        [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 40,
                            fontWeight: 400,
                            background:"#666"
                        },
                        [`& .${gaugeClasses.valueArc}`]: {
                            fill: '#33C9FF',
                        },
                        [`& .${gaugeClasses.referenceArc}`]: {
                            fill: "#CCF1FF",
                        },
                    })}
                />
            </ChartContainer>
        </ResponseRateBox>
    )

}

export default ResponseRate


// style
const ResponseRateBox = styled(Box)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    height: 100%;
    background-color: var(--primary-card-background-color);
    border-radius: 10px;
    box-sizing: border-box;
    padding: 12px;
    height: 300px;
    width: 100%;
`

const ChartContainer = styled(Box)`
    position: relative;
    width: fit-content;
`

const AnimateShadow = styled(Box)`
    position: absolute;
    width: 44%;
    height: 44%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #33C9FF40;
    border-radius: 100%;
    box-shadow: 0 0 20px 13px #33C9FF40;
    animation-name: moveShadow;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
`