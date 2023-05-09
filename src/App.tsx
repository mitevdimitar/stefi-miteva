import { ThemeProvider } from '@mui/material';
import Navigation from './components/Navigation';
import { theme } from './services/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
