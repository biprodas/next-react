import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './views/Page';

function App() {
  return (
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
}

export default App;
