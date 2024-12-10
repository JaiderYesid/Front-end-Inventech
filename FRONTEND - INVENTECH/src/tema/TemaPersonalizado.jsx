import { createTheme, ThemeProvider } from '@mui/material/styles';

const tema = createTheme({
  palette: {
    primary: {
      main: '#FF5722', // Naranja
    },
    secondary: {
      main: '#FFC107', // Amarillo
    },
    background: {
      default: '#FFEBEE', // Fondo rojo claro
    },
    text: {
      primary: '#212121', // Negro
      secondary: '#FFFFFF', // Blanco
    },
  },
});

const TemaPersonalizado = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};

export default TemaPersonalizado;
