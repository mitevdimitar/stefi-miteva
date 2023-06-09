import { Grid, useTheme } from '@mui/material';
import Background from '../img/Background.jpg';
import Menu from '../components/Menu';

interface LayoutProps {
  children: JSX.Element;
  isHome: boolean;
  isContacts?: boolean;
}

function Layout({ children, isHome, isContacts }: LayoutProps) {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        backgroundColor: isHome ? `#C7BF85` : 'none',
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
                padding: '114px 10% 5% 10%',
                [theme.breakpoints.down('md')]: {
                  padding: isContacts ? '54px 0 0' : '64px 5% 2%',
                },
                background: '#fffaf9',
              }
        }
        justifyContent="center"
      >
        {children}
      </Grid>
    </Grid>
  );
}

export default Layout;
