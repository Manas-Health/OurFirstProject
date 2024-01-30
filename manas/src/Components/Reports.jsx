import React, { useContext } from 'react'
import ContextApi from './ContextApi'
import { Link } from 'react-router-dom'
const Reports = () => {
  const {studentreports,name,tokens}=useContext(ContextApi)
  if (!tokens.token1) {
    return <Navigate to="/" />;
  }
  return (
    <div>
     <div className="reviewfortea">
     <div className="studentreports">
          <p style={{ fontSize: '25px', textAlign: 'center', fontWeight: 'bold' ,position:'sticky', top:0 ,backgroundColor:'black',color:'whitesmoke'}}>{name}<Link to="/teacherhome"><button className='tback'>Back</button></Link></p>
          <div className='mrd'><p><strong>MentalCondition</strong></p><p><strong>Result</strong></p><p><strong>Date</strong></p></div>

          {studentreports.map((studentreport) => (
            <div onClick={() => handleDivClick(studentreport)} className='studentdetailsdiv' key={studentreport.id} >
              <p>{studentreport.condition}</p>
              <p>{studentreport.report}</p>
              <p>{studentreport.date}</p>
            </div>
          ))}
        </div>
     </div>
    </div>
  )
}

export default Reports

