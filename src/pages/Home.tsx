import { Grid } from '@mui/material';
import Background from '../img/Background.jpg';

function Home() {
  return (
    <Grid
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      Stefi Miteva
    </Grid>
  );
}

export default Home;
