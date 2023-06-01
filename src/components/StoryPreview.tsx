import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Story } from '../utils/types';

interface StoryPreviewProps {
  story: Story;
}

export default function StoryPreview({ story }: StoryPreviewProps) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '40px' }} elevation={0}>
      <CardMedia
        sx={{
          height: 200,
          borderRadius: '40px',
          margin: '5px',
          cursor: 'pointer',
          transition: 'all .2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
        image={story.imageUrl}
        title="green iguana"
      />
      <CardContent>
        <Chip
          label="Трета награда"
          sx={{
            backgroundColor: '#D4FEF0',
            color: '#6EA895',
            borderRadius: '8px',
            marginBottom: 1,
          }}
        />
        <Typography
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: '#6b758a',
            },
          }}
          gutterBottom
          component="div"
          variant="h5"
          align="center"
        >
          {story.title}
        </Typography>
        <Typography
          variant="body2"
          align="justify"
          sx={{
            overflow: 'hidden',
          }}
        >
          Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите
          гънки на водата. Тогава го забелязах. Беше много рядък и изключително
          голям.
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
          12.04.2023
        </Typography>
      </CardActions>
    </Card>
  );
}
