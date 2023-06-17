import { CircularProgress, Grid } from '@mui/material';

function Loader() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <CircularProgress size={100} />
    </Grid>
  );
}

export default Loader;
