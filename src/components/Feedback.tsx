import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { FeedbackType } from '../utils/types';

interface FeedbackProps {
  feedback: FeedbackType;
}

function Feedback({ feedback }: FeedbackProps) {
  const { mediaLogo, title, content, link, previewImg } = feedback;
  return (
    <Card
      sx={{
        //minHeight: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 3,
        borderRadius: 4,
        cursor: 'pointer',
        marginTop: 4,
      }}
      onClick={() => window.open(link)}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
        <Stack direction="row" alignItems={'center'} mb={1.5}>
          <img src={mediaLogo} alt="media logo" height="30px" />
          <CardHeader
            title={title}
            sx={{
              padding: 0,
              paddingBottom: 1,
              marginLeft: 2,
            }}
          />
        </Stack>
        <CardContent sx={{ padding: 0, paddingBottom: '16px !important' }}>
          <Typography variant="body2" color="text.secondary" align="justify">
            {content}
          </Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          width: '20%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CardMedia
          sx={{
            padding: '0 12px',
            cursor: 'pointer',
            maxHeight: '200',
          }}
          component="img"
          image={previewImg}
          alt="Moreto article"
        />
      </Box>
    </Card>
  );
}

export default Feedback;
