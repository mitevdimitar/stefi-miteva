import { Grid, useTheme, IconButton, Box } from '@mui/material';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { Story } from '../../types';
import { useStories } from '../../providers/StoriesProvider';

type StoryRowProps = {
  story: Story;
};

function StoryRow({ story }: StoryRowProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { setCurrentStory } = useStories();

  const onEditClick = () => {
    setCurrentStory(story);
    navigate(`/stories-panel/edit/${story.slug}`);
  };

  return (
    <Grid
      container
      border={'1px solid grey'}
      borderRadius={theme.spacing(1)}
      padding={theme.spacing(1.5)}
      alignItems="center"
      justifyContent="space-between"
    >
      {story.title}
      <Box display={'flex'} gap={theme.spacing(1)}>
        <IconButton>
          <ModeEditOutlineOutlinedIcon onClick={onEditClick} />
        </IconButton>
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Grid>
  );
}

export default StoryRow;
