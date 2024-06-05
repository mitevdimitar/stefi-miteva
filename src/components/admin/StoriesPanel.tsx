import { Stack } from '@mui/material';
import Layout from '../Layout';
import { useContext } from 'react';
import { StoriesStore } from '../../providers/Stories';
import StoryRow from './StoryRow';

function StoriesPanel() {
  const {
    state: { stories },
  } = useContext(StoriesStore);
  console.log({ stories });

  return (
    <Layout isHome={false}>
      <Stack gap={1} alignItems={'start'} width={'100%'}>
        {stories?.map((story, ind) => {
          return <StoryRow key={ind} story={story} />;
        })}
      </Stack>
    </Layout>
  );
}

export default StoriesPanel;
