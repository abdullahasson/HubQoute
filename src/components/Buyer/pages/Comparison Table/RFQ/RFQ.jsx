// react
import { useState , lazy , Suspense } from "react"
// mui
import { Box } from "@mui/material"
// components
import TableTitle from "../components/Table Title/table_title"
import PageLoad from "../../../../Common/Loaders/pages loader/page_load"
const HorizontalPage = lazy(() => import("./Horizontal Page/horizontal_page"))
const VerticalPage = lazy(() => import("./Vertical Page/vertical_page")) 

const RFQ = () => {
  
  // vertical // horizontal
  const [design , setDesign] = useState('horizontal')
  const isHorizontal = design === "horizontal"

  return (
    <Box sx={{padding: 'var(--page-padding)'}}>
      <TableTitle  setDesign={setDesign} />

      {
        isHorizontal ? 
          <Suspense fallback={<PageLoad />}>
            <HorizontalPage />
          </Suspense> 
          : 
          <Suspense fallback={<PageLoad />}>
            <VerticalPage />
          </Suspense>
      }
    </Box>
  )
}

export default RFQ