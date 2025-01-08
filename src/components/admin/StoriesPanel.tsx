import { Box, Button, Stack } from '@mui/material';
import { useStories } from '../../providers/StoriesProvider';
import StoryRow from './StoryRow';
import { useNavigate } from 'react-router-dom';

function StoriesPanel() {
  const { stories } = useStories();
  const navigate = useNavigate();

  const onAddStory = () => {
    navigate(`/stories-panel/create`);
  };

  return (
    <Stack gap={1} alignItems={'start'} width={'100%'}>
      <Box mb={2}>
        <Button variant="contained" onClick={onAddStory}>
          Добави приказка
        </Button>
      </Box>
      {stories?.map((story, ind) => {
        return <StoryRow key={ind} story={story} />;
      })}
    </Stack>
  );
}

export default StoriesPanel;
