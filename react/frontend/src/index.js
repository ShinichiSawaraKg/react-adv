import React from 'react';
import ReactDOM from 'react-dom/client';
import EnqueteCreate from './EnqueteCreate';
import EnqueteResult from './EnqueteResult';

const createRoot = document.getElementById('create-root');
if (createRoot) {
    const root = ReactDOM.createRoot(createRoot);
    root.render(<EnqueteCreate />);
}

const resultRoot = document.getElementById('result-root');
if (resultRoot) {
    const root = ReactDOM.createRoot(resultRoot);
    root.render(<EnqueteResult />);
}



/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/