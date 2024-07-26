"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Sun",
    visit: 4000,
    click: 2400,
    // notvisited:2344,
  },
  {
    name: "Mon",
    visit: 3000,
    click: 1398,
    // notvisited:1044,
  },
  {
    name: "Tue",
    visit: 2000,
    click: 3800,
    // notvisited:5344,
  },
  {
    name: "Wed",
    visit: 2780,
    click: 3908,
    // notvisited:4344,
  },
  {
    name: "Thu",
    visit: 1890,
    click: 4800,
    // notvisited:234,
  },
  {
    name: "Fri",
    visit: 2390,
    click: 3800,
    // notvisited:1944,
  },
  {
    name: "Sat",
    visit: 3490,
    click: 4300,
    // notvisited:3980,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          {/* <Line type="monotone" dataKey="notvisited" stroke="#82ca9d" strokeDasharray="4 8 8 8" /> */}
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart