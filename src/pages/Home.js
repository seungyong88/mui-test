import React from 'react'
import { Container, Grid, Typography } from '@mui/material';
import TourCard from '../components/TourCard';
import cities from '../data.json'

function Home() {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {
          cities.map((city) => (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours
                <Grid container spacing={5}>
                  {city.tours.map((tour, index) => <TourCard tour={tour} key={index} />)}
                </Grid>
              </Typography>
            </>
            // <TourCard />
          ))
        }
      </Container>
    </div>
  );
}

export default Home;