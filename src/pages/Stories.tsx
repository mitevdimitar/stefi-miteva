import { Grid, Pagination } from '@mui/material';
import StoryPreview from '../components/StoryPreview';
import Layout from '../components/Layout';
import React from 'react';
import MainStoryPreview from '../components/MainStoryPreview';

const stories = [
  {
    title: 'Гласът на морето',
    label: 'Първа награда',
    extract:
      'Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите гънки на водата. Тогава го забелязах. Беше много рядък и изключително голям.',
    date: '12 10 2021',
    img: 'rapana.jpeg',
  },
  {
    title: 'Сладки за дядо Коледа',
    label: 'Първа награда',
    extract:
      'Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите гънки на водата. Тогава го забелязах. Беше много рядък и изключително голям.',
    date: '12 10 2021',
    img: 'cookies.jpeg',
  },
  {
    title: 'Приятелство дебне отвсякъде',
    label: 'Първа награда',
    extract:
      'Вълните ме обляха, а аз се почувствах щастлива и спокойна от игривите гънки на водата. Тогава го забелязах. Беше много рядък и изключително голям.',
    date: '12 10 2021',
    img: 'cougar.jpeg',
  },
];

function Stories() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Layout isHome={false}>
      <>
        <Grid container item mb={5}>
          <MainStoryPreview />
        </Grid>
        <Grid container item>
          {stories.map((story, i) => {
            return (
              <Grid key={i} p={1} item xs={4}>
                <StoryPreview story={story} />
              </Grid>
            );
          })}
        </Grid>
        <Grid container justifyContent="center" my={3}>
          <Pagination
            count={5}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Grid>
      </>
    </Layout>
  );
}

export default Stories;
