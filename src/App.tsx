import { ThemeProvider } from '@mui/material';
import AppRouter from './components/Router';
import { theme } from './services/theme';
import { StoriesProvider } from './providers/stories';
import { AuthProvider } from './providers/auth';

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
