import { Button, Grid, Typography } from '@mui/material';

export default function WelcomeBoard() {
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
        <Typography variant="h2" color="white" fontWeight={500}>
          Приказките на Стефи
        </Typography>
        <Typography variant="h5" color="white">
          Авторски детски приказки
        </Typography>
        <Grid container item alignItems="center" justifyContent="center" mt={3}>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: 20,
              fontSize: '1rem',
              padding: '10px 30px',
              marginRight: 5,
              fontWeight: '600',
            }}
          >
            За Oсмото кралство
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              border: '2px solid white',
              textTransform: 'none',
              borderRadius: '20px',
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
        </Grid>
      </Grid>
    </Grid>
  );
}
