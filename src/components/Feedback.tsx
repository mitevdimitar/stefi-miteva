import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { FeedbackType } from '../types';
import { useMobile } from '../hooks/useMobile';

interface FeedbackProps {
  feedback: FeedbackType;
}

function Feedback({ feedback }: FeedbackProps) {
  const { mediaLogo, title, content, link, previewImg } = feedback;
  const isMobile = useMobile();
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: isMobile ? 2 : 3,
        borderRadius: 4,
        cursor: 'pointer',
        marginTop: isMobile ? 4 : 0,
        marginBottom: isMobile ? 0 : 4,
      }}
      onClick={() => window.open(link)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: isMobile ? '100%' : '75%',
        }}
      >
        <Stack direction="row" alignItems={'center'} mb={1.5}>
          {!isMobile && <img src={mediaLogo} alt="media logo" height="30px" />}
          <CardHeader
            title={title}
            sx={{
              padding: 0,
              paddingBottom: 1,
              marginLeft: 2,
            }}
          />
        </Stack>
        {isMobile && (
          <CardMedia
            sx={{
              padding: '0 12px',
              maxHeight: '200',
              marginBottom: 2,
            }}
            component="img"
            image={previewImg}
            alt="Moreto article"
          />
        )}
        <CardContent sx={{ padding: 0, paddingBottom: '16px !important' }}>
          <Typography variant="body2" color="text.secondary" align="justify">
            {content}
          </Typography>
        </CardContent>
      </Box>
      {!isMobile && (
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
              maxHeight: '200',
            }}
            component="img"
            image={previewImg}
            alt="Moreto article"
          />
        </Box>
      )}
    </Card>
  );
}

export default Feedback;
