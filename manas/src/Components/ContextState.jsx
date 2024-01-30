
// import ContextApi from './Contextapi'

// const ContextState = (props) => {
//      // Retrieve tokens from local storage on initial render
//   const storedTokens = JSON.parse(localStorage.getItem('tokens')) || { token: null, token1: null };
//   const [tokens, setTokens] = useState(storedTokens);

//   // Update local storage whenever tokens change
//   useEffect(() => {
//     localStorage.setItem('tokens', JSON.stringify(tokens));
//   }, [tokens]);

//   const { token, token1 } = tokens;
//   return (
//    <ContextApi.Provider value={{ tokens, setTokens }}>
//     {props.children}
//    </ContextApi.Provider>

//   )
// }

// export default ContextState


// import { useState, useEffect } from 'react';
// import ContextApi from './Contextapi';

// const ContextState = (props) => {
//   // Retrieve tokens from local storage on initial render
//   const storedTokens = JSON.parse(localStorage.getItem('tokens')) || { token: null, token1: null };
//   const [tokens, setTokens] = useState(storedTokens);

//   // Update local storage whenever tokens change
//   useEffect(() => {
//     localStorage.setItem('tokens', JSON.stringify(tokens));
//   }, [tokens]);

//   return (
//     <ContextApi.Provider value={{ tokens, setTokens }}>
//       {props.children}
//     </ContextApi.Provider>
//   );
// };

// export default ContextState;


// import { useState, useEffect } from 'react';
// import ContextApi from './ContextApi';
// const ContextState = (props) => {
//   // Retrieve tokens from local storage on initial render
//   const storedTokens = JSON.parse(localStorage.getItem('tokens')) || { token: null, token1: null };
 
//   const [tokens, setTokens] = useState(storedTokens);
//   const [result, setresult] = useState({ a: null, b: null }); // Update the initial state
   

//    const [studentreports,setstudentreports]=useState(null)
  
//   // Update local storage whenever tokens change
//   useEffect(() => {
//     localStorage.setItem('tokens', JSON.stringify(tokens));
//   }, [tokens]);




//   const contextValue = {
//     tokens,
//     setTokens,
//     result,
   
//     setresult,
   
//     studentreports,
//     setstudentreports
//   };

//   return (
//     <ContextApi.Provider value={contextValue}>
//       {props.children}
//     </ContextApi.Provider>
//   );
// };

// export default ContextState;


import React, { useState, useEffect } from 'react';
import ContextApi from './ContextApi';

const ContextState = (props) => {
  const storedTokens = JSON.parse(localStorage.getItem('tokens')) || { token: null, token1: null };
  const [tokens, setTokens] = useState(storedTokens);
  const [result, setresult] = useState([]);
  const [dta,setdata]=useState(null) // Updated to maintain an array of results
    const [name,setname]=useState('')
  const [studentreports, setstudentreports] = useState([]);

  useEffect(() => {
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }, [tokens]);

  const contextValue = {
    dta,
    setdata,
    tokens,
    setTokens,
    result, // Updated state name
    setresult, // Updated state updater
    studentreports,
    setstudentreports,
     name,
     setname // Updated state name
  };

  return (
    <ContextApi.Provider value={contextValue}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextState;
