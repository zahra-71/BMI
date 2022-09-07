import { styled, Card, IconButton } from "@mui/material"

export const MyCard = styled(Card) (({ theme }) => ({
    margin: "auto",
    borderRadius: "10px",
    [theme.breakpoints.down('md')]: {
        width: 300,
        margin: "auto"
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom:theme.spacing(1),
        width: 280,
        margin: "auto"
    },
}))

export const MyRemoveButton = styled(IconButton) (({ theme }) => ({
    color: "white",
    top: "-130px",
    left: "-135px",
    zIndex: "1",
    marginBottom: "10px",
    "&: hover": {
        borderColor: "white",
    },
    [theme.breakpoints.down('md')]: {
        left: "-122px",
    },
    [theme.breakpoints.up('md')]: {
        left: "-135px"
    },
}))