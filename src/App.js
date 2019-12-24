import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import DefaultLayout from './containers/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
}

export default App;
