

// import React, { useState, useEffect } from 'react';
// import ContextApi from './ContextApi';

// const ContextState = (props) => {
//   const storedTokens = JSON.parse(localStorage.getItem('tokens')) || { token: null, token1: null };
//   const [tokens, setTokens] = useState(storedTokens);
//   const [result, setresult] = useState([]);
//   const [dta,setdata]=useState(null) // Updated to maintain an array of results
//     const [name,setname]=useState('')
//   const [studentreports, setstudentreports] = useState([]);

//   useEffect(() => {
//     localStorage.setItem('tokens', JSON.stringify(tokens));
//   }, [tokens]);

//   const contextValue = {
//     dta,
//     setdata,
//     tokens,
//     setTokens,
//     result, // Updated state name
//     setresult, // Updated state updater
//     studentreports,
//     setstudentreports,
//      name,
//      setname // Updated state name
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
  const storedResult = JSON.parse(localStorage.getItem('result')) || [];
  const [tokens, setTokens] = useState(storedTokens);
  const [result, setresult] = useState(storedResult); // Updated state name
  const [dta, setdata] = useState(null);
  const [name, setname] = useState('');
  const [studentreports, setstudentreports] = useState([]);

  useEffect(() => {
    localStorage.setItem('tokens', JSON.stringify(tokens));
  }, [tokens]);

  useEffect(() => {
    localStorage.setItem('result', JSON.stringify(result)); // Store result in local storage
  }, [result]); // Triggered whenever result changes

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
    setname,
  };

  return (
    <ContextApi.Provider value={contextValue}>
      {props.children}
    </ContextApi.Provider>
  );
};

export default ContextState;
