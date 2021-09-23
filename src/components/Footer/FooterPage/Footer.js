import { Container, Grid, Paper } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { FooterCard } from './FooterCard'
import FooterData from './FooterData'

const useStyles = makeStyles ((theme) =>({
    footergrid: {
        gridRow: 1,
        width: '100%',
    },
    paper: { 
        textAlign: 'center',
        color: theme.palette.text.primary, 
    }
}))


export const Footer = () => {
    const classes = useStyles();
    return (
        <main className="hotcollectionbg">
            <Container maxWidth="xl">
                <Grid container spacing={2} className={classes.footergrid}>
                    <Grid item sx={12} md={3}>
                        <div className={classes.paper}>
                            <FooterCard
                                footerheading={FooterData[0].footerheading}
                                itemsnavtext={FooterData[0].itemsnavtext}
                                itemsnavtext1={FooterData[0].itemsnavtext1}
                                itemsnavtext2={FooterData[0].itemsnavtext2}
                                itemsnavtext3={FooterData[0].itemsnavtext3}
                                itemsnavtext4={FooterData[0].itemsnavtext4}
                             />
                        </div>
                    </Grid> 
                    <Grid item sx={12} md={3}>
                        <div className={classes.paper}>
                            <FooterCard
                                footerheading={FooterData[1].footerheading}
                                itemsnavtext={FooterData[1].itemsnavtext}
                                itemsnavtext1={FooterData[1].itemsnavtext1}
                                itemsnavtext2={FooterData[1].itemsnavtext2}
                                itemsnavtext3={FooterData[1].itemsnavtext3}
                                itemsnavtext4={FooterData[1].itemsnavtext4}
                             />
                        </div>
                    </Grid> 
                    <Grid item sx={12} md={3}>
                        <div className={classes.paper}>
                            <FooterCard
                                footerheading={FooterData[2].footerheading}
                                itemsnavtext={FooterData[2].itemsnavtext}
                                itemsnavtext1={FooterData[2].itemsnavtext1}
                                itemsnavtext2={FooterData[2].itemsnavtext2}
                                itemsnavtext3={FooterData[2].itemsnavtext3}
                                itemsnavtext4={FooterData[2].itemsnavtext4}
                             />
                        </div>
                    </Grid> 
                    <Grid item sx={12} md={3}>
                        <div className={classes.paper}>
                            <FooterCard
                                footerheading={FooterData[3].footerheading}
                                itemsnavtext={FooterData[3].itemsnavtext}
                                itemsnavtext1={FooterData[3].itemsnavtext1}
                                itemsnavtext2={FooterData[3].itemsnavtext2}
                                itemsnavtext3={FooterData[3].itemsnavtext3} 
                             />
                        </div>
                    </Grid> 
                    {/* <Grid item sx={12} md={12}>
                        <div className={classes.paper}>
                            <FooterCard />
                        </div>
                    </Grid>  */}
                </Grid>
            </Container>
        </main>
    )
}
