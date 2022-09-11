import { createTheme } from '@mui/material/styles';
import defaultTheme from "./default";

const fonts = {
    typography: {
        fontFamily: 'Shabnam',
    },
   components: {
       MuiScopedCssBaseLine: {
           styleOverrides: {
               root: {
                   fontFamily: 'Shabnam'
               }
           }
       }
   } 
}

const overrides = {
    typography: {
        h1: {
            fontSize: "3rem",
        }
    }
}
const themes = {
    default: createTheme({
        ...defaultTheme, ...overrides, ...fonts
    })
}

export default themes;