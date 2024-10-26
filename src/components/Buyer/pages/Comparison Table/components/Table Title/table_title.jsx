// mui
import { Stack , ButtonGroup , Button } from "@mui/material"
// components
import PageTitle from "../../../../../Common/Pages Title/page_title"
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGripHorizontal , faGripVertical , faChartArea } from "@fortawesome/free-solid-svg-icons"


const TableTitle = ({
    setDesign
}) => {

    return (
        <Stack justifyContent='space-between' flexDirection='row-reverse' mb={2}>
        <PageTitle iconTitle={faChartArea}>
          جدول مقارنة الأسعار
        </PageTitle>

        <ButtonGroup
          disableElevation
          variant="outlined"
          aria-label="Disabled button group"
        >
          <Button onClick={() => setDesign('horizontal')}>
              <FontAwesomeIcon icon={faGripHorizontal}/>
          </Button>
          <Button onClick={() => setDesign('vertical')}>
              <FontAwesomeIcon icon={faGripVertical}/>
          </Button>
        </ButtonGroup>
      </Stack>
    )

}

export default TableTitle