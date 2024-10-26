
// mui/x-charts
import { PieChart  } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
// components
import Button from "../../Buttons/button"
// style
import "./order-summary.css"


const StyleText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'auto',
  fontSize: 45,
  fontWeight: 500,
}));


function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>    
        <StyleText x={left + width / 2} y={top + height / 2}>
            {children} 
        </StyleText>
    </>
  );
}

const OrderSummary = ({
    colors
}) => {
    
    const data = [
        { id:0 , label: 'قيد الإنتظار', value: 30 },
        { id:1 , label: 'المغلقة', value: 40 },
        { id:2 , label: 'المفتوحة', value: 30 },
    ];

    return (
        <div className="chart-box order-summary">
            <Button variant='chart' >ملخص الطلبات</Button>

            <PieChart
                series={[
                    {
                        startAngle: -105,
                        endAngle: 105,
                        paddingAngle: 4,
                        innerRadius: 96,
                        outerRadius: 80,
                        data,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        cornerRadius: 50
                    },
                ]}
                margin={{ right: 5 }}
                width={200}
                height={200}
                slotProps={{
                    legend: { hidden: true },
                }}
                colors={colors}
            >
                <PieCenterLabel>    
                    {data[0].value + data[1].value + data[2].value}
                </PieCenterLabel>
            </PieChart>

            <div className="const-label">
                طلب
            </div>

            <div className="group">
                <div id={data[0].id} style={{color: colors[0] , border: `1px solid ${colors[0]}`}}>
                    <div>{data[0].value}</div> 
                    <span>قيد الإنتظار</span>
                </div>
                <div id={data[1].id} style={{color: colors[1] , border: `1px solid ${colors[1]}`}}>
                    <div>{data[1].value}</div> 
                    <span>المغلقة</span>
                </div>
                <div id={data[2].id} style={{color: colors[2] , border: `1px solid ${colors[2]}`}}>
                    <div>{data[2].value}</div> 
                    <span>المفتوحة</span>
                </div>
            </div>
        </div>
    )

}

export default OrderSummary