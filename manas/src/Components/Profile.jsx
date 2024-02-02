import ContextApi from './ContextApi';
import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import '../Css/home.css'
import axios from 'axios';

const Profile = () => {
  const { tokens ,studentreports,setstudentreports} = useContext(ContextApi);
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/profile", {
      headers: {
        'x-token': tokens.token
      }
    }).then(
      res => {
        setdata(res.data);
       
      }
    ).catch((err) => {
      console.log(err);
     
    });
  }, [tokens.token]);
  useEffect(() => {
    const find = async () => {
      try {
        if(data){
          console.log(data.email)
        await axios.post('http://localhost:3000/findstudentreports', { studentemail: data.email })
          .then((res) => {
            setstudentreports(res.data)
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
        }

      } catch (error) {
        console.error('Error sending student details:', error);
      }
    }
    find()
  },[data,tokens.token])
  if (!tokens.token) {
    return <Navigate to="/" />;
  }

  // ...
  return (
    <div className="universalp">
      <div className="profilec2">
        <div className="profilecontainer">
          <h2 className='profileh'>Profile</h2>
          <img src="https://cdn-icons-png.flaticon.com/128/727/727399.png" alt="avatar" />
          {
            data && <div className="profilecontainer2">
            <p className='p'><span className='pspan'>Username :</span><span className='pspan1'><span> </span>{data.username}</span> </p>
            <p className='p'><span className='pspan'>Mobile :</span> <span className='pspan1'><span> </span>{data.mobile}</span> </p>
            <p className='p'><span className='pspan'>Email :</span><span className='pspan1'><span> </span>{data.email}</span> </p>
          </div>
          }
        </div>
        <div className="studeta">
          <p style={{ fontSize: '25px', textAlign: 'center', fontWeight: 'bold',position:'sticky',top:0,backgroundColor:'black',color:'whitesmoke' }}>Your Activity</p>
          <div className='mrd'><p><strong>MentalCondition</strong></p><p><strong>Result</strong></p><p><strong>Date</strong></p></div>
          {studentreports.map((studentreport) => (
            <div className='studentdetailsdiv' key={studentreport.id} >
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

export default Profile;


