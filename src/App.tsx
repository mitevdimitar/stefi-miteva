import { ThemeProvider } from '@mui/material';
import Navigation from './components/Navigation';
import { theme } from './services/theme';
import { StoriesProvider } from './providers/Stories';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoriesProvider>
        <Navigation />
      </StoriesProvider>
    </ThemeProvider>
  );
}

export default App;
