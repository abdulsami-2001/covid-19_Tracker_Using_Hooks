import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import Styles from './Cards.module.css'


const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) =>  {
    
    if(confirmed){

        return (
            <div className={Styles.container} >
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.infected)} >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom >Infected</Typography>
                            <Typography variant="h5" >
                                <CountUp start={0} end={confirmed.value} duration="1.3" separator="," />
                            </Typography>
                                <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2"  >No. Of Cases Of Covid-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.recoveries)} >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom >Recoveries</Typography>
                            <Typography variant="h5" >
                                <CountUp start={0} end={recovered.value} duration="1.3" separator="," />
                            </Typography>
                            <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2"  >No. Of Recoveries From Covid-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(Styles.card, Styles.deaths)} >
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom >Deaths</Typography>
                            <Typography variant="h5" >
                                <CountUp start={0} end={deaths.value} duration="1.3" separator="," />
                            </Typography>
                            <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2"  >No. Of Deaths From Covid-19</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
    }else{
        return "Loading..."
    }   

}

export default Cards
