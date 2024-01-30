import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.jsx';
import { ToastContainer} from 'react-toastify';
import "./Css/App.css";
import "./Css/Responsive.css";


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//    <App/>
//   </React.StrictMode>
// );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <ToastContainer />
  </React.StrictMode>
);