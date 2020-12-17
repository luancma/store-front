import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './styles/globalStyle';
import Routes from './routers';
import SideBar from './components/SideBar';
import store from './redux';

function App() {
  const persistor = persistStore(store);

  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <PersistGate loading={<h1>Carregando</h1>} persistor={persistor}>
          <Router>
            <GlobalStyle />
            <SideBar>
              <Routes />
            </SideBar>
          </Router>
        </PersistGate>
      </Provider>
    </StylesProvider>
  );
}

export default App;
