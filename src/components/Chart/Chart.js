import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer,
  XAxis, YAxis, Tooltip, Legend } from "recharts";

  // styles
import { MyPaper } from "./styles";
  
const CustomizedXAxisTick = (props) => {
  const {x, y, payload} = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={30} y={20}
        textAnchor="start"
        fill="#666">{payload.value}</text>
    </g>
  );
}

const CustomizedYAxisTick = (props) => {
  const {x, y, payload} = props;
  const YAxios = new Number(payload.value).toLocaleString('fa-ir')
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={5}
        textAnchor="start"
        fill="#666">{YAxios}</text>
    </g>
  );
}
          
function Chart ({data}) {

  const newData = [...data, data]
  console.log("chart")

  return(
    <MyPaper 
      elevation={8}
      sx={{borderRadius: "10px"}}
    >
      <ResponsiveContainer>
        <LineChart
          stroke="#606161"
          data={newData}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" 
            stroke="white"
            tick={<CustomizedXAxisTick/>}
          />
          <YAxis 
            stroke="white"
            tick={<CustomizedYAxisTick/>}
          />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="bmi" 
            stroke="#3C41A0" 
            strokeWidth={3}
            activeDot={{ stroke: '#2E2C54', strokeWidth: 5 ,r: 3 }} 
            legendType="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </MyPaper>
  )}

export default Chart;