import Layout from '../components/Layout';
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function About() {
  return (
    <Layout isHome={false}>
      <Grid
        container
        direction="column"
        sx={{
          flexWrap: 'nowrap',
          background: 'white',
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
              marginRight: 25,
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
        <Grid container>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <EmojiEventsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={`Октомври 2022г. – 1-во място във 2-ра възрастова група, раздел „Проза“ на Петнадесетия национален ученически конкурс за литературно творчество и журналистика „Стоян Михайловски“ – Русе.`}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <EmojiEventsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={`Май 2021г. – 1-во място в 1-ва възрастова група в Националния конкурс  „Обичам те, море” с разказа Един вълшебен свят.`}
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default About;
