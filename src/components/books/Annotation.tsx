import { Grid, Typography } from '@mui/material';
import { useMobile } from '../../hooks/useMobile';

function Annotation() {
  const isMobile = useMobile();
  return (
    <Grid
      container
      item
      sx={{
        background: 'white',
        height: 'fit-content',
        borderRadius: 5,
      }}
      p={3}
    >
      <Grid item xs={12} sm={6} md={8} pr={isMobile ? 0 : 3} mt={2}>
        <Typography align="justify">
          „Децата обичат да четат приказки. Но ето че има и такива, които
          измислят и пишат собствени истории. Въображението на Стефи ни води
          през осем кралства в едно фантастично приключение, в което загадките и
          опасностите се редуват с много забавни моменти и преодоляване на
          невиждани и нечувани препятствия. Дали момиченцето от приказката ще
          успее да намери вълшебните кристали, които търси? Ще успее ли да
          направи света по-добър и да победи с тях злото завинаги? Какви
          изпитания ще срещне по пътя си, какви приятели и врагове… ще разберете
          щом разлистите „Осмото кралство“. Потопете се в детското въображение
          на Стефи, за да пътувате през нейните кралства от вълшебства!“
        </Typography>
        <Typography mt={2}>Явор Цанев</Typography>
      </Grid>
      <Grid xs={12} sm={6} md={4} pt={isMobile ? 3 : 0} item>
        <img
          style={{ width: '100%' }}
          src={require('../../img/page10.jpeg')}
          alt="Page of book"
        />
      </Grid>
    </Grid>
  );
}

export default Annotation;
