import { Stack, Box, TextField, Button } from '@mui/material';
import { loginFirebase } from '../services/auth';
import { useAuth } from '../providers/AuthProvider';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';

function Login() {
  const { isLogged, authChecked } = useAuth();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    await loginFirebase(email, password);
  };

  if (!authChecked) {
    return <Loader />;
  }

  if (isLogged) {
    return <Navigate to="/stories-panel" />;
  }

  return (
    <Stack>
      <Box component="form" onSubmit={handleLogin} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </Button>
      </Box>
    </Stack>
  );
}

export default Login;
