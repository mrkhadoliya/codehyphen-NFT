import React from 'react'
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core'; 
import IconButton from '@mui/material/IconButton';
import '../MintPage/CardBox.css' 
import { SellNFTData } from './SellNFTData' 

export const WalletBox = (props) => { 
    return (
        <Card className="cardbgclr">
            <Box>
                <IconButton aria-label="next" className="walleticons">
                    <i class={props.checkicon}></i>
                </IconButton>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" color="white" component="div">
                    <span className="discover">{props.boxheading} </span>
                </Typography>
                <Typography variant="body2" color="white">
                    {props.title}
                </Typography>
            </CardContent> 
        </Card>
    )
}
