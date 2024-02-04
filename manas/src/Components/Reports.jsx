// import React, { useContext, useEffect, useState } from 'react'
// import ContextApi from './ContextApi'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// const Reports = () => {
//   const {tokens}=useContext(ContextApi)

//   const [studetails, setstudetails] = useState([]);
// const [studentreports,setstudentreports]=useState([])
// useEffect(() => {
//   const students = async () => {
//     try {
//       let studentdetails = await axios.get('http://localhost:3000/studentdetails');
//       setstudetails(studentdetails.data);        
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   students();
// }, [tokens.token1]);
//   console.log(studetails)
// useEffect(() => {
//   const fetchStudentReports = async () => {
//     try {
//       const res = await axios.post('http://localhost:3000/findstudentreports', { studentemail: studetails[0].username });
//       setstudentreports(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (tokens.token1) {
//     fetchStudentReports();
//   }
// }, [studetails,tokens.token1]);

//   if (!tokens.token1) {
//     return <Navigate to="/" />;
//   }
//   return (
//     <div>
//      <div className="reviewfortea">
//      <div className="studentreports">
//           <p style={{ fontSize: '25px', textAlign: 'center', fontWeight: 'bold' ,position:'sticky', top:0 ,backgroundColor:'black',color:'whitesmoke'}}><Link to="/teacherhome"><button className='tback'>Back</button></Link></p>
//           <div className='mrd'><p><strong>MentalCondition</strong></p><p><strong>Result</strong></p><p><strong>Date</strong></p></div>

//           {studentreports.map((studentreport) => (
//             <div onClick={() => handleDivClick(studentreport)} className='studentdetailsdiv' key={studentreport.id} >
//               <p>{studentreport.condition}</p>
//               <p>{studentreport.report}</p>
//               <p>{studentreport.date}</p>
//             </div>
//           ))}
//         </div>
//      </div>
//     </div>
//   )
// }

// export default Reports

import React, { useContext, useEffect, useState } from 'react';
import ContextApi from './ContextApi';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Reports = () => {
  const { tokens } = useContext(ContextApi);

  const [studetails, setstudetails] = useState([]);
  const [studentreports, setstudentreports] = useState([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/studentdetails');
        setstudetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentDetails();
  }, [tokens.token1]);

  useEffect(() => {
    console.log(studetails)
    const fetchStudentReports = async () => {
      if (studetails.length > 0) {
        try {
          const response = await axios.post('http://localhost:3000/findstudentreports', { studentemail: studetails[0].email });
          setstudentreports(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchStudentReports();
  }, [studetails, tokens.token1]);

  if (!tokens.token1) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <div className="reviewfortea">
        <div className="studentreports">
          <p style={{ fontSize: '25px', textAlign: 'center', fontWeight: 'bold', position: 'sticky', top: 0, backgroundColor: 'black', color: 'whitesmoke' }}>
            <Link to="/teacherhome">
              <button className='tback'>Back</button>
            </Link>
          </p>
          <div className='mrd'>
            <p><strong>MentalCondition</strong></p>
            <p><strong>Result</strong></p>
            <p><strong>Date</strong></p>
          </div>

          {studentreports.map((studentreport) => (
            <div className='studentdetailsdiv' key={studentreport.id}>
              <p>{studentreport.condition}</p>
              <p>{studentreport.report}</p>
              <p>{studentreport.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
