import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface Opinion {
  text: string;
  author: string;
  initials: string;
}

interface OpinionCardProps {
  opinion: Opinion;
}

export default function OpinionCard({ opinion }: OpinionCardProps) {
  return (
    <Card sx={{ width: '100%', marginBottom: 3, borderRadius: 5 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {opinion.text}
        </Typography>
      </CardContent>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: '#6695AA', width: 35, height: 35, fontSize: '1rem' }}
            aria-label="recipe"
          >
            {opinion.initials}
          </Avatar>
        }
        title={opinion.author}
      />
    </Card>
  );
}
