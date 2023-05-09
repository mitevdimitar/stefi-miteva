import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Chip,
  CardActions,
} from '@mui/material';
import StoryPreview from '../components/StoryPreview';
import Layout from '../components/Layout';

const stories = [
  {
    title: 'Гласът на морето',
    label: 'Първа награда',
    extract:
      'Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите гънки на водата. Тогава го забелязах. Беше много рядък и изключително голям.',
    date: '12 10 2021',
    img: 'rapana.jpeg',
  },
  {
    title: 'Сладки за дядо Коледа',
    label: 'Първа награда',
    extract:
      'Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите гънки на водата. Тогава го забелязах. Беше много рядък и изключително голям.',
    date: '12 10 2021',
    img: 'cookies.jpeg',
  },
  {
    title: 'Приятелство дебне отвсякъде',
    label: 'Първа награда',
    extract:
      'Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите гънки на водата. Тогава го забелязах. Беше много рядък и изключително голям.',
    date: '12 10 2021',
    img: 'cougar.jpeg',
  },
];

function Stories() {
  return (
    <Layout isHome={false}>
      <>
        <Grid container item mb={5}>
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
              sx={{
                width: '60%',
                borderRadius: '40px',
                padding: '10px',
                cursor: 'pointer',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
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
                }}
              >
                <Chip
                  label="Ново"
                  sx={{
                    backgroundColor: '#EDE6FF',
                    color: '#8C78C4',
                    borderRadius: '8px',
                    marginBottom: 1,
                    marginTop: 1,
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
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: 'flex-end',
                  padding: '20px',
                }}
              >
                <Typography
                  align="right"
                  sx={{
                    color: '#8C78C4',
                    fontSize: '0.8rem',
                    wdith: '100%',
                  }}
                >
                  12.04.2023
                </Typography>
              </CardActions>
            </Box>
          </Card>
        </Grid>
        <Grid container item>
          {stories.map((story, i) => {
            return (
              <Grid key={i} p={1} item xs={4}>
                <StoryPreview story={story} />
              </Grid>
            );
          })}
        </Grid>
      </>
    </Layout>
  );
}

export default Stories;
