import { CardContent, Typography } from '@mui/material'
import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// styles
import { MyRemoveButton, MyCard } from './styles'

function Info({bmi, weight, height, date, id, remove}) {

  console.log("info")
  const handleRemove = (id) => {
    remove(id)
  }

  return (
    <MyCard>
      <CardContent>
        <Typography>BMI: {bmi}</Typography>
        <Typography>وزن: {weight}</Typography>
        <Typography>قد: {height}</Typography>
        <Typography>تاریخ: {date}</Typography>
      </CardContent>
      <MyRemoveButton varia="outlined" onClick={() => handleRemove(id)} size="small">
        <DeleteForeverIcon sx={{ color: "#3C41A0", '&:hover':{
          color:"#2E2C54"}
          }}
        />
      </MyRemoveButton>
    </MyCard>
  )
}

export default Info