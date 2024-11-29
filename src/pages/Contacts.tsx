import Layout from '../components/Layout';
import { Grid } from '@mui/material';
import ContactsBackground from '../img/contacts_background_full.jpg';
import { useMobile } from '../hooks/useMobile';
import ContactForm from '../components/ContactForm';

function Contacts() {
  const isMobile = useMobile();

  return (
    <Layout isContacts={true}>
      <Grid
        container
        sx={{
          backgroundImage: `url(${ContactsBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          borderRadius: isMobile ? 0 : 10,
          padding: 3.5,
          paddingTop: isMobile ? 7.5 : 3.5,
        }}
      >
        <Grid
          item
          xs={isMobile ? 12 : 6}
          sx={{
            background: '#fffaf9',
            borderRadius: 5,
            opacity: 0.9,
          }}
        >
          <ContactForm />
        </Grid>
        <Grid
          item
          xs={5.7}
          ml={2}
          sx={{
            borderRadius: 10,
          }}
        ></Grid>
      </Grid>
    </Layout>
  );
}

export default Contacts;
