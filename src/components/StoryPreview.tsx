import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function StoryPreview({ story }: any) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '40px' }} elevation={0}>
      <CardMedia
        sx={{ height: 200, borderRadius: '40px' }}
        image={require(`../img/${story.img}`)}
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
          gutterBottom
          component="div"
          variant="h5"
          align="center"
          sx={{
            fontFamily: "'Roboto Slab', serif",
            color: '#3c424f',
          }}
        >
          {story.title}
        </Typography>
        <Typography
          variant="body2"
          align="justify"
          sx={{
            color: '#8b8b8b',
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
