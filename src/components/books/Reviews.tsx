import { Grid } from '@mui/material';
import ReviewCard from './ReviewCard';
import Review1 from '../../img/Blog1.png';

const reviews = [
  {
    title: 'Книжни криле',
    link: 'https://knijnikrile.wordpress.com/2021/01/29/%d0%be%d1%81%d0%bc%d0%be%d1%82%d0%be-%d0%ba%d1%80%d0%b0%d0%bb%d1%81%d1%82%d0%b2%d0%be-%d0%be%d1%82-%d1%81%d1%82%d0%b5%d1%84%d0%b0%d0%bd%d0%b8%d1%8f-%d0%bc%d0%b8%d1%82%d0%b5%d0%b2/',
    img: Review1,
    description: `Стефания Митева е едва на десет, но вече има зад гърба си издадена
        книга. Нещо повече – приказната история „Осмото кралство” се ражда
        докато Стефи е още на седем! Впечатляващо, нали? Нека разлистим заедно
        дебютната приказка на младата писателка.`,
  },
];

function Reviews() {
  return (
    <Grid
      container
      item
      direction="column"
      sx={{
        flexWrap: 'nowrap',
        background: 'white',
        height: 'fit-content',
        borderRadius: 5,
      }}
      p={3}
    >
      {reviews.map((review, i) => {
        return <ReviewCard key={i} review={review} />;
      })}
    </Grid>
  );
}

export default Reviews;
