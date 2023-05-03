import Layout from '../components/Layout';
import { Button, FormControl, Grid, TextField } from '@mui/material';

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
          sx={{ background: '#588EAC', borderRadius: 10 }}
        ></Grid>
      </Grid>
    </Layout>
  );
}

export default Contacts;
