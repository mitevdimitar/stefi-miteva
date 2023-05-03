import { Grid } from '@mui/material';
import Background from '../img/Background.jpg';
import Menu from '../components/Menu';

interface LayoutProps {
  children: JSX.Element;
  isHome: boolean;
}

function Layout({ children, isHome }: LayoutProps) {
  return (
    <Grid
      sx={{
        backgroundImage: isHome ? `url(${Background})` : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: isHome ? '100vh' : 'auto',
      }}
    >
      <Menu isHome={isHome} />
      <Grid
        container
        sx={
          isHome
            ? {
                height: '100%',
              }
            : {
                minHeight: '100vh',
                padding: '114px 10% 0 10%',
                background: '#fffaf9',
              }
        }
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
