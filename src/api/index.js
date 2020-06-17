import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'
 
export const fetchData = async () =>{

    try {
        
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
        return {confirmed, recovered, deaths, lastUpdate}

    } catch (error) {
        return(error.message)
    }

}


export const fetchDailyData = async () => {

    try {
        
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map(item => ({

            confirmed: item.confirmed.total,
            deaths: item.deaths.total,
            date: item.reportDate

        }))
        
        return modifiedData;
        
    } catch (error) {
        return error.message
    }
    
} 