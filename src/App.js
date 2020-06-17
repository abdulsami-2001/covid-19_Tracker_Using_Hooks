import React, {Component} from 'react'
import {Cards, Charts, CountryPicker, fetchData} from './Components'
import Styles from './App.module.css'
import Logo from './Assets/image.png'

export default class App extends Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {

        const globalResponse = await fetchData()
        this.setState({data: globalResponse})
        
    }

    handleCountryChange = async (country) => {

        if(country !== "Global"){

            const countryData = await fetchData(country)        
            this.setState({data:countryData,country:country})
        }else{
            const globalResponse = await fetchData()
            this.setState({data: globalResponse, country:""})
        }

    }
    
    render() {

        const {data, country} = this.state;

        return (
            <div className={Styles.container} >
                <img src={Logo} alt="Covid-19 Text Logo." className={Styles.image} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        )
    }
}
