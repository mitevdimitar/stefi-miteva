import { Button, Grid, Typography, useTheme } from '@mui/material';
import { useMobile } from '../hooks/useMobile';
import StyledLink from './StyledLink';

export default function WelcomeBoard() {
  const isMobile = useMobile();
  const theme = useTheme();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100%',
        backdropFilter: 'brightness(85%)',
      }}
      pb={14}
    >
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" color="white" fontWeight={500} align="center">
          Приказките на Стефи
        </Typography>
        <Typography variant="h5" color="white" align="center">
          Авторски детски приказки
        </Typography>
        <Grid container item alignItems="center" justifyContent="center" mt={3}>
          <StyledLink to="books">
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                fontSize: '1rem',
                padding: '10px 30px',
                marginRight: isMobile ? 0 : 5,
                marginBottom: isMobile ? 1 : 0,
                fontWeight: '600',
                border: `2px solid ${theme?.palette.primary.main}`,
                borderRadius: 20,
              }}
            >
              За Oсмото кралство
            </Button>
          </StyledLink>
          <StyledLink to="about">
            <Button
              variant="outlined"
              sx={{
                color: 'white',
                border: '2px solid white',
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '1rem',
                padding: '10px 30px',
                '&: hover': {
                  border: '2px solid rgba(255,255,255,.7)',
                },
                fontWeight: '600',
              }}
            >
              За Стефи
            </Button>
          </StyledLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
