import React from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { makeStyles} from '@material-ui/core/styles'
import SellersData from './SellersData' 
import { SellerCard } from './SellerCard'

const useStyles = makeStyles((theme) => ({
    gridtopsell: {
        width: '100%',  
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.white, 
    }
}))



export const TopSeller = (props) => {
    const classes = useStyles();
    return (
        <main className="mintsbgcolor">
           <Container>
               <Grid container spacing={2} className={classes.gridtopsell}>
                    <Grid item xs={12} md={12}>
                        <div className={classes.paper}>
                            <Typography variant="h2" component="h2" className="textwhite" gutterBottom>
                                <span className="discover">Top Sellers</span>
                            </Typography> 
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className={classes.paper}>
                            <SellerCard />
                        </div>
                    </Grid>
               </Grid>
           </Container>
        </main>
    )
}
