import React, { useContext, useState} from 'react'
import {  Link ,Navigate} from 'react-router-dom';
import ContextApi from './ContextApi';
const Report = () => {
  const {tokens, result} = useContext(ContextApi);
  const [back,setback]=useState(false)
  
    var latestResult = result[result.length - 1];

    if (back) {
      return <Navigate to="/questions" />;
    }

    if (!tokens.token) {
      return <Navigate to="/" />;
    }
  return (
    <>
  {
    result.length>0 ? (
      <div className='reportuniversal'>
      <button onClick={()=>{setback(true),localStorage.removeItem('result')}} className="closereport">Back</button>
      <h1 style={{textAlign:'center',position:'relative',top:'1%',fontSize:'50px',fontFamily:'cursive'}}>Report</h1>
      <div className="report">
        <div className='Show0'>
          <h1 className='show-h1'> Your {latestResult.a} Level Is {latestResult.b.result}
            {latestResult.b.result === 'Normal' && <img src='https://cdn-icons-png.flaticon.com/128/5290/5290058.png' height={70} width={70} />}
            
            {latestResult.b.result === 'Mild' && <img src='https://cdn-icons-png.flaticon.com/128/5610/5610944.png' height={70} width={70} />}

            {latestResult.b.result === 'Moderate' && <img src='https://tse4.mm.bing.net/th?id=OIP.OM8gR1lrqF0zVnvtsqNVbAHaG5&pid=Api&P=0&h=180' height={70} width={70} />}

            {latestResult.b.result === 'Severe' && <img src='https://cdn-icons-png.flaticon.com/128/9356/9356599.png' height={70} width={70} />}

            {latestResult.b.result === 'Extremely Severe' && <img src='https://cdn-icons-png.flaticon.com/128/9392/9392681.png' height={70} width={70} />}

          </h1>
        </div>
        {latestResult.b.result === 'Normal' && <div className='Show1'>
          <p className='p1'><strong>Your {latestResult.a} Level is Normal which is good for your mental health</strong></p>
          <p className='p2'>Our few Suggestions to you for being more strong and have a peaceful life!</p>
          <div className="ulcontainer">
          <ul>
            <li> Practice Healthy Habits</li>
            <li> Engage in Relaxation Techniques</li>
            <li>Manage Time Effectively</li>
            <li> Consider Professional Guidance if Needed</li>

          </ul>
          </div>
          <p className='p3'>In the Home page You can follow our Activates,Exercises and Food page for making your mental health Even better..</p>
          <h3 className='show-h3'>Thank You we Hope you have a best Life with lot of peace</h3>
        </div>}

        {latestResult.b.result === 'Mild' && <div className='Show1'>
          <p className='p1'><strong>Your {latestResult.a} Level is Mild which is ok, Not a big problem for your mental health but you have to be little careful about your mental health</strong></p>
          <p className='p2'>Our few Suggestions to you for being more strong and have a peaceful life!</p>
          <div className="ulcontainer">
            <ul>
              <li> Practice Healthy Habits</li>
              <li> Engage in Relaxation Techniques</li>
              <li>Manage Time Effectively</li>
            </ul>
          </div>
          <p className='p3'>In the Home page You can follow our Activates,Exercises and Food page for making your mental health Even better..</p>
          <h3 className='show-h3'>Thank You we Hope you have a best Life with lot of peace</h3>
        </div>}

        {latestResult.b.result === 'Moderate' && <div className='Show1'>
          <p className='p1'><strong>Your {latestResult.a} Level is Moderate which is bit need to be concerned about it for your proper mental health</strong></p>
          <p className='p2'>Our few Suggestions to you for being more strong and have a peaceful life!</p>
          <div className="ulcontainer">
            <ul>
              <li> Practice Healthy Habits</li>
              <li> Engage in Relaxation Techniques</li>
              <li>Manage Time Effectively</li>
            </ul>
          </div>
          <p className='p3'>As Your Condition of {latestResult.a} is MODERATE we suggest you to take help of your teacher for your mental health checkup</p>

          <p className='p3'>In the Home page You can follow our Activates,Exercises and Food page for making your mental health Even better..</p>
          <h3 className='show-h3'>Thank You we Hope you have a best Life with lot of peace</h3>
        </div>}
        {latestResult.b.result === 'Severe' && <div className='Show1'>
          <p className='p1'><strong>Your {latestResult.a} Level is Severe which is bad for your mental health</strong></p>
          <p className='p2'>Our Suggestions to you for being more strong and have a peaceful life!</p>
          <div className='ulcontainer'>
            <ul>
              <li> Contact a Mental Health Professional as fast as you can</li>
              <li> Engage in Relaxation Techniques</li>
              <li>Make Yourself off from unwanted thoughts</li>
            </ul>
          </div>
          <p className='p3'>As Your Condition of {latestResult.a} is SEVERE we strongly suggest you to take help of your teacher for your mental health checkup</p>

          <p className='p3'>In the Home page You can follow our Activates,Exercises and Food page for making your mental health Even better..</p>
          <h3 className='show-h3'>Thank You we Hope you have a best Life with lot of peace</h3>
        </div>}
        {latestResult.b.result === 'Extremely Severe' && <div className='Show1'>
          <p className='p1'><strong>Your {latestResult.a} Level is Extremely Severe which is dangerous for your mental health</strong></p>
          <div className='ulcontainer'>
            <p className='p2'>Our Strong Suggestions to you for being more strong and have a peaceful life!</p>
            <ul>
              <li >Contact a Mental Health Professional as fast as you can</li>
              <li> Engage in Relaxation Techniques is must</li>
              <li>Control Yourself and try to be coolc as much as you can </li>
            </ul>
          </div>
          <p className='p3'>As Your Condition of {latestResult.a} is EXTREMELY SEVERE we strongly suggest you to take help of your teacher for your mental health checkup</p>

          <p className='p3'>In the Home page You can follow our Activates,Exercises and Food page for making your mental health Even better..</p>
          <h3 className='show-h3'>Thank You we Hope you have a best Life with lot of peace</h3>
        </div>}
      </div>
    </div>
    ):<div className='oops'>
      <p>404</p>
      <p>Error!</p>
      <p>Oops Page Not Found!</p>
    </div>
  }
  </>
  )
}

export default Report

