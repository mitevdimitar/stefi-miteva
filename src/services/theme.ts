import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#6A97AA',
      },
      secondary: {
        main: '#8C78C4',
      },
    },
    typography: {
      fontFamily: 'Raleway, Arial',
      allVariants: {
        color: '#8b8b8b',
      },
    },
  })
);
