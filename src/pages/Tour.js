import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import ImageCollage from './ImageCollage'

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant='h3' component="h1" marginTop={3}>
        Explore the world in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img 
          src="https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
          alt=""
          width={525}
          height={325}  
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          About this ticket
        </Typography>
      </Box>  
    </Container>
  )
}

export default Tour