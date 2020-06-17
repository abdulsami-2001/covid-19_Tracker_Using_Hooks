import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../index'
import {Line,Bar} from 'react-chartjs-2';

import Styles from './Chart.module.css'


const Charts = ({data:{confirmed,recovered,deaths},country}) =>  {

    const [dailyData, setDailyData] = useState([])
    
    useEffect(()=>{

        const fetchApi = async () => {

            const ifErrorOccur = await fetchDailyData()

            if(typeof(ifErrorOccur) !== "string" ){
                setDailyData(await fetchDailyData())
            }
        }  

        fetchApi()
    },[])

    const lineChart = (
        dailyData.length ? (<Line
        
            data={{
                labels: dailyData.map((item)=> item.date),
                datasets: [{
                    data: dailyData.map((item)=>item.confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                }, 
                {
                    data: dailyData.map((item)=>item.deaths),
                    label:"Deaths",
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true

                }]
            }}

        />) : "Loading..."
    )

    const barChart = (

        confirmed ? 
        (
            
            <Bar 
                data={{
                    
                    labels:["Infected", "Recovered", "Deaths"],
                    datasets:[{

                        label: "Peoples",
                        backgroundColor: [

                            'rgba(0,0,255,0.5)',
                            'rgba(0,255,0,0.5)',
                            'rgba(255,0,0,0.5)',
                        ],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }],

                }}
                options={{
                    legend:{display: false},
                    title:{display: true, text:`Current State In ${country}`}
                }}
            />
            
        ) : "Loading..."

    )

    return (
        <div className={Styles.container} > 
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts
