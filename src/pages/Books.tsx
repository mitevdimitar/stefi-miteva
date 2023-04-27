import Layout from '../components/Layout';
import { Divider, Grid, Rating, Typography } from '@mui/material';

function Books() {
  return (
    <Layout isHome={false}>
      <Grid container>
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
          <Grid item>
            <img
              src={require('../img/cover_second.jpeg')}
              alt="Cover second edition"
            />
          </Grid>
          <Grid item ml={3}>
            <Grid container>
              <Rating name="read-only" value={5} readOnly sx={{ mr: 2 }} />
              <Grid sx={{ color: '#483222' }} mr={3}>
                5.00 (10 ratings)
              </Grid>
              <img
                height="25px"
                src={require('../img/gr_logo.png')}
                alt="goodreads log"
              />
            </Grid>
            <Grid
              sx={{
                color: '#8b8b8b',
              }}
              mt={2}
            >
              <Typography align="justify">
                „Осмото кралство“ е неподправена детска история, в която се
                разказва за доброто, истинското приятелство и чистия
                приключенски дух, така характерен за децата. Текстът е прекрасно
                допълнен от красивите илюстрации на художници от Македония,
                Австралия, Украйна и Индия.
              </Typography>
            </Grid>
            <Grid
              container
              sx={{
                color: '#8b8b8b',
              }}
              mt={1}
            >
              <Grid item xs={10}>
                <Typography align="justify">
                  Книгата е номинирана в категория „Изследователи“ за Национална
                  награда „Бисерче вълшебно“ 2020.
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={2}
                alignItems="center"
                justifyContent="flex-end"
                mt="-15px"
              >
                <img
                  height="80px"
                  src={require('../img/logo_biserche.png')}
                  alt="logo biserche"
                />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                fontSize: '14px',
              }}
            >
              <Grid container item>
                <Grid item xs={3}>
                  Автор:
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{
                    color: '#8b8b8b',
                  }}
                >
                  Стефания Митева
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={3}>
                  Редактор:
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{
                    color: '#8b8b8b',
                  }}
                >
                  Васил Койнарев
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider
          sx={{
            width: '100%',
            padding: 5,
            '& span': {
              transform: 'translateY(10px)',
            },
          }}
        >
          АНОТАЦИЯ
        </Divider>
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
          <Grid
            sx={{
              color: '#8b8b8b',
            }}
            mt={2}
            mr={5}
          >
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
        <Divider
          sx={{
            width: '100%',
            padding: 5,
            '& span': {
              transform: 'translateY(10px)',
            },
          }}
        >
          ЧИТАТЕЛСКИ МНЕНИЯ
        </Divider>
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
          Мнения
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Books;
