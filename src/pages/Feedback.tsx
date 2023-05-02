import Layout from '../components/Layout';
import {
  Card,
  Grid,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

function Feedback() {
  return (
    <Layout isHome={false}>
      <Grid>
        <Card
          sx={{
            width: '100%',
            minHeight: 250,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            position: 'relative',
            padding: 3,
            borderRadius: 4,
          }}
        >
          <img
            src={require('../img/moreto-logo.png')}
            alt="moreto logo"
            height="30px"
            style={{ position: 'absolute', top: 15, left: 40 }}
          />
          <Box sx={{ width: '75%' }}>
            <CardHeader
              title="Как 8-годишно момиче от Варна започна да пише приказки и вдъхнови други след себе си?
"
              sx={{
                padding: 0,
                paddingBottom: 1,
              }}
            />
            <CardContent sx={{ padding: 0, paddingBottom: '16px !important' }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="justify"
              >
                Кой казва, че децата не обичат да четат книги? 8-годишната
                Стефания Митева от Варна е поредното доказателство, че за
                таланта няма възрастова граница. Започва да чете на 4 години,
                по-късно да пише, а съвсем скоро ще издаде и своята първа книга
                с приказки, наречена "Осмото кралство".
              </Typography>
            </CardContent>
          </Box>
          <Box
            pb={2}
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
              image={require('../img/moreto.png')}
              alt="Moreto article"
              onClick={() =>
                window.open(
                  'https://www.moreto.net/novini.php?n=405075&fbclid=IwAR3rzaOajfjYgHWf3G4cWepBOplL3eNmj5OBF8955Hac5WqlKsVfwVUqc1U'
                )
              }
            />
          </Box>
        </Card>
      </Grid>
    </Layout>
  );
}

export default Feedback;
