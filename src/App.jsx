// react 
import { useContext, useEffect } from "react";
import { RouterProvider } from "react-router-dom"
// context
import { appContext } from "./context/AppContext";
//  mui
import { useMediaQuery , createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles"
// routes
import { router } from "./Routes/BaseRoutes";
// fonts
import "@fontsource/cairo"; // Defaults to weight 400
import "@fontsource/cairo/400.css"; // Specify weight
// style
import './styles/App.css'


const App = () => {

  const { theme , setTheme } = useContext(appContext)

  const userSystemTheme = useMediaQuery('(prefers-color-scheme: dark)') ? 'light' : 'light'
  useEffect(() => {
    const mode = window.localStorage.getItem('theme')
    mode ? 
        null : 
        localStorage.setItem('theme' , userSystemTheme)
      
    setTheme(mode)
  } , [theme , userSystemTheme])

  
  const Theme = createTheme({
    palette: {
      mode: theme == 'dark' ? 'dark' : 'light',
      direction: 'rtl',
      success: {
        main: '#12A60F',
      } ,
      primary: {
        main: '#2140c9',
      },
    },
    typography: {
      fontFamily: 'Cairo'
    } ,
    components: {
      MuiStack: {
        defaultProps: {
          direction: 'row',
          justifyContent: 'end' ,
          alignItems: 'center',
          gap: 2
        } ,
        styleOverrides: {
          root: {
            width: '100%'
          }
        }
      }
     }
  })

  return (
    <ThemeProvider theme={Theme}>
        <div data-theme={theme} id="app">  
          <RouterProvider router={router} />
        </div>  
    </ThemeProvider>
  );
};

export default App;