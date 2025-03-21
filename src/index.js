import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App'
import Mui from './Mui'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mui/>
    <App/>
  </React.StrictMode>
);
















// function Texto(){
//   var [ valor, setValor] = React.useState()
//   function mudarValor (e){
//     setValor(e.target.value * 5)
//   } 
//   return (
//     <div>
//       <input type="text"
//         onChange={ (e) => mudarValor(e)}
//         />
//         <spam> {valor} </spam>

//         <hr/>
//     </div>

//   )
// }
