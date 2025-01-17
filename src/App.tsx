import { ThemeProvider } from '@mui/material';
import AppRouter from './components/Router';
import { theme } from './services/theme';
import { StoriesProvider } from './providers/StoriesProvider';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <StoriesProvider>
          <AppRouter />
        </StoriesProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
