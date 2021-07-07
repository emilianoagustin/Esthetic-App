import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import App from './components/Container/App';
import { BrowserRouter } from 'react-router-dom'
/* import reportWebVitals from './reportWebVitals'; */

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider  store={store} > 
     <App/>
    </Provider> 
  </BrowserRouter> 
</React.StrictMode>,
  document.getElementById('root')
);
/* reportWebVitals(); */