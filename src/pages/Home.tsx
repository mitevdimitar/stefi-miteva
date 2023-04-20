import { Grid } from '@mui/material';
import Background from '../img/Background.jpg';
import Menu from '../components/Menu';

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
      <Menu />
    </Grid>
  );
}

export default Home;
