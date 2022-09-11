import { useState } from 'react'

// styles
import { MyTextField, MyButton, MyPaper } from './styles'

const initialValues = {
	weight: '',
	height: '',
	date: ''
}

function BmiForm({change}) {

  console.log("form")
  const [state, setState] = useState(initialValues)

  const handleChange = (e) => {
    const date = new Date().toLocaleDateString('fa-Ir').split(',')[0]
    setState({
      ...state,
      [e.target.name]: e.target.value,
      date
    })
  }

  const handleSubmit = () => {
    change(state)
    setState(initialValues)
  }

  return (
    <MyPaper elevation={8}>
      <MyTextField 
        placeholder="وزن" 
        name="weight"
        type="number" 
        margin="normal"
        value={state.weight}
        onChange={handleChange}
      />
      <MyTextField placeholder="قد" 
        name="height" 
        type="number" 
        margin="normal"
        value={state.height}
        onChange={handleChange}
      />
      <div>
        <MyButton 
          variant="outlined"
          onClick={handleSubmit}
          disabled={state.weight.length === 0 || state.height.length === 0}
          sx={{mb:5, mt:2}}
          size="medium"
        >
          محاسبه
        </MyButton>
      </div>
    </MyPaper>
    
  )
}

export default BmiForm;