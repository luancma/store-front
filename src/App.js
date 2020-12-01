import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './styles/globalStyle';
import Routes from './routers';
import SideBar from './components/SideBar';
import store from './redux';
import getAllProducts from './services/local/product/getAllProducts';
import useFetch from './hooks/useFetch';
import { fetchAllProducts } from './redux/slices/products';

function App() {
  const getAllProductsRequest = async () => getAllProducts();

  const { data } = useFetch({ func: getAllProductsRequest });

  const handleInitialState = async () => {
    store.dispatch(fetchAllProducts(data));
  };

  React.useEffect(() => {
    handleInitialState();
  }, [data]);

  return (
    <StylesProvider injectFirst>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <SideBar>
            <Routes />
          </SideBar>
        </Router>
      </Provider>
    </StylesProvider>
  );
}

export default App;
