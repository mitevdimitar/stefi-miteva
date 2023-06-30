import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BookReview } from '../../utils/types';

interface ReviewCardProps {
  review: BookReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card sx={{ width: '33%' }}>
      <CardHeader sx={{ textAlign: 'center' }} title={review.title} />
      <CardMedia
        sx={{ padding: '0 12px', cursor: 'pointer' }}
        component="img"
        height="150"
        image={review.img}
        alt={review.title}
        onClick={() => window.open(review.link)}
      />
      <CardContent sx={{ padding: 1.5 }}>
        <Typography variant="body2" color="text.secondary" align="justify">
          {review.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
