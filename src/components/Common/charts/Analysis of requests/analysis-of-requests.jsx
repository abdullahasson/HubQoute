
// mui-x
import { LineChart } from '@mui/x-charts/LineChart';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from "@fortawesome/free-solid-svg-icons"
// style
import "./analysis-of-requests.css"


const data = [0 , 1 , 4 , 2 , 5 , 4 , 7]

const xLabels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const AnalysisRequests = () => {

    return (
        <div className="chart-box analysis-of-requests">
            <div className="head">
              <div className="txt">
                <h2>تحليل الطلبات</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adip</p>
              </div>

              <button>
                <FontAwesomeIcon icon={faDownload} />
                حفظ التقرير
              </button>
            </div>

            <LineChart
              // viewBox={200 -25  200  300}
              xAxis={[{
                disableLine:true ,
                disableTicks:true , 
                scaleType: 'band', 
                data: xLabels 
              }]}

              yAxis={[{
                colorMap: {
                  type: 'continuous',
                  min: -1,
                  max: 4,
                  color:['#FFFFFF' , '#2140C9'],
                },
                disableLine: true ,
                disableTicks:true
              }]}

              axisHighlight={{ x: "band" , y: "none" }}

              series={[
                {
                  type: "line",
                  data: data,
                  area: true,
                  color:'#333',
                  showMark: false,
                },
              ]}

              sx={{
                '& .MuiChartsAxis-directionY': {
                  display: "none"
                }
              }}

              width={600}
              height={300}
              disableAxisListener
            />
        </div>
    )

}
export default AnalysisRequests