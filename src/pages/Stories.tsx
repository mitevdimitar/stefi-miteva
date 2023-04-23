import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Chip,
} from '@mui/material';
import Background from '../img/Background.jpg';
//import Globe from '../img/globe.jpeg';
import Menu from '../components/Menu';

function Stories() {
  return (
    <Grid
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Menu />
      <Grid
        container
        sx={{
          height: '100%',
          marginTop: '64px',
          padding: '50px 10% 0 10%',
          minHeight: '100vh',
          background: '#fffaf9',
        }}
      >
        <Grid container item>
          <Card
            sx={{
              display: 'flex',
              width: '100%',
              maxHeight: 320,
              borderRadius: '40px',
            }}
            elevation={0}
          >
            <CardMedia
              component="img"
              sx={{ width: '60%', borderRadius: '40px' }}
              image={require('../img/globe.jpeg')}
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent
                sx={{
                  flex: '1 0 auto',
                  padding: '6px 26px',
                  position: 'relative',
                }}
              >
                <Chip
                  label="Ново"
                  sx={{
                    backgroundColor: '#EDE6FF',
                    color: '#8C78C4',
                    borderRadius: '8px',
                    marginBottom: 1,
                  }}
                />
                <Typography
                  component="div"
                  variant="h4"
                  align="center"
                  sx={{
                    fontFamily: "'Roboto Slab', serif",
                    color: '#3c424f',
                  }}
                  mb={1}
                >
                  Капан за надежда
                </Typography>
                <Typography
                  component="div"
                  align="justify"
                  sx={{
                    color: '#8b8b8b',
                    height: '50%',
                    overflow: 'hidden',
                    //whiteSpace: 'nowrap',
                    mb: 2,
                  }}
                >
                  Колата прелиташе по неравния асфалт, като оставяше прах след
                  себе си, който беше раздухван от хладния повей на вятъра.
                  Около нея се извисяваха гордо върховете на ели и смърчове,
                  оставящи лека сянка по преминаващия автомобил.
                </Typography>
                <Typography
                  align="right"
                  sx={{
                    color: '#8C78C4',
                    fontSize: '0.8rem',
                    position: 'absolute',
                    bottom: '30px',
                    right: '30px',
                  }}
                >
                  12.04.2023
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Stories;
