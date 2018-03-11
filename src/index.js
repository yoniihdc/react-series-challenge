import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Main from './App';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
