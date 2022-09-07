import { createTheme } from '@mui/material/styles';
import defaultTheme from "./default";

const overrides = {
    typography: {
        h1: {
            fontSize: "3rem",
        }
    }
}
const themes = {
    default: createTheme({
        ...defaultTheme, ...overrides
    })
}
export default themes;