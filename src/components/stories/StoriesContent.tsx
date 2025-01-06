import { Grid } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import StoryPreview from './StoryPreview';
import MainStoryPreview from './MainStoryPreview';
import { useStories } from '../../providers/StoriesProvider';
import Loader from '../Loader';

function StoriesContent() {
  const { stories, fullyFetched, loading, onLoadMore } = useStories();
  const previewStory = stories ? stories[0] : null;
  const remainingPageStories = stories ? stories.slice(1) : [];

  return (
    <>
      {loading && !stories ? (
        <Loader />
      ) : (
        <>
          <Grid container item mb={5}>
            <MainStoryPreview story={previewStory} />
          </Grid>
          <Grid container item>
            {remainingPageStories.map((story, i) => {
              return (
                <Grid key={i} p={1} item xs={12} sm={6} md={4} xl={3}>
                  <StoryPreview story={story} />
                </Grid>
              );
            })}
          </Grid>
          {!fullyFetched && (
            <Grid container justifyContent="center" my={3}>
              <LoadingButton
                loading={loading}
                variant="contained"
                onClick={onLoadMore}
              >
                Покажи още приказки
              </LoadingButton>
            </Grid>
          )}
        </>
      )}
    </>
  );
}

export default StoriesContent;
