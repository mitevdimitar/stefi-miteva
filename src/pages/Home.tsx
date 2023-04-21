import { Grid } from '@mui/material';
import Background from '../img/Background.jpg';
import Menu from '../components/Menu';
import WelcomeBoard from '../components/WelcomeBoard';

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
      <WelcomeBoard />
    </Grid>
  );
}

export default Home;
