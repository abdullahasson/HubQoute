// mui
import { Grid } from "@mui/material"

const CardContainer = ({
    data , 
    resourceName ,
    card: Card ,
    columnsNumber = 3 ,
    spacing = 3 ,
    style ,
    cardProps = {}
}) => {


    return (
        <Grid style={style} container spacing={spacing} columns={{xs: 3 , sm: 8, md: 12}}>
            
            {
                data.map(
                    (item , index) => (
                        <Grid key={index} item xs={12 / columnsNumber}>
                            <Card 
                                {...{[resourceName]: item}}
                                {...cardProps}
                            />
                        </Grid>
                    )
                )
            }

        </Grid>
    )

}

export default CardContainer