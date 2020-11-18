import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './styles/globalStyle';
import Routes from './routers';
import SideBar from './components/SideBar';

function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        <GlobalStyle />
        <SideBar>
          <Routes />
        </SideBar>
      </Router>
    </StylesProvider>
  );
}

export default App;
