import { styled, Paper } from "@mui/material"

export const MyPaper = styled(Paper) (({ theme }) => ({
    paddingTop:theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingRight: theme.spacing(3),
    margin: "auto",
    height: 350,
    width: 360,
    [theme.breakpoints.down('md')]: {
        width: 340,
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom:theme.spacing(5),
        width: 300
    },
}))