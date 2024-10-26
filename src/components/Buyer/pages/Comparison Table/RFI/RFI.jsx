// react 
import { useState } from "react"
// layout
import CardContainer from "../../../../../layouts/Card container/card_container"
// mui
import { 
    Box , 
    Typography , 
    Stack , 
    styled , 
} from "@mui/material"
// components
import TableTitle from "../components/Table Title/table_title"
import RfiCard from "../../../../Common/Cards/RFI/rfi_card"
import RfiDetails from "../../Comparison Table/components/RFI Details/rfi_details"
// fake content
import { rfi } from "../../../../../fake-content"


const RFI = () => {

    // vertical // horizontal
    const [design , setDesign] = useState('horizontal')

    const isHorizontal = design == "horizontal" 

    return (
        <RfiBox>

            <TableTitle setDesign={setDesign} />

            <Stack
                flexDirection={isHorizontal ? "column-reverse" : "row"}
                sx={{marginTop: 2}}
            >

                <Box flex={2}>
                    <CardContainer 
                        data={rfi}
                        resourceName='rfi'
                        columnsNumber={isHorizontal ? 1 : 2}
                        card={RfiCard}
                        cardProps={{
                            design: design,
                        }}
                    />
                </Box>

                {isHorizontal && (<Typography fontWeight='600' sx={{mt: 1.3}} width='100%' component='h3'>Responses Form</Typography>)}

                <RfiDetails design={design} />

            </Stack>
        </RfiBox>
    )
}

export default RFI

const RfiBox = styled(Box)`
    padding: var(--page-padding);
`