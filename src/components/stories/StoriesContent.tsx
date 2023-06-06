import { Grid, Pagination } from '@mui/material';
import StoryPreview from '../StoryPreview';
import Layout from '../Layout';
import React, { useContext } from 'react';
import MainStoryPreview from '../MainStoryPreview';
import { StoriesStore } from '../../providers/Stories';

function StoriesContent() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { state } = useContext(StoriesStore);
  const { stories } = state;

  console.log({ stories });

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
        <Grid container justifyContent="center" my={3}>
          <Pagination
            count={5}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </>
    </Layout>
  );
}

export default StoriesContent;
