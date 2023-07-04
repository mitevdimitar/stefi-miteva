import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { BookReview } from '../../utils/types';
import { Avatar, Grid, Stack } from '@mui/material';

interface ReviewCardProps {
  review: BookReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3} p={1}>
      <Card sx={{ height: '100%', borderRadius: 5 }}>
        <CardHeader
          sx={{
            textAlign: 'center',
            '.MuiCardHeader-subheader': {
              fontSize: '0.9rem',
              fontWeight: '500',
            },
          }}
          title={review.title}
          subheader={review.subTitle}
        />
        {review.link ? (
          <CardMedia
            sx={{ padding: '0 12px', cursor: 'pointer' }}
            component="img"
            height="150"
            image={review.img}
            alt={review.title}
            onClick={() => window.open(review.link || '')}
          />
        ) : (
          <Stack justifyContent={'center'} alignItems={'center'}>
            <Avatar
              alt={review.title}
              src={review.img}
              sx={{ width: 100, height: 100 }}
            />
          </Stack>
        )}
        <CardContent sx={{ padding: 1.5 }}>
          <Typography variant="body2" color="text.secondary" align="justify">
            {review.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
