import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import { Story } from '../../types';
import { Box, styled, useTheme } from '@mui/material';
//import { convertDateToDotFormat } from '../../utils/date';
import storyPreview from '../../img/StoryPreview.jpg';
import StoryChip from './StoryChip';
import { useStories } from '../../providers/StoriesProvider';

interface StoryPreviewProps {
  story: Story;
}

const ExcerptContainer = styled(Box)({
  fontSize: '0.875rem',
  lineHeight: '1.43',
  color: '#8b8b8b',
  textAlign: 'justify',
  overflow: 'hidden',
});

export default function StoryPreview({ story }: StoryPreviewProps) {
  const theme = useTheme();
  const { setCurrentStory } = useStories();
  const navigate = useNavigate();

  //const dateCreated = convertDateToDotFormat(story.date_created);

  const onStoryClick = () => {
    setCurrentStory(story);
    navigate(`/stories/${story.slug}`);
  };

  return (
    <Card
      sx={{
        borderRadius: '40px',
        background: 'whitesmoke',
        [theme.breakpoints.down('sm')]: {
          maxWidth: '100%',
        },
        cursor: 'pointer',
        transition: 'all .2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
      elevation={0}
      onClick={onStoryClick}
    >
      <CardMedia
        sx={{
          height: 200,
          borderRadius: '40px',
          margin: '5px',
        }}
        title={story.title}
        image={story.imageUrl ? story.imageUrl : storyPreview}
      />
      <CardContent>
        {story.tags.map((tag, i) => {
          return <StoryChip key={i} label={tag} />;
        })}
        <Typography gutterBottom component="div" variant="h5" align="center">
          {story.title}
        </Typography>
        <ExcerptContainer>{parse(story.excerpt)}</ExcerptContainer>
      </CardContent>
      {/* <CardActions
        sx={{
          justifyContent: 'flex-end',
          padding: '20px',
          paddingTop: 0,
        }}
      >
        <Typography
          align="right"
          sx={{
            color: '#8C78C4',
            fontSize: '0.8rem',
            width: '100%',
          }}
        >
          {dateCreated}
        </Typography>
      </CardActions> */}
    </Card>
  );
}
