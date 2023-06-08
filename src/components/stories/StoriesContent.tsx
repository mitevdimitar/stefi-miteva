import { Button, Grid } from '@mui/material';
import StoryPreview from './StoryPreview';
import Layout from '../Layout';
import { useContext } from 'react';
import MainStoryPreview from './MainStoryPreview';
import { StoriesStore } from '../../providers/Stories';

function StoriesContent() {
  const { state, onLoadMore } = useContext(StoriesStore);
  const { stories, fullyFetched } = state;
  const previewStory = stories ? stories[0] : null;
  const remainingPageStories = stories ? stories.slice(1) : [];

  return (
    <Layout isHome={false}>
      <>
        <Grid container item mb={5}>
          <MainStoryPreview story={previewStory} />
        </Grid>
        <Grid container item>
          {remainingPageStories.map((story, i) => {
            return (
              <Grid key={i} p={1} item xs={12} sm={6} md={4}>
                <StoryPreview story={story} />
              </Grid>
            );
          })}
        </Grid>
        {!fullyFetched && (
          <Grid container justifyContent="center" my={3}>
            <Button variant="contained" onClick={onLoadMore}>
              Покажи ми още приказки
            </Button>
          </Grid>
        )}
      </>
    </Layout>
  );
}

export default StoriesContent;
