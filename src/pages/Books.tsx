import Layout from '../components/Layout';
import { Grid } from '@mui/material';
import ReviewCard from '../components/books/ReviewCard';
import TitledDivider from '../components/TitledDivider';
import BookPreview from '../components/books/BookPreview';
import Annotation from '../components/books/Annotation';
import Opinions from '../components/books/Opinions';
import Reviews from '../components/books/Reviews';

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
        <Reviews />
      </Grid>
    </Layout>
  );
}

export default Books;
