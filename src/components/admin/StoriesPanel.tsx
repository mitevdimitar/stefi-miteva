import { Stack } from '@mui/material';
import { useStories } from '../../providers/StoriesProvider';
import StoryRow from './StoryRow';

function StoriesPanel() {
  const {
    state: { stories },
  } = useStories();

  return (
    <Stack gap={1} alignItems={'start'} width={'100%'}>
      {stories?.map((story, ind) => {
        return <StoryRow key={ind} story={story} />;
      })}
    </Stack>
  );
}

export default StoriesPanel;
