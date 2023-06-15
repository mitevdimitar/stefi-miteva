import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardActions,
  useTheme,
} from '@mui/material';
import { Story } from '../../utils/types';
import parse from 'html-react-parser';
import { convertDateToDotFormat } from '../../utils/date';
import StoryChip from './StoryChip';
import { useContext } from 'react';
import { StoriesStore } from '../../providers/Stories';
import { useNavigate } from 'react-router-dom';

interface MainStoryPreviewProps {
  story: Story | null;
}

function MainStoryPreview({ story }: MainStoryPreviewProps) {
  const theme = useTheme();
  const { setCurrentStory } = useContext(StoriesStore);
  const navigate = useNavigate();

  if (!story) return null;

  const dateCreated = convertDateToDotFormat(story.date_created);

  const onStoryClick = () => {
    setCurrentStory(story);
    navigate(`/stories/${story.slug}`);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        width: '100%',
        maxHeight: 320,
        borderRadius: '40px',
        [theme.breakpoints.down('sm')]: {
          maxHeight: 'none',
          flexDirection: 'column',
        },
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        sx={{
          width: '60%',
          borderRadius: '40px',
          padding: '10px',
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        }}
        image={story.imageUrl}
        alt={story.title}
        onClick={onStoryClick}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent
          sx={{
            flex: '1 0 auto',
            padding: '6px 26px',
            maxHeight: '80%',
            overflow: 'hidden',
          }}
        >
          <StoryChip label="Ново" />
          <Typography
            sx={{
              cursor: 'pointer',
              '&:hover': {
                color: '#6b758a',
              },
            }}
            component="div"
            variant="h4"
            align="center"
            mb={1}
            onClick={onStoryClick}
          >
            {story.title}
          </Typography>
          <Typography
            component="div"
            align="justify"
            sx={{
              overflow: 'hidden',
              //whiteSpace: 'nowrap',
              mb: 2,
            }}
          >
            {parse(story.excerpt)}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'flex-end',
            padding: '20px',
          }}
        >
          <Typography
            align="right"
            sx={{
              color: '#8C78C4',
              fontSize: '0.8rem',
              wdith: '100%',
            }}
          >
            {dateCreated}
          </Typography>
        </CardActions>
      </Box>
    </Card>
  );
}

export default MainStoryPreview;
