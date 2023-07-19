import Layout from '../components/Layout';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from 'react-router-dom';
import YoutubeEmbed from '../components/YouTubeEmbed';
import { useMobile } from '../hooks/useMobile';

interface Award {
  text: string;
  linkName?: string;
  linkUrl?: string;
}

const awards = [
  {
    text: 'Юни 2023г.- 1-во място във 2-ра възрастова група, раздел „Проза“ в Националния конкурс „Аз и моите приятели – животните”, гр. София с разказа ',
    linkName: 'Горско изпитание',
    linkUrl: 'forest-adventure',
  },
  {
    text: 'Октомври 2022г. – 1-во място във 2-ра възрастова група, раздел „Проза“ на Петнадесетия национален ученически конкурс за литературно творчество и журналистика „Стоян Михайловски“ – Русе с разказа ',
    linkName: 'Приятелство дебне отвсякъде',
    linkUrl: 'friendship-is-everywhere',
  },
  {
    text: 'Май 2021г. – 1-во място в 1-ва възрастова група в Националния конкурс  „Обичам те, море” с разказа ',
    linkName: 'Един вълшебен свят',
    linkUrl: 'one-magic-world',
  },
  {
    text: 'Април 2021г. – 1-во място в 1-ва възрастова група в Националния конкурс „Пролетта събужда отново за живот света”, организиран от НЧ „Добри Войников – 1956”, гр. Шумен, с „Есе за природата”',
  },
  {
    text: 'Март 2021г. –  2-ро място за двата сонетни венци на възпитаниците на ЛК „Касталия”, сред които е и Стефи за участието си в 17-ти Международен конкурс за поезия и театър „Castello di Duino”, гр. Триест, Италия, на тема  „Там, където се ражда музиката”',
  },
  {
    text: 'Декември 2020г. – 3-то място в раздел „Поезия” в Националния конкурс за православна поезия и проза „Рождеството на Спасителя” със стихотворението „Коледни мечти”',
  },
  {
    text: 'Ноември 2020г. – 2-ра награда в Националния литературен конкурс  „Морето, морето, морето…“ с разказа ',
    linkName: 'Тайнственият свят на русалките',
    linkUrl: 'mysterious-mermaid-world',
  },
  {
    text: 'Май 2020г. – 1-ва награда в 1-ва възрастова група в Националния литературен конкурс „Неразказаните истории на един ловец на приключения“, съпътстващ ежегодния Национален фестивал на детската книга в гр. Сливен с  разказа ',
    linkName: 'Моите опасни приключения: Килерът на отмъщенията',
    linkUrl: 'my-dangerous-adventures1',
  },
];

function About() {
  const isMobile = useMobile();

  const renderAward = (award: Award) => {
    return (
      <Box>
        <Typography>
          {award.text}
          <span>
            {award.linkName && (
              <Link
                style={{
                  textDecoration: 'none',
                  color: '#568DAD',
                }}
                to={`/stories/${award.linkUrl}`}
              >
                {award.linkName}
              </Link>
            )}
          </span>
        </Typography>
      </Box>
    );
  };

  return (
    <Layout isHome={false}>
      <Grid
        container
        direction="column"
        sx={{
          flexWrap: 'nowrap',
          height: 'fit-content',
          borderRadius: 5,
        }}
        p={3}
      >
        <Typography component="div" align="justify">
          <img
            src={require('../img/Stefi.jpg')}
            alt="Pic of Stefi"
            style={{
              float: 'left',
              borderRadius: 10,
              marginRight: isMobile ? 0 : 25,
              marginBottom: isMobile ? 15 : 0,
              maxWidth: '100%',
            }}
          />
          Стефания Митева е родена през 2010 г. в град Варна. Любовта ѝ към
          книгите датира от най-ранна детска възраст. Първата си приказка
          написва, когато е на 6 г. в предучилищна група на детската градина.
          Оттогава насам е написала над 50 детски приказки, а повечето от тях е
          оформила като детски книжки с авторски илюстрации. През 2019 г. от
          печат излиза първата ѝ книга Осмото кралство, по една от любимите
          приказки на Стефи, която тя написва на 7 годишна възраст. Илюстрациите
          в книгата са дело на художници от Македония, Украйна, Индия и
          Австралия. Книгата е номинирана в категория „Изследователи“ за
          Национална награда „Бисерче вълшебно“ 2020. На 07.10.2020, в
          книжарница PiBooks – Варна, Стефи чете откъс от книгата „Аврам,
          Богдан, вода газят. АзБучен роман“, превръщайки се в най-младия
          участник в Международната инициатива „Нощ на литературата“. От м.
          Септември 2020г. Стефи е член на ЛК „Касталия“ към ЦПЛР – Общински
          детски комплекс, гр. Варна
        </Typography>
        <Grid container mb={2}>
          <List>
            {awards.map((award, i) => {
              return (
                <ListItem key={i} disablePadding>
                  <ListItemIcon sx={{ minWidth: isMobile ? 36 : 56 }}>
                    <EmojiEventsIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={renderAward(award)} />
                </ListItem>
              );
            })}
          </List>
        </Grid>
        <YoutubeEmbed embedId="r5hp0BdPeuQ" />
      </Grid>
    </Layout>
  );
}
export default About;
