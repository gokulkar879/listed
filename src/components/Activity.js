import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "./Activity.css";

const data = [
     {
        "name": "Week 1",
        "guest": 4000,
        "user": 2400,
        "amt": 2400
      },
      {
        "name": "Week2",
        "guest": 3000,
        "user": 1398,
        "amt": 2210
      },
      {
        "name": "Week 3",
        "guest": 2000,
        "user": 9800,
        "amt": 2290
      },
      {
        "name": "Week 4",
        "guest": 2780,
        "user": 3908,
        "amt": 2000
      }
]

function Activity() {
  return (
    <div className='activity'>
        <div className='activity-header'>
            <div className='activity-header-left'>
                <h5>Activites</h5>
                <p>May - June 2021</p>
            </div>
            <div className='activity-header-right'>
                <p className='graph-axis'>
                    <div className='guest'></div>
                    <span>Guest</span>
                </p>
                <p className='graph-axis'>
                    <div className='user'></div>
                    <span>User</span>
                </p>
                
            </div>
        </div>
        <LineChart width={1050} height={200} data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid vertical={false}/>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false}/>
            <Line type="monotone" strokeWidth={3} dataKey="guest" stroke="#E9A0A0" />
            <Line type="monotone" strokeWidth={3} dataKey="user" stroke="#9BDD7C" />
        </LineChart>
    </div>
  )
}

export default Activity