import { useEffect, useState } from 'react';
import { Grid, Typography, Fade} from '@mui/material';
import { v4 as uuid } from 'uuid';
import './App.css';

// components
import { getData, storeData } from '../helpers/localStorage';
import BmiForm from './BmiForm/BmiForm.js';
import Info from './Info/Info';
import Chart from './Chart/Chart';

// styles
import { MyResetButton, MyTypography } from './styles';

function App() {

  const initialState = getData('Data') || []
  const [state, setState] = useState(initialState);
  
  console.log("app")
  console.log(state)

  useEffect(()=>{
    storeData('Data', state)
  }, [state])

  const handleAdd = (val) => {
    let heightToM = val.height / 100;
    val.bmi = (val.weight / (heightToM * heightToM)).toFixed(2)
    val.id = uuid();
    var newState = [...state,val]
    let length = newState.length
    if (length > 8) newState = newState.slice(1, length)
    setState(newState)
  }

  const handleDelete = (id) => {
    storeData('lastData', state)
    let newState = state.filter(i => {
      return i.id !== id
    })
    setState(newState)
  }

  const handleUndo = () => {
    setState(getData('lastData'))
  }

  return (
    <div className="App">
      <MyTypography 
        color="white"
        sx={{p:5}}
      >
        محاسبه شاخص توده‌ی بدنی
      </MyTypography>
      <Grid 
        container
      >
        <Grid item md={6} xs={12}>
          <BmiForm change={handleAdd}/>
        </Grid>
            <Grid item md={6} xs={12}>
              <Chart data={state}/>
            </Grid>
      </Grid>
      
      <div style={{margin:15, padding:5}}>
        {state.length > 0 ? (
          <Grid container spacing={3}>
            {state.map(info => {
              return(
                <Grid item key={info.id} xs={12} sm={6} md={4} lg={3}>
                  <Info {...info} remove={handleDelete}/>
                </Grid>
              )}
              )}
          </Grid>
          ):(
          <Typography>هیچ اطلاعاتی موجود نمی‌باشد.</Typography>
        )}
      </div>
      {getData('lastData') ? (
        <MyResetButton onClick={handleUndo} variant="outlined">ریست</MyResetButton>
      ):(
       ''
      )}
    </div>
  );
}

export default App;