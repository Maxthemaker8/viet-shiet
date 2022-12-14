import React from 'react';
import ReactDOM from 'react-dom'; //changed from 'from 'react-dom/client' to just react-dom
import App from './App';
import {Provider} from "react-redux";
import {store,persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";

// NEWER SYNTAX (ReactDOM.render now legacy)
//not sure if need to include <React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
); 


/* LEGACY
ReactDOM.render(
   <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>,
   document.getElementById("root")
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
