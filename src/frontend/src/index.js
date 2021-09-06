import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LineChart from './LineChart';
import MapContainer from "./map/Map"
import Header from './Header';
import reportWebVitals from './reportWebVitals';

const domContainer = document.querySelector('#app');

ReactDOM.render(
<div>
        <React.StrictMode>
            <Header />
    <App />
            <MapContainer />
            
        React.createElement(ApexChart), domContainer   
        </React.StrictMode>
        
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
