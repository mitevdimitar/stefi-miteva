import { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import { Avatar, Chip, Grid, Typography } from '@mui/material';
import { StoriesStore } from '../providers/Stories';
import { useParams } from 'react-router-dom';
//import { storage } from '../services/firebase';
//import { ref, getDownloadURL } from 'firebase/storage';

function Story() {
  const imageUrl = null;
  const { state, getCurrentStory } = useContext(StoriesStore);
  const { currentStory } = state;
  const params = useParams();
  console.log({ currentStory });

  useEffect(() => {
    if (!currentStory && params.slug) {
      getCurrentStory(params.slug);
    }
  }, [currentStory, params]);

  /* const [imageUrl, setImageUrl] = useState('');
  console.log({ imageUrl });

  useEffect(() => {
    const imageRef = ref(storage, `/story-images/globe.jpeg`);
    getDownloadURL(imageRef).then((url) => {
      console.log({ url });
      setImageUrl(url);
    });
  }, []); */

  return (
    <Layout isHome={false}>
      <Grid
        container
        sx={{
          background: 'white',
          height: 'fit-content',
          borderRadius: 5,
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
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Story preview"
                style={{ width: '-webkit-fill-available', borderRadius: 10 }}
                loading="lazy"
              />
            )}
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
