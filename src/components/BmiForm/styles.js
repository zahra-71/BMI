import { styled, TextField, Button, Paper } from '@mui/material';

export const MyPaper = styled(Paper) (({ theme }) => ({
    margin: "auto",
    paddingTop:theme.spacing(10),
    borderRadius: 10,
    height: 320,
    width: 350,
    border: '1px #9F0825',
    [theme.breakpoints.down('md')]: {
        marginBottom:theme.spacing(5),
        width: 345
    },
    [theme.breakpoints.down('sm')]: {
        marginBottom:theme.spacing(5),
        width: 300
    },
    "& .MuiPaper-root": {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
}))

export const MyTextField = styled(TextField) (({ theme }) => ({
    marginRight: theme.spacing(2),
    width: 200,
    "&.MuiTextField-root" :{
        background: "white",
    },
    "& .MuiInput-notched": {
        border: "none"
      },
    ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3C41A0",
        borderRadius: 8,
        borderWidth: 1.5
      },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#2E2C54",
        borderRadius: 8,
        borderWidth: 2.5
    },
    // "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#2E2C54",
    //   borderWidth: 1.5
    // },
    [theme.breakpoints.down('md')]: {
       width: 168 
    }
}))

export const MyButton = styled(Button) (({ theme }) => ({
    backgroundColor: "#3C41A0",
    width: "120px",
    borderRadius: "10px",
    color: "white",
    borderColor: "white",
    margin: "auto",
    "&:hover": {
        backgroundColor: "#2E2C54",
        // color: "white",
        borderColor: "#2E2C54"
    },
    [theme.breakpoints.down('md')]: {
       size: "small"
     }
}))