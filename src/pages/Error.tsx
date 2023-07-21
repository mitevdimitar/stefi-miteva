import { Stack, Typography } from '@mui/material';
import Layout from '../components/Layout';

function Error() {
  return (
    <Layout isHome={false}>
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="h3">
          Хмм 🤔, изглежда няма такава страница!
        </Typography>
      </Stack>
    </Layout>
  );
}

export default Error;
