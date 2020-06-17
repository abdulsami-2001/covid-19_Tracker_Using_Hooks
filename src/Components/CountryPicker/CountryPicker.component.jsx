import React,{useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountryName} from '../index';

import Styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) =>  {

    const [countryName, setCountryName] = useState([])

    useEffect(()=> {

        const fetchApi = async () => {

            const ifErrorOccurs = await fetchCountryName();

            if(typeof(ifErrorOccurs) !== "string" ){
                setCountryName(await fetchCountryName())
            }
        }   

        fetchApi()

    },[])

    if(countryName.length){

        return (
            <>
                <FormControl className={Styles.formControl} >
                    <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)} >
                        <option key="global" value="Global">Global</option>
                        {countryName.map((item)=>
                                <option key={item.name} value={item.name} >{item.name}</option>
                        )}
                    </NativeSelect>
                </FormControl>
            </>
        )
    }else{
        return (

            <div>
                <h3>Loading...</h3>
            </div>

        )
    }
}

export default CountryPicker
