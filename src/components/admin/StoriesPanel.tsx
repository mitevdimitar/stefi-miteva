import { Stack } from '@mui/material';
import { useContext } from 'react';
import { StoriesStore } from '../../providers/StoriesProvider';
import StoryRow from './StoryRow';

function StoriesPanel() {
  const {
    state: { stories },
  } = useContext(StoriesStore);

  return (
    <Stack gap={1} alignItems={'start'} width={'100%'}>
      {stories?.map((story, ind) => {
        return <StoryRow key={ind} story={story} />;
      })}
    </Stack>
  );
}

export default StoriesPanel;
