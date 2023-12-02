import Layout from '../components/Layout';
import { Grid } from '@mui/material';
import MoretoLogo from '../img/moreto-logo.png';
import GeoMilevLogo from '../img/geo_milev_logo.png';
import BntLogo from '../img/BNT2_logo.png';
import BtvLogo from '../img/BTV_logo.svg';
import BnrLogo from '../img/bnr_logo.png';
import NahodkiLogo from '../img/nahodki_logo.png';
import Feedback1 from '../img/moreto.png';
import Feedback2 from '../img/Feedback2.png';
import Feedback3 from '../img/Feedback3.png';
import Feedback4 from '../img/Feedback4.png';
import Feedback5 from '../img/Feedback5.png';
import Feedback6 from '../img/Feedback6.png';
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
  {
    mediaLogo: BntLogo,
    title: 'Стефи гостува в предаването Знание БГ',
    content: `Стефи и нейните приказки са част от предаването Знание БГ 
    по БНТ 2 в епизода "Съвременното будителство", посветен на Деня на народните будители`,
    link: 'https://www.youtube.com/watch?v=atXksDa_NEM',
    previewImg: Feedback3,
  },
  {
    mediaLogo: BtvLogo,
    title: '9-годишната писателка Стефания',
    content: `Когато е на 6 години, Стефания създава първата си приказка - "Добрата Баба Яга". 
    Тя имала две мишлета, но в къщата влязла котка. Вместо да я изгони, Баба Яга я приютила. 
    И оттогава Стефания не спира да пише. 
    Пише за приключенията на безстрашни деца и смели животни, на които се случват фантастични и интересни неща.`,
    link: 'https://www.btv.bg/shows/predi-obed/videos/9-godishnata-pisatelka-stefanija.html#',
    previewImg: Feedback4,
  },
  {
    mediaLogo: BnrLogo,
    title: 'Стефания Митева – от приказките до „Осмото кралство“',
    content: `Гост в ДЕТСКОТО.БНР е Стефания Митева. Тя е само на девет години и обича да пише приказки. 
    Стефи издаде и първата си книга – „Осмото кралство“, която получи номинация в Осмото издание на Националния конкурс за най-добра детска книга „Бисерче вълшебно“. 
    Със Стефания Митева разговаря Ани Маринова.`,
    link: 'https://detskotobnr.binar.bg/16416/stefaniya-miteva-ot-prikazkite-do-osmoto-kralstvo',
    previewImg: Feedback5,
  },
  {
    mediaLogo: NahodkiLogo,
    title: 'Десетгодишна писателка черпи идеи от сънищата',
    content: `Стефания Митева от Варна е едва десетгодишна, но вече е издала своята първа книга „Осмото кралство”, в която главната героиня Нора
    преминава през осем кралства, за да намери три
    вълшебни кристала, които могат да направят
    света по-добър.`,
    link: 'https://odk-varna.com/wp-content/uploads/2020/11/br-9-2.pdf',
    previewImg: Feedback6,
  },
];

const reversedFeedbacks = feedbacks.reverse();

function Feedbacks() {
  return (
    <Layout isHome={false}>
      <Grid>
        {reversedFeedbacks.map((feedback, i) => {
          return <Feedback key={i} feedback={feedback} />;
        })}
      </Grid>
    </Layout>
  );
}

export default Feedbacks;
