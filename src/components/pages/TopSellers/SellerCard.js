import React from 'react'
import { Card, Box, CardContent, Typography,CardMedia } from '@mui/material'

export const SellerCard = () => {
    return (
        <Card className="sellercardbg" sx={{ display: 'flex' }}>
            <CardMedia 
                sx={{ width: 60, height:60 }}
                image="./images/photo-1539571696357-5a69c17a67c6.jpg"
                alt="Monica Lucas"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        Monica Lucas
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        3.2 ETH
                    </Typography>
                </CardContent> 
            </Box>
      </Card>
    )
}
