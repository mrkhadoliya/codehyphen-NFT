import React from 'react' 
import { makeStyles} from '@material-ui/core/styles';  
import {Container, Grid, Paper, Typography, Button} from '@material-ui/core';
import { Stack } from '@mui/material'; 
import '../MainPage/index.css' 
 
const useStyles = makeStyles((theme) => ({
    grid: {
        width:'100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.white, 
    },
    btngrid: { 
        gridRow:1, 
      },
      walletbtn: {
          margin: '10px 20px'
      }
}))

export default function CenteredGrid() {    
    const classes = useStyles(); 
    return (
        <main className="herobgcolor">
            <Container>
                <Grid container spacing={2} className={classes.grid}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.paper}>
                            <Typography variant="h1" className="text_sel" component="h2" gutterBottom>
                                <span className="discover">Discover</span> Collect And Sell <span className="discover">NFT</span> Assets
                            </Typography>
                            <Typography variant="h6" component="h2" gutterBottom style={{textAlign:'start', color:'#fff'}}>
                                Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
                            </Typography>
                        </div>
                        <Stack spacing={2} direction="row"> 
                            <Button color="primary" variant="contained">Contained</Button>
                            <Button color="primary" variant="outlined">Outlined</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.paper}>
                            <img width="100%" src="./images/nft.png"/>
                        </div> 
                    </Grid>
                </Grid > 
            </Container > 
        </main>
    )
}
 