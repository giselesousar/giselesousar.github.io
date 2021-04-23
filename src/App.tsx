import Routes from './routes';
import { ThemeProvider } from '@material-ui/core';
import theme from './utils/theme';
import GlobalStyles from './components/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
