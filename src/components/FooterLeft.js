import React from 'react';
import { PieChart, Pie, Cell } from "recharts";
const data = [
    {
      "name": "Basic Tees",
      "value": 55,
      "color": "#98D89E"
    },
    {
      "name": "Custom Short Pants",
      "value": 31,
      "color": "#F6DC7D"
    },
    {
      "name": "Super Hoodies",
      "value": 14,
      "color": "#EE8484"
    }
  ];

function FooterLeft() {
  return (
    <>
      <div className='footer-left-header'>
        <h5>Top Products</h5>
        <p>May - June 2021</p>
      </div>
      <div className='footer-left-center'>
        <PieChart width={300} height={200}>
            <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8">
                {
                    data.map((entry, index) => (
                        <Cell key={`cell - ${index}`} fill={entry["color"]}/>
                    ))
                }
            </Pie>
        </PieChart>
        <div className='info'>
            {
                data.map((entry, index) => (
                    <div key={`info-${index}`} style={{display: "flex"}}>
                        <div style={{width: "7px", height: "7px", borderRadius: "50%", background: `${entry.color}`}}></div>
                        <div style={{marginLeft: "10px", marginBottom: "8px"}}>
                            <p style={{fontWeight: "700"}}>{entry.name}</p>
                            <p style={{fontSize: ".8rem", color: "#858585"}}>{entry.value}%</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default FooterLeft