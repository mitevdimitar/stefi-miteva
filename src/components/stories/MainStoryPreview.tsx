import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardActions,
  useTheme,
} from '@mui/material';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { Story } from '../../types';
import { convertDateToDotFormat } from '../../utils/date';
import StoryChip from './StoryChip';
import { useStories } from '../../providers/StoriesProvider';
import { useMobile } from '../../hooks/useMobile';

interface MainStoryPreviewProps {
  story: Story | null;
}

function MainStoryPreview({ story }: MainStoryPreviewProps) {
  const theme = useTheme();
  const { setCurrentStory } = useStories();
  const navigate = useNavigate();
  const isMobile = useMobile();

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
        backgroundColor: '#A4AF9F',
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.01)',
        },
        [theme.breakpoints.down('sm')]: {
          maxHeight: 'none',
          flexDirection: 'column',
        },
      }}
      elevation={0}
      onClick={onStoryClick}
    >
      <CardMedia
        component="img"
        sx={{
          width: '60%',
          borderRadius: '40px',
          padding: '10px',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
          [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
        }}
        image={story.imageUrl}
        alt={story.title}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: isMobile ? '100%' : '40%',
          [theme.breakpoints.up('md')]: {
            width: '50%',
          },
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
          <StoryChip label="Ново" isPreview={true} />
          <Typography component="div" variant="h4" align="center" mb={1}>
            {story.title}
          </Typography>
          <Typography
            component="div"
            align="justify"
            sx={{
              overflow: 'hidden',
              color: '#3c424f',
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
              color: 'white',
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
