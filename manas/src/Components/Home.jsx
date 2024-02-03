//npm install @fortawesome/fontawesome-free

import React, { useContext, useEffect, useState } from 'react';
import ContextApi from './ContextApi';
import axios from 'axios';
import '../Css/home.css'
import Chart from 'chart.js/auto';

import { Navigate, Link } from 'react-router-dom';

import { FaInstagram } from "react-icons/fa6";

const Home = () => {

  const { tokens, dta, setdata, studentreports, setstudentreports } = useContext(ContextApi);
  const [date, setdate] = useState('None')
  const [scond, setscond] = useState('None')
  const [dcond, setdcond] = useState('None')
  const [acond, setacond] = useState('None')
  useEffect(() => {
    const find = async () => {
      try {
        if (dta) {
          console.log(dta.email)
          await axios.post('http://localhost:3000/findstudentreports', { studentemail: dta.email })
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
  }, [dta, tokens.token])

  useEffect(() => {
    try {
      for (var i = studentreports.length - 1; i > studentreports.length - 4; i--) {
        if (studentreports[i].condition === 'Stress') {
          if (studentreports[i].report === 'Extremely Severe') {
            setscond("Ext-Severe")
          }
          else {
            setscond(studentreports[i].report)
          }

        }
        if (studentreports[i].condition === 'Depression') {
          if (studentreports[i].report === 'Extremely Severe') {
            setdcond("Ext-Severe")
          }
          else {
            setdcond(studentreports[i].report)

          }
        }
        if (studentreports[i].condition === 'Anxiety') {
          if (studentreports[i].report === 'Extremely Severe') {
            setacond("Ext-Severe")
          }
          else {
            setacond(studentreports[i].report)
          }
        }
      }
      for (var i = studentreports.length - 1; i > studentreports.length - 2; i--) {
        setdate(studentreports[i].date)
      }
    }
    catch (err) {
      console.log(err)
    }
  }, [tokens.token])
  useEffect(() => {
    axios.get("http://localhost:3000/home", {
      headers: {
        'x-token': tokens.token
      }
    }).then(
      res => setdata(res.data)
    ).catch((err) => console.log(err));
  }, [tokens.token]);

  useEffect(() => {
    // Calculate severity levels based on the latest data
    const stressSeverity = calculateSeverityLevel(scond);
    const depressionSeverity = calculateSeverityLevel(dcond);
    const anxietySeverity = calculateSeverityLevel(acond);

    const ctx = document.getElementById('myChart').getContext('2d');

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Stress', 'Depression', 'Anxiety'],
        datasets: [{
          data: [stressSeverity, depressionSeverity, anxietySeverity],
          label: 'Severity'
        }]

      },
      options: {
        indexAxis: 'x', // Display the graph vertically
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
            ticks: {
              color: 'black',
            }
          },
          y: {
            ticks: {
              color: 'black',

              callback: function (value) {
                return ['Normal', 'Mild', 'Moderate', 'Severe', 'Extremely Severe'][value - 1];
              }
            }
          }
        },
        width: '300px'
      }
    });


    return () => {
      myChart.destroy();
    };
  }, [scond, dcond, acond]);

  // Function to calculate severity level based on the latest data
  const calculateSeverityLevel = (condition) => {
    switch (condition) {
      case 'Ext-Severe':
        return 5;
      case 'Severe':
        return 4;
      case 'Moderate':
        return 3;
      case 'Mild':
        return 2;
      default:
        return 1;
    }
  };


  if (!tokens.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className='universalh'>
      <div className="hhh">
        <div className="outerdivinhome0">
          {dta &&
            <div className='hello'><h1>Hello!<span class="waving-hand">👋</span> {dta.username}</h1>
              {localStorage.setItem('user', JSON.stringify(dta.username))}

            </div>

          }
          <div className='blinking'>
            <p className='blink1'>Your Mental Health Matters!</p>
          </div>

          <div className="moving">
            <p className='movingtext'>Strength in Mind, Resilience in Heart: Embrace Mental Wellness Today!</p>

          </div>

          <div className='hiconss'>
            <div className="icon-containerh">
              <span><img src="https://cdn-icons-png.flaticon.com/128/8389/8389778.png" alt="" />Brain</span>
              <div className="hover-div">
                <h3 style={{ textAlign: 'center' }}>Do you know?</h3>
                <p>The brain's default mode network, responsible for mind-wandering and self-referential thoughts, is implicated in mental health conditions such as depression and anxiety.
                </p>
              </div>
            </div>
            <div className="icon-containerh" >
              <span><img src="https://cdn-icons-png.flaticon.com/128/5230/5230693.png" alt="" />Anxiety</span>

              <div className="hover-div">
                <h3 style={{ textAlign: 'center' }}>Do you know?</h3>
                <p>Anxiety disorders can be influenced by gut bacteria; research suggests that the gut microbiome may play a role in regulating neurotransmitters involved in anxiety, highlighting the gut-brain connection in mental health.</p>
              </div>
            </div>
            <div className="icon-containerh" >
              <span><img src="https://cdn-icons-png.flaticon.com/128/8775/8775187.png" alt="" />Depression</span>

              <div className="hover-div">
                <h3 style={{ textAlign: 'center' }}>Do you know?</h3>
                <p>Depression can affect memory and cognitive function; research suggests that individuals with depression may experience difficulties with memory retrieval and attention, highlighting the impact of the condition beyond mood disturbances.</p>
              </div>
            </div>
            <div className="icon-containerh">
              <span><img src="https://cdn-icons-png.flaticon.com/128/3590/3590456.png" alt="" />Stress</span>

              <div className="hover-div">
                <h3 style={{ textAlign: 'center' }}>Do you know?</h3>
                <p>Stress can impair decision-making abilities; studies indicate that chronic stress may affect regions of the brain involved in decision-making and impulse control, potentially leading to poor judgment and increased risk-taking behavior.</p>
              </div>
            </div>
            <div className="icon-containerh">
              <span><img src="https://cdn-icons-png.flaticon.com/128/7600/7600171.png" alt="" />Resilient</span>

              <div className="hover-div">
                <h3 style={{ textAlign: 'center' }}>Do you know?</h3>
                <p>Resilience is not just a trait; it can be cultivated through various practices such as mindfulness, social support, and positive coping strategies, highlighting the potential for growth and adaptation in the face of adversity.</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="hhm">
        {/* <img className='imginlatest' src="https://tse1.mm.bing.net/th?id=OIP.lKJDxqTxOrxKEplRQlP5LgHaHa&pid=Api&P=0&h=180" alt="mind" /> */}
        <div className='hdiv1'>
          <p className='span1inlatest'>-----Latest results of your Mental Conditions-----</p>
          <p className='span1inlatest2'>These are the latest results in the form of graph and text of your last taken test with date</p>
          <p className='date'><b>Date: </b>{date}</p>
        </div>
        <div className="hdivgraph">
          <canvas id="myChart" width="300" height="400"></canvas>

        </div>
        <div className='hdiv2'>
          <span><p className='hhmp1'>Stress</p><p id='srs' className={scond === 'Ext-Severe' ? 'color-extreme' : (scond === 'Severe' ? 'color-severe' : (scond === 'Moderate' ? 'color-moderate' : (scond === 'Mild' ? 'color-mild' : (scond === 'Normal' ? 'color-normal' : ''))))}>{scond}</p></span>
          <span className='unique'><p className='hhmp1'>Depression</p><p id='dps' className={dcond === 'Ext-Severe' ? 'color-extreme' : (dcond === 'Severe' ? 'color-severe' : (dcond === 'Moderate' ? 'color-moderate' : (dcond === 'Mild' ? 'color-mild' : (dcond === 'Normal' ? 'color-normal' : ''))))}>{dcond}</p></span>
          <span><p className='hhmp1'>Anxiety</p><p id='anx' className={acond === 'Ext-Severe' ? 'color-extreme' : (acond === 'Severe' ? 'color-severe' : (acond === 'Moderate' ? 'color-moderate' : (acond === 'Mild' ? 'color-mild' : (acond === 'Normal' ? 'color-normal' : ''))))}>{acond}</p></span>
        </div>
      </div>


      <div className="hhh1">
        <div className="tst">
          <p className='testp'>Assesment Test for Mental health Predictions</p>
          <div className='testdiv1'>
            <img src="https://tse2.mm.bing.net/th?id=OIP.2lXQSIR8CgHyq7WBs16Q5wHaEK&pid=Api&P=0&h=180" alt="*" />
            <p>
              Here in this website You can take test for your mental health conditions like Anxiety, Depression and Stress. So we provide 7 questions for each Mental condition , You can take any type of mental condition test separately. And get report of your mental condition instantly.
              And here you can access any test only once in a week
            </p>
          </div>
          <Link to="/questions">
            <button className='testbtn'><img id="img1" src="https://cdn-icons-png.flaticon.com/128/6403/6403868.png" alt="test" height={20} width={20} />Take test</button>
          </Link>
        </div>
        <div className="tst">
          <p className='testp'>Awareness on Mental health and it's conditions</p>
          <div className='testdiv1'>
            <img src="https://tse4.mm.bing.net/th?id=OIP.TCNTONGKGNkopTc_vgI_bAHaLG&pid=Api&P=0&h=180" alt="*" />
            <p>
              Awareness on Mental health for everyone is crucial because nowadays mental conditions are ruling the world because of lack of awareness on mental health. Here we provided you content related to mental health and it's conditions
              and diseases caused by mental health etc.
            </p>

          </div>
          <Link to="/awareness">
            <button className='testbtn'><img id="img2" src="https://cdn-icons-png.flaticon.com/128/4856/4856968.png" alt="Awareness" height={20} width={20} />Awareness page</button>
          </Link>
        </div>
        <div className="tst1">

          <h2 className='blink'>Make Your Mind Calm..</h2>
          <img src="https://tse1.mm.bing.net/th?id=OIP.fufsq4cmcEGjdgb5sgmfPQHaHa&pid=Api&P=0&h=180" alt="" />
        </div>
      </div>

      <div className="something">

        <Link to='/activities'>
          <div title='Few activites for mental health' className="innerh">
            <img src="https://cdn-icons-png.flaticon.com/128/4807/4807765.png" alt="habit" height={35} width={35} />
            <p>Activites</p>
          </div>
        </Link>
        <img className='img-in' src="https://tse1.mm.bing.net/th?id=OIP.DVbxwKx0oPCqGWpu9dxyxAHaJ4&pid=Api&P=0&h=180" alt="image" />
        <Link to='/exercises'> <div title='Exercises for relaxation' className="innerh">
          <img src="https://cdn-icons-png.flaticon.com/128/3048/3048398.png" alt="exercises" height={35} width={35} />
          <p> Exercises</p>
        </div></Link>

      </div>
      <div className="something1">

        <Link to='/food'>
          <div title='Healthy Food for your mental health' className="innerh">
            <img src="https://cdn-icons-png.flaticon.com/128/706/706164.png" alt="food" height={35} width={35} />
            <p>Food</p>
          </div>
        </Link>
      </div>
      <div className="footerh">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us Through Email or Mobile:</h3>
            <p>Email: <b> <a href="">mhproject19@gmail.com</a></b></p>
            <p>Phone: <b>8500867358</b> or <b>6281032946</b> or  <b>8074622058</b></p>
          </div>
          <div className="social-media">
            <h3>Follow Us On our Social media Accounts</h3>
            <div><a href="https://www.instagram.com/manashealth_23" target="_blank">< FaInstagram />-Instagram</a>
            </div>
          </div>
        </div>
        <div className="legal-info">
          <p className='copymanas'>&copy; Manas Health </p>
          <p><b>Disclaimer</b>: The information provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.</p>
          <p><b>Accessibility</b>: We are committed to making our website accessible to all users. If you have any questions or concerns regarding accessibility, please contact us through above given contact details</p>
        </div>
      </div>

    </div>
  );
};

export default Home;



