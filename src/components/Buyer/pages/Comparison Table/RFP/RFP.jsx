// react
import {useState} from "react"
// mui 
import { 
  Box , 
  Typography , 
  Stack , 
  styled , 
} from "@mui/material"
// components
import TableTitle from "../components/Table Title/table_title"
import CardContainer from "../../../../../layouts/Card container/card_container"
import RfpCard from "../../../../Common/Cards/RFP/rfp_card"
import RfiDetails from "../components/RFI Details/rfi_details"
// fake content
import { rfp } from "../../../../../fake-content"

const RFP = () => {

  // vertical // horizontal
  const [design , setDesign] = useState('horizontal')

  const isHorizontal = design === "horizontal"


  return (
    <RfpBox>
      <TableTitle setDesign={setDesign} />

      <Stack
        flexDirection={isHorizontal ? "column-reverse" : "row"}
        sx={{marginTop: 2}}
      >
        <Box flex={2}>
            <CardContainer 
                data={rfp}
                resourceName='rfp'
                columnsNumber={isHorizontal ? 1 : 2}
                card={RfpCard}
                cardProps={{
                  design: design,
              }}
            />
        </Box>

        {isHorizontal && (<Typography fontWeight='600' sx={{mt: 1.3}} width='100%' component='h3'>Responses Form</Typography>)}

        <RfiDetails design={design} />
      </Stack>
    </RfpBox>
  )
}

export default RFP

// style
const RfpBox = styled(Box)`
 padding: var(--page-padding);
`