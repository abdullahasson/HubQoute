// react
import { useState , useContext , useEffect } from "react"
import { useForm , FormProvider } from "react-hook-form";
// context
import { appContext } from "../../../context/AppContext";
// mui
import { Box , Stack , Typography , Tab , Tabs , FormControlLabel } from "@mui/material"
// components
import Head from "./components/head"
import CustomTabPanel from "../../Common/Tab Panel/custom_tab_panel";
import Button from "../../Common/Buttons/button"
import Input from "../../Common/Inputs/Textfield/Input"
import Label from "../../Common/Label/label"
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock  , faPerson } from "@fortawesome/free-solid-svg-icons"
// svg
import Flag from "../../../assets/SVG/flag"
// style
import "./profile.css"


  
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Profile = () => {

    const {
        setSearshInput
    } = useContext(appContext)
    
    useEffect(() => {
        setSearshInput(false)
    } , [])


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const methods = useForm({
        mode: 'onSubmit',
    })

    const { handleSubmit , formState } = methods;

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <Box className="profile">

            <Head />


            <Box className='tabs-control'>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="أعدادات الحساب" {...a11yProps(0)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
                <Box className="body">
                    <Box className="account-details">
                        <Typography>
                            تفاصيل الحساب  
                        </Typography>

                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack className="setting" alignItems='end' justifyContent='start'>

                                    <Label text='اسم المستخدم'>
                                        <Input 
                                            resourceName='password'
                                            // error={formState.errors.password?.message}
                                            placeholder="اسم المستخدم" 
                                            icon={faPerson}
                                        />
                                    </Label>

                                    <Label text='كلمة المرور'>
                                        <Input 
                                            resourceName='password'
                                            // error={formState.errors.password?.message}
                                            placeholder="كلمة المرور" 
                                            type='password'
                                            icon={faLock}
                                        />
                                    </Label>

                                    <Button type='submit' className='btn' variant='acceptance'>
                                        إعادة تعيين كلمة المرور 
                                    </Button>

                                </Stack>
                            </form>
                        </FormProvider>
                    </Box>

                    <Box className="info">
                        <Typography>
                            شركة السعودية للمنتجات  
                        </Typography>
                        <Typography>
                            Operating/brand name
                        </Typography>
                    </Box>

                    <Box className="info">
                        <Typography>
                            Jacob Studio Corporation
                        </Typography>
                        <Typography>
                            Legally registered name
                        </Typography>
                    </Box>

                    <Box className="info">
                        <Typography>
                            Jacobstudio.com
                        </Typography>
                        <Typography>
                            Company URL
                        </Typography>
                    </Box>

                    <Box className="info">
                        <Box className="location">
                            <Flag />

                            <Typography className="country">
                                المملكة العربية السعودية   
                            </Typography>
                        </Box>
                        <Typography>
                            Country of incorporation
                        </Typography>
                    </Box>
                </Box>
            </CustomTabPanel>
            
        </Box>
    ) 

}

export default Profile 