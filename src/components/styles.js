import { styled, Button, Typography } from "@mui/material"

export const MyResetButton = styled(Button) (({ theme }) => ({
    color: "white",
    backgroundColor: "#3C41A0",
    borderColor: "white",
    margin: "10px",
    "&: hover": {
        borderColor: "#FBAAAB",
        backgroundColor: "#2E2C54",
    }
}))

export const MyTypography = styled(Typography) (({ theme}) => ({
    fontSize: "30px",
    [theme.breakpoints.down('md')]: {
        fontSize: "20px"
    }
}))

