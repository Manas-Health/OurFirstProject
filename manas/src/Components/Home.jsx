
import React, { useContext, useEffect, useState } from 'react';
import ContextApi from './ContextApi';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Navigate, Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  const { tokens, dta, setdata } = useContext(ContextApi);
  const [studentReports, setStudentReports] = useState([]);
  const [latestDate, setLatestDate] = useState('Null');
  const [stressCondition, setStressCondition] = useState('Null');
  const [depressionCondition, setDepressionCondition] = useState('Null');
  const [anxietyCondition, setAnxietyCondition] = useState('Null');

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
    const findStudentReports = async () => {
      try {
        if (dta) {
          const response = await axios.post('http://localhost:3000/findstudentreports', { studentemail: dta.email });
          setStudentReports(response.data);
        }
      } catch (error) {
        console.error('Error fetching student reports:', error);
      }
    };

    findStudentReports();
  }, [dta]);

  useEffect(() => {
    if (studentReports.length > 0) {
      const latestReports = studentReports.slice(-3); // Get the latest 3 reports
      const latestDate = latestReports[latestReports.length - 1].date;
      setLatestDate(latestDate);

      latestReports.forEach(report => {
        switch (report.condition) {
          case 'Stress':
            setStressCondition(report.report);
            break;
          case 'Depression':
            setDepressionCondition(report.report);
            break;
          case 'Anxiety':
            setAnxietyCondition(report.report);
            break;
          default:
            break;
        }
      });
    }
  }, [studentReports]);

  useEffect(() =>{
    if (studentReports.length > 0) {
      const stressSeverity = calculateSeverityLevel(stressCondition);
      const depressionSeverity = calculateSeverityLevel(depressionCondition);
      const anxietySeverity = calculateSeverityLevel(anxietyCondition);

      const ctx = document.getElementById('myChart');
  
      if (ctx){
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Stress', 'Depression', 'Anxiety'],
            datasets: [{
              data: [stressSeverity, depressionSeverity, anxietySeverity],
              label: 'Severity',
            }]
          },
          options: {
            indexAxis: 'x', // Display the graph vertically
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x:{
                ticks:{
                  color: 'black',
                  font: {
                    size: 15,
                  }
                }
              },
              y: {
                ticks: {
                  color: 'black',
                  callback: function (value) {
                    return ['Normal', 'Mild', 'Moderate', 'Severe', 'Extremely Severe'][value - 1];
                  },
                  font: {
                    size: 15,
                  }
                }
              }
            },
            width: '300px'
          }
        });
  
        return () => {
          myChart.destroy(); // Cleanup function to destroy the chart instance
        };
      }
    }
  }, [stressCondition, depressionCondition, anxietyCondition]);

  const calculateSeverityLevel = (condition) => {
    switch (condition) {
      case 'Extremely Severe':
        return 5;
      case 'Severe':
        return 4;
      case 'Moderate':
        return 3;
      case 'Mild':
        return 2;
        case 'Normal':
          return 1;
      default:
        return 0;
    }
  };

  if (!tokens.token) {
    return <Navigate to="/" />;
  }

  return (
    <div className='universalh'>
      {/* Your JSX content */}
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
          <p className='span1inlatest'>Recently Taken Mental Health Test Results</p>
          <p className='span1inlatest2'>These are the recent results in the form of graph and text of your last taken test with date</p>
          <p className='date'><b>Date: </b>{latestDate}</p>
        </div>
       <div className="gphanddiv2">
       <div className="hdivgraph">
          <canvas id="myChart" width="300" height="400"></canvas>

        </div>
        <div className='hdiv2'>
          <span><p className='hhmp1'>Stress</p><p id='srs' className={stressCondition === 'Extremely Severe' ? 'color-extreme' : (stressCondition === 'Severe' ? 'color-severe' : (stressCondition === 'Moderate' ? 'color-moderate' : (stressCondition === 'Mild' ? 'color-mild' : (stressCondition === 'Normal' ? 'color-normal' : ''))))}>{stressCondition}</p></span>
          <span className='unique'><p className='hhmp1'>Depression</p><p id='dps' className={depressionCondition === 'Extremely Severe' ? 'color-extreme' : (depressionCondition=== 'Severe' ? 'color-severe' : (depressionCondition=== 'Moderate' ? 'color-moderate' : (depressionCondition=== 'Mild' ? 'color-mild' : (depressionCondition=== 'Normal' ? 'color-normal' : ''))))}>{depressionCondition}</p></span>
          <span><p className='hhmp1'>Anxiety</p><p id='anx' className={anxietyCondition === 'Extremely Severe' ? 'color-extreme' : (anxietyCondition === 'Severe' ? 'color-severe' : (anxietyCondition === 'Moderate' ? 'color-moderate' : (anxietyCondition === 'Mild' ? 'color-mild' : (anxietyCondition === 'Normal' ? 'color-normal' : ''))))}>{anxietyCondition}</p></span>
        </div>
       </div>
      </div>


      <div className="hhh1">
        <div className="tst">
          <p className='testp'>Assesment Test for Mental health Predictions</p>
          <div className='testdiv1'>
            <img src="https://tse2.mm.bing.net/th?id=OIP.2lXQSIR8CgHyq7WBs16Q5wHaEK&pid=Api&P=0&h=180" alt="*" />
            <p>
              Here, You can take test for your mental health conditions like Anxiety, Depression and Stress. So we provide 7 questions for each Mental condition , You can take any type of mental condition test separately. And get report of your mental condition instantly.
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
