import { Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FooterData from './FooterData'

export const FooterCard = (props) => {
    return (
        <Box>
             <nav aria-label="main mailbox folders"> 
                 <List>
                     <Typography variant="h5" color="white" component="div" gutterBottom textAlign="start">
                        {props.footerheading}
                     </Typography>
                     <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText secondary={props.itemsnavtext} />   
                        </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText secondary={props.itemsnavtext1} />  
                        </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText secondary={props.itemsnavtext2} />  
                        </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText secondary={props.itemsnavtext3} />  
                        </ListItemButton>
                     </ListItem>
                     <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText secondary={props.footerheading4} />  
                        </ListItemButton>
                     </ListItem>
                 </List>
             </nav>
        </Box>
    )
}
