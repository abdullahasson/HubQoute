
// mui
import { 
    Box ,
    Typography ,
    Switch , 
    FormControlLabel , 
    Checkbox ,
    FormGroup ,
    MenuItem
} from '@mui/material'
// components
import Label from "../../Common/Label/label"
import Select from '../../Common/Inputs/Select/select'
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn , faBell } from '@fortawesome/free-solid-svg-icons'
// style
import "./general_setting.css"

const GeneralSetting = () => {

    return (
        <Box className='general-setting'>
            <Box className='top'>
                <Box> 
                    <Typography className='general-setting-title'>
                        إعدادت النظام   
                        {' '}
                        <FontAwesomeIcon icon={faToggleOn} />
                    </Typography> 

                    <Typography component='span'>
                       : نوع الحساب 
                    </Typography>
                </Box>

                <Box>
                    <Label text='اللغة'>
                        <Select 
                            label='اللغة'
                            // labelLng='ar'
                        >
                            <MenuItem value='a'>A</MenuItem>
                            <MenuItem value='b'>B</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                        </Select>
                    </Label>

                    <Label text='المنطقة'>
                        <Select 
                            label='المنطقة'
                            // labelLng='ar'
                         >
                            <MenuItem value='a'>A</MenuItem>
                            <MenuItem value='b'>B</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                        </Select>
                    </Label>

                    <Label dir='rtl' text='التاريخ / الوقت'>
                        <Select 
                            label='التاريخ / الوقت'
                            // labelLng='ar'
                        >
                            <MenuItem value='a'>A</MenuItem>
                            <MenuItem value='b'>B</MenuItem>
                            <MenuItem value='c'>C</MenuItem>
                        </Select>
                    </Label>
                </Box>
            </Box>

            <Box className='middle'>
                <Box> 
                    <Typography className='general-setting-title'>
                        الإشعارات     
                        {' '}
                        <FontAwesomeIcon icon={faBell} />
                    </Typography> 
                </Box>

                <FormGroup>
                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label=":  الإشعارات الفورية"
                        labelPlacement="start"
                    />


                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label=':  إشعارات الرسائل النصية'
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label=":  إشعارات البريد الإلكتروني"
                        labelPlacement="start"
                    />
                </FormGroup>
            </Box> 

            <Box className='bottom'>
                <Typography>
                    طرق الدفع المتاحة
                </Typography>

                <FormGroup sx={{maxWidth: '80%'}}>
                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />


                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="حوالة بنكية"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="نقدا"
                        labelPlacement="start"
                    />
                </FormGroup>
            </Box>
        </Box>
    )

}

export default GeneralSetting