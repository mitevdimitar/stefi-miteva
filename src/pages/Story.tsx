import Layout from '../components/Layout';
import { Avatar, Chip, Grid, Typography } from '@mui/material';

function Story() {
  return (
    <Layout isHome={false}>
      <Grid
        container
        sx={{
          background: 'white',
          height: 'fit-content',
          borderRadius: 5,
          color: '#8b8b8b',
        }}
        p={3}
      >
        <Grid container>
          <Grid
            item
            xs={5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <Typography
              align="center"
              mb={1}
              variant="h2"
              sx={{ fontWeight: '600' }}
            >
              Капан за надежда
            </Typography>
            <Grid container alignItems="center" justifyContent="center">
              <Avatar
                alt="Stefi"
                src={require('../img/stefi_avatar.jpg')}
                //sx={{ width: 40, height: 34 }}
              />
              <Typography variant="body1" ml={1}>
                Стефания Митева
              </Typography>
            </Grid>
            <Typography
              align="center"
              mt={1}
              sx={{
                color: '#8C78C4',
                wdith: '100%',
              }}
            >
              12.04.2023
            </Typography>
            <Chip
              label="Ново"
              sx={{
                backgroundColor: '#EDE6FF',
                color: '#8C78C4',
                borderRadius: '8px',
                marginBottom: 1,
                marginTop: 1,
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: '1.2rem',
              }}
            />
          </Grid>
          <Grid item xs={7}>
            <img
              src={require('../img/globe.jpeg')}
              alt="Story image"
              style={{ width: '-webkit-fill-available', borderRadius: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container mt={5}>
          <Chip variant="outlined" label="Мистериозен разказ" />
        </Grid>
        <Grid container mt={2}>
          <Typography>
            Колата прелиташе по неравния асфалт, като оставяше прах след себе
            си, който беше раздухван от хладния повей на вятъра. Около нея се
            извисяваха гордо върховете на ели и смърчове, оставящи лека сянка по
            преминаващия автомобил. Няколко врабчета прехвърчаха от дърво на
            дърво и наблюдаваха озадачени колата. Чудеха се накъде отива.
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Story;
