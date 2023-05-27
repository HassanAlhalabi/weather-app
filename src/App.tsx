import { CssBaseline, Grid } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { useRecoilValue } from 'recoil';
import { themeMode } from './state/theme';
import { THEME_MODES } from './constants';
import LayoutContainer from './components/layout-container';
import Header from './components/header';
import AddressContainer from './containers/address-details';
import DaysForcastContainer from './containers/days-forcast';
import Forcast10DaysContainer from './containers/forcast10-days';
import Footer from './components/footer';

function App() {

  const theme = useRecoilValue(themeMode)

  return (
    <ThemeProvider theme={theme === THEME_MODES.light ? lightTheme : darkTheme}>
      <CssBaseline />
      <LayoutContainer>
        <Header />
        <AddressContainer />
        <Forcast10DaysContainer />
        <DaysForcastContainer />
        <Footer />
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default App
