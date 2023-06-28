import Layout from '../components/Layout';
import { Divider, Grid, Rating, Typography } from '@mui/material';
import OpinionCard from '../components/OpinionCard';
import ReviewCard from '../components/ReviewCard';
import TitledDivider from '../components/TitledDivider';
import BookPreview from '../components/books/BookPreview';

const opinions = [
  {
    author: 'Ваня и Иво Беевски',
    initials: 'VB',
    text: `Прекрасна детска книжка с много моменти за размисъл и за възрастните! Нора е част от щастливо семейство, но независимо от това тя търси кристали, които да направят света по-добър. Тя излиза от уюта на топлия и изпълнен с любов дом и се впуска в търсене на щастие за другите. И не не е сладникаво, по-скоро те кара да се замислиш ти днес какво направи, за да помогнеш на някой друг…Революционен момент е и благословията на майка й, когато разбира, къде се е запътила дъщеричката й. – „Добре, скъпа, желая ти късмет!“. Можем много да се поучим ние родителите.
        Препятствията пред Нора са описани така майсторски, че те оживяват пред вас. И във всяко едно намирате по нещо непреходно в героинята, нещо, благодарение на което светът още съществува, в постоянния му стремеж да е едно по-добро място!
        Нямам търпение за следващото произведение на Стефи!`,
  },
  {
    author: 'Диана Рашкова',
    initials: 'DR',
    text: 'Интересна и увлекателна история ❤ Прекрасен подарък за всяко дете 🥰',
  },
];

function Books() {
  return (
    <Layout isHome={false}>
      <Grid container>
        <BookPreview />
        <TitledDivider title="АНОТАЦИЯ" />
        <Grid
          container
          item
          sx={{
            flexWrap: 'nowrap',
            background: 'white',
            height: 'fit-content',
            borderRadius: 5,
          }}
          p={3}
        >
          <Grid mt={2} mr={5}>
            <Typography align="justify">
              „Децата обичат да четат приказки. Но ето че има и такива, които
              измислят и пишат собствени истории. Въображението на Стефи ни води
              през осем кралства в едно фантастично приключение, в което
              загадките и опасностите се редуват с много забавни моменти и
              преодоляване на невиждани и нечувани препятствия. Дали момиченцето
              от приказката ще успее да намери вълшебните кристали, които търси?
              Ще успее ли да направи света по-добър и да победи с тях злото
              завинаги? Какви изпитания ще срещне по пътя си, какви приятели и
              врагове… ще разберете щом разлистите „Осмото кралство“. Потопете
              се в детското въображение на Стефи, за да пътувате през нейните
              кралства от вълшебства!“
            </Typography>
            <Typography mt={2}>Явор Цанев</Typography>
          </Grid>
          <Grid item>
            <img src={require('../img/page10.jpeg')} alt="Page of book" />
          </Grid>
        </Grid>
        <TitledDivider title="ЧИТАТЕЛСКИ МНЕНИЯ" />
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
          {opinions.map((opinion, i) => {
            return <OpinionCard key={i} opinion={opinion} />;
          })}
        </Grid>
        <TitledDivider title="РЕВЮТА" />
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
          <ReviewCard />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Books;
