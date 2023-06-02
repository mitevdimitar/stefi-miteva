import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Chip,
  CardActions,
  useTheme,
} from '@mui/material';
import { Story } from '../utils/types';

interface MainStoryPreviewProps {
  story: Story;
}

function MainStoryPreview({ story }: MainStoryPreviewProps) {
  const theme = useTheme();

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
          <Chip
            label="Ново"
            sx={{
              backgroundColor: '#EDE6FF',
              color: '#8C78C4',
              borderRadius: '8px',
              marginBottom: 1,
              marginTop: 1,
            }}
          />
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
          >
            Капан за надежда
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
            Колата прелиташе по неравния асфалт, като оставяше прах след себе
            си, който беше раздухван от хладния повей на вятъра. Около нея се
            извисяваха гордо върховете на ели и смърчове, оставящи лека сянка по
            преминаващия автомобил.
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
      </Box>
    </Card>
  );
}

export default MainStoryPreview;
