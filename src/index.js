import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

f

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />
    <h1>My Contacts</h1>
    <Card 
      name="Jack" img= "data:image/jpeg;base64,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"
      tel="123 456 789"
      email="Jack@abc.com"
      />
    <input id="fName" /> 

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
