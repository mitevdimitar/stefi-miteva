import { ThemeProvider } from '@mui/material';
import AppRouter from './components/Router';
import { theme } from './services/theme';
import { StoriesProvider } from './providers/StoriesProvider';
import { AuthProvider } from './providers/AuthProvider';
import { NotificationProvider } from './providers/NotificationProvider';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NotificationProvider>
          <StoriesProvider>
            <AppRouter />
          </StoriesProvider>
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
