import Layout from '../components/Layout';
import { Grid } from '@mui/material';
import ReviewCard from '../components/ReviewCard';
import TitledDivider from '../components/TitledDivider';
import BookPreview from '../components/books/BookPreview';
import Annotation from '../components/books/Annotation';
import Opinions from '../components/books/Opinions';

function Books() {
  return (
    <Layout isHome={false}>
      <Grid container>
        <BookPreview />
        <TitledDivider title="АНОТАЦИЯ" />
        <Annotation />
        <TitledDivider title="ЧИТАТЕЛСКИ МНЕНИЯ" />
        <Opinions />
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
