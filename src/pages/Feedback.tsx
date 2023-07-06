import Layout from '../components/Layout';
import { Grid } from '@mui/material';
import MoretoLogo from '../img/moreto-logo.png';
import GeoMilevLogo from '../img/geo_milev_logo.png';
import Feedback1 from '../img/moreto.png';
import Feedback2 from '../img/Feedback2.png';
import Feedback from '../components/Feedback';

const feedbacks = [
  {
    mediaLogo: MoretoLogo,
    title:
      'Как 8-годишно момиче от Варна започна да пише приказки и вдъхнови други след себе си?',
    content: `Кой казва, че децата не обичат да четат книги? 8-годишната
  Стефания Митева от Варна е поредното доказателство, че за
  таланта няма възрастова граница. Започва да чете на 4 години,
  по-късно да пише, а съвсем скоро ще издаде и своята първа книга
  с приказки, наречена "Осмото кралство".`,
    link: 'https://www.moreto.net/novini.php?n=405075&fbclid=IwAR3rzaOajfjYgHWf3G4cWepBOplL3eNmj5OBF8955Hac5WqlKsVfwVUqc1U',
    previewImg: Feedback1,
  },
  {
    mediaLogo: GeoMilevLogo,
    title: 'Талантлива и вдъхновяваща',
    content: `Стефания Митева от 3 „в“ клас пише детски приказки и съвсем скоро ще издаде своя книга. Тя е със заглавие  „Осмото кралство“.`,
    link: 'https://www.geomilev.info/news/talantliva-i-vdhnovyavasha.html?fbclid=IwAR0EitSlNaCa_Gynk_n5V_kVPJdYkElNUZY0b1Uf2YkM3pQnMOgxD8TO7F8',
    previewImg: Feedback2,
  },
];

function Feedbacks() {
  return (
    <Layout isHome={false}>
      <Grid>
        {feedbacks.map((feedback, i) => {
          return <Feedback key={i} feedback={feedback} />;
        })}
      </Grid>
    </Layout>
  );
}

export default Feedbacks;
