import { useContext, useEffect } from 'react';
import { Avatar, Box, Grid, Typography, useTheme } from '@mui/material';
import { StoriesStore } from '../providers/StoriesProvider';
import { useParams } from 'react-router-dom';
import StoryChip from '../components/stories/StoryChip';
import { convertDateToDotFormat } from '../utils/date';
import parse from 'html-react-parser';
import Loader from '../components/Loader';
import NotFund from '../img/not_found.png';

function Story() {
  const { state, getCurrentStory } = useContext(StoriesStore);
  const { currentStory, error } = state;
  const params = useParams();
  const theme = useTheme();
  const dateCreated = convertDateToDotFormat(
    currentStory ? currentStory.date_created : ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!currentStory && params.slug) {
      getCurrentStory(params.slug);
    }
  }, [currentStory, getCurrentStory, params]);

  if (error) {
    return (
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Typography variant="h5" color="#8b8b8b">
          {error}
        </Typography>
        <img src={NotFund} alt="media logo" />
      </Grid>
    );
  }

  return (
    <>
      {currentStory ? (
        <Grid
          container
          sx={{
            background: 'white',
            height: 'fit-content',
            borderRadius: 5,
          }}
          p={3}
          maxWidth="1360px"
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={currentStory?.imageUrl ? 6 : 12}
              lg={currentStory?.imageUrl ? 5 : 12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <Box>
                {currentStory.tags.map((tag, i) => {
                  return (
                    <StoryChip
                      key={i}
                      label={tag}
                      styles={{
                        [theme.breakpoints.up('lg')]: {
                          position: 'absolute',
                          top: 0,
                        },
                      }}
                    />
                  );
                })}
              </Box>
              <Typography
                align="center"
                mb={1}
                variant="h2"
                sx={{ fontWeight: '600' }}
              >
                {currentStory.title}
              </Typography>
              <Grid container alignItems="center" justifyContent="center">
                <Avatar alt="Stefi" src={require('../img/stefi_avatar.jpg')} />
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
                {dateCreated}
              </Typography>
            </Grid>
            {currentStory?.imageUrl && (
              <Grid item xs={12} md={6} lg={7}>
                <img
                  width="100%"
                  src={currentStory.imageUrl}
                  alt="Story preview"
                  style={{
                    width: '-webkit-fill-available',
                    borderRadius: 10,
                    maxWidth: '100%',
                  }}
                />
              </Grid>
            )}
          </Grid>
          {/* Handle category mapping */}
          {/* <Grid container mt={5}>
            <Chip variant="outlined" label="Мистериозен разказ" />
          </Grid> */}
          <Grid container mt={2}>
            <Typography align="justify">
              {parse(currentStory.content)}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Story;
