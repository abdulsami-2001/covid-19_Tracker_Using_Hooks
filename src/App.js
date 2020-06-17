import React, {Component} from 'react'
import {Cards, Charts, CountryPicker, fetchData} from './Components'
import Styles from './App.module.css'

export default class App extends Component {

    state = {
        data: {},
    }

    async componentDidMount() {

        const globalResponse = await fetchData()
        this.setState({data: globalResponse})
        
    }
    
    render() {

        const {data} = this.state;

        return (
            <div className={Styles.container} >
                <Cards data={data} />
                <CountryPicker/>
                <Charts/>
            </div>
        )
    }
}
