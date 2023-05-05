import Layout from '../components/Layout';
import { Button, FormControl, Grid, TextField } from '@mui/material';
import ContactsBackground from '../img/contacts_background.jpg';

function Contacts() {
  return (
    <Layout isHome={false}>
      <Grid
        container
        mb={10}
        sx={{
          background: 'white',
          borderRadius: 10,
        }}
      >
        <Grid item xs={6}>
          <FormControl
            fullWidth
            sx={{
              height: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <TextField
              sx={{
                width: '70%',
                '& .MuiInputBase-root': {
                  borderRadius: '14px',
                  //background: 'white',
                },
              }}
              id="name"
              placeholder="Име"
            />
            <TextField
              sx={{
                width: '70%',
                '& .MuiInputBase-root': {
                  borderRadius: '14px',
                  //background: 'white',
                },
              }}
              id="email"
              placeholder="E-mail"
            />
            <TextField
              sx={{
                width: '70%',
                '& .MuiInputBase-root': {
                  borderRadius: '14px',
                  //background: 'white',
                },
              }}
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
            //background: '#588EAC',
            backgroundImage: `url(${ContactsBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: 10,
          }}
        ></Grid>
      </Grid>
    </Layout>
  );
}

export default Contacts;
