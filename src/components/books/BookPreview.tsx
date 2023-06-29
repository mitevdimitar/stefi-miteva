import { Grid, Rating, Typography } from '@mui/material';

const bookInfo = [
  {
    title: 'Автор',
    description: 'Стефания Митева',
  },
  {
    title: 'Редактор',
    description: 'Васил Койнарев',
  },
  {
    title: 'Илюстрации',
    description:
      'Христина Мазнеска (Македония), Зара Афзал (Австралия), Аян Саха (Индия), Максим Зиненко (Украйна)',
  },
  {
    title: 'Предпечат и оформление',
    description: 'Христина Мазнеска',
  },
  {
    title: 'Анотация',
    description: 'Явор Цанев',
  },
  {
    title: 'Корица',
    description: 'Мека',
  },
  {
    title: 'Тяло',
    description:
      '40 цветни, изцяло илюстровани страници отпечатани върху плътна хартия',
  },
  {
    title: 'Размер',
    description: '165 x 235 мм',
  },
];

function BookPreview() {
  return (
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
          src={require('../../img/cover_second.jpeg')}
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
            src={require('../../img/gr_logo.png')}
            alt="goodreads log"
          />
        </Grid>
        <Grid mt={2}>
          <Typography align="justify">
            „Осмото кралство“ е неподправена детска история, в която се разказва
            за доброто, истинското приятелство и чистия приключенски дух, така
            характерен за децата. Текстът е прекрасно допълнен от красивите
            илюстрации на художници от Македония, Австралия, Украйна и Индия.
          </Typography>
        </Grid>
        <Grid container mt={1}>
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
              src={require('../../img/logo_biserche.png')}
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
          {bookInfo.map((row, index) => {
            return (
              <Grid container item key={index}>
                <Grid item xs={12} sm={5} md={3}>
                  {row.title}:
                </Grid>
                <Grid item xs={12} sm={7} md={9}>
                  {row.description}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BookPreview;
