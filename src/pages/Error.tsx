import { Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';

function Error() {
  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography variant="h3">
        Хмм 🤔, изглежда няма такава страница!
      </Typography>
      {/* Set the canonical URL to your preferred version */}
      <Helmet>
        <link rel="canonical" href="https://stefimiteva.com/404" />
      </Helmet>
    </Stack>
  );
}

export default Error;
