import React,{useContext} from 'react'
import '../Css/home.css'
import '../Css/index.css'
import ContextApi from './ContextApi'
import { Navigate } from 'react-router-dom'
const Aboutus = () => {
  const { tokens } = useContext(ContextApi)

  if (!tokens.token) {
      return <Navigate to='/' />
  }
  return (
    
    <div className="about-us"  >
      <div className="abo">
        <div className='imgscontainer'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XufT6N5_L8dknXqpn8Cwce986JJ2V1HLjA&usqp=CAU" className="pic" />
          <img src="https://tse2.mm.bing.net/th?id=OIP.RvxNHOfQQhZcx1Ud5xm9GQHaHa&pid=Api&P=0&h=180" alt="mental well ness" className='pic1' />
        </div>
        <div className="text">
          <h2>About Us</h2>
          <h5><span className='bspan'>Mental Health</span></h5>
          <p className="info">Welcome to Manas Health: Your Trusted Partner in Mental Well-being</p>
          <p className="content">At Manas Health, we understand that mental health is an integral part of overall well-being. Our mission is to provide a supportive and empowering space for individuals seeking insights into their mental health. Through cutting-edge diagnostics and personalized solutions, we aim to guide you on a journey toward mental wellness</p>
          <div className="data">
            <h6>Our Services:</h6>
            <p><span className='bspan'>Diagnostic Assessments: </span >Gain insights into your mental health through our comprehensive assessments</p>
            <p><span className='bspan'>Personalized Recommendations:</span> Receive customized suggestions based on your unique mental health profile</p>
          </div>
          <div>
            <h6>Join Us on Your Mental Health Journey:</h6>
            <p>Whether you're taking the first step towards understanding your mental health or seeking ongoing support,<span>ManasHealth</span> is here for you. Together, let's embark on a journey of self-discovery and well-being</p>
            <p className="thank">Thank you for choosing ManasHealth as your partner in mental wellness. Your mental health matters, and we are committed to helping you thrive</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Aboutus
