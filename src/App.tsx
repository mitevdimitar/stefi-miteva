import { ThemeProvider } from '@mui/material';
import AppRouter from './components/Router';
import { theme } from './services/theme';
import { StoriesProvider } from './providers/stories';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoriesProvider>
        <AppRouter />
      </StoriesProvider>
    </ThemeProvider>
  );
}

export default App;
