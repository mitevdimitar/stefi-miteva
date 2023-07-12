import Layout from '../components/Layout';
import { Button, FormControl, Grid, TextField, styled } from '@mui/material';
import ContactsBackground from '../img/contacts_background_full.jpg';
import { useMobile } from '../hooks/useMobile';

const CustomTextField = styled(TextField)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    '& .MuiInputBase-root': {
      borderRadius: '14px',
    },
  };
});

function Contacts() {
  const isMobile = useMobile();

  return (
    <Layout isHome={false} isContacts={true}>
      <Grid
        container
        mb={isMobile ? 0 : 10}
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
            background: 'white',
            borderRadius: 5,
            opacity: 0.9,
          }}
        >
          <FormControl
            fullWidth
            sx={{
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <CustomTextField id="name" placeholder="Име" />
            <CustomTextField id="email" placeholder="E-mail" />
            <CustomTextField
              id="message"
              placeholder="Съобщение"
              multiline
              rows={6}
            />
            <Button
              variant="contained"
              sx={{
                width: '50%',
                borderRadius: '14px' /* background: '#588EAC' */,
                background: '#7FA0A5',
                '&: hover': {
                  background: '#6A97AA',
                },
              }}
            >
              Изпрати
            </Button>
            {/* <div>или</div> */}
          </FormControl>
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
