import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../index'
import {Line,Bar} from 'react-chartjs-2';

import Styles from './Chart.module.css'


const Charts = () =>  {

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

    return (
        <div className={Styles.container} > 
            {lineChart}
        </div>
    )
}

export default Charts
