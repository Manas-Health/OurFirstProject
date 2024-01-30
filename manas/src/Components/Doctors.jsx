
import ContextApi from './ContextApi';
import React,{useContext} from 'react'
import { Link ,Navigate} from 'react-router-dom';
const Doctors = () => {
  const { tokens } = useContext(ContextApi);
      if (!tokens.token1) {
          return <Navigate to="/" />;
        }
  return (
    <div className='Doctor'>
<div className='hb'> <h1 >Suggested Doctors for Students</h1> <Link to='/teacherhome'><button className='bdc'>Back</button></Link></div>
       <div className="grid-container">
        
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-bandari-srikanth-psychiatrist-hyderabad-8e27fc05-4023-4967-a596-163aadc32199.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. Bandari Srikanth</span>
                <p>MBBS, M.D. (Psychiatry)</p>
                <p>Psychiatrist, Neuropsychiatrist, Psychotherapist</p>
                11 Years Experience Overall (6 years as a specialist)
                <p className="addition">Ameerpet, Hyderabad &#xb7; Aster Prime Hospital</p>
            </div>
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-d-suresh-psychiatrist-hyderabad-70490bfa-cb7d-4ca4-8115-1d77eb5b9900.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. D Suresh</span>
                  <p>MBBS, M.D. (Psychiatry)</p>
                  <p>Psychiatrist,Neuropsychiatrist,Additioniction Psychiatrist</p>
                  11 Years Experience Overall  (7 years as a specialist)
                  <p className="addition">Himayat Nagar, Hyderabad
                    &#xb7; Mind And More</p>
            </div>
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-k-jyothirmayi-additioniction-psychiatrist-hyderabad-b6ed6e53-f649-4202-8221-e2bb1dd12154.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc"> K. Jyothirmayi</span>
                  <p>MBBS, M.D. (Psychiatry)</p>
                  <p>Additioniction Psychiatrist,Psychotherapist,Neuropsychiatrist</p>
                  16 Years Experience Overall  (8 years as specialist)
                  <p className="addition"> Gachibowli, Hyderabad &#xb7; Continental Hospitals</p>
            </div>
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-shanti-mohan-psychiatrist-hyderabad-c8226ede-32fb-40ca-9094-dbf2a9a47362.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. Shanti Mohan</span>
                  <p>MBBS, M.D. (Psychiatry)</p>
                  <p>Psychiatrist,Neuropsychiatrist,,Additioniction Psychiatrist</p>
                  10 Years Experience Overall  (5 years as specialist)
                  <p className="addition">Jeedimetla, Hyderabad &#xb7; SM Mind & Uro Clinic</p>
            </div>
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-neilofor-hussain-psychiatrist-hyderabad-2fb1cf5e-322a-4934-a93c-3f4ebc395e05.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                
                  <span className="doc">Dr. Neilofor Hussain</span>
                  <p>MBBS, M.D. (Psychiatry)</p>
                  <p>Psychiatrist,Neuropsychiatrist</p>
                  12 Years Experience Overall  (6 years as specialist)
                  <p className="addition">Malakpet, Hyderabad &#xb7; Asha Neuro Psychiatry Clinic</p>
                
            </div>
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-siva-anoop-yella-psychiatrist-hyderabad-dd528d12-a594-4c00-987b-830414b77ce3.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. Siva Anoop Yella</span>
                  <p>MBBS, M.D. (Psychiatry)</p>
                  <p>Psychiatrist,Psychotherapist,Additioniction Psychiatrist</p>
                  6 Years Experience Overall  (3 years as specialist)
                  <p className="addition">Ameerpet, Hyderabad
                    &#xb7; Aster Prime Hospital</p>
            </div>
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-nithin-kondapuram-psychiatrist-hyderabad-431ce334-1056-49b5-9b07-a8cfd7fb93a0.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. Nithin Kondapuram</span>
                  <p>Diploma in Psychiatry, MBBS</p>
                  <p>Psychiatrist,Sexologist</p>
                  12 Years Experience Overall  (8 years as specialist)
                  <p className="addition">Ameerpet, Hyderabad
                    &#xb7; Aster Prime Hospital</p>
            </div>
            
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-madhu-mohan-m-psychiatrist-hyderabad-c2e8007c-f52e-495b-b3b9-57fda2d2e58b.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. Madhu Mohan M</span>
                  <p>MBBS, M.D. (Psychiatry)</p>
                  <p>Psychiatrist</p>
                  6 Years Experience Overall  (2 years as specialist)
                  <p className="addition">Gachibowli, Hyderabad &#xb7; The Therapy Hub</p>
            </div>
            
        </div>
        <div className="divD">
            <img className="imagedoctors" src="https://imagesx.practo.com/providers/dr-shwetha-purkanti-neuropsychiatrist-hyderabad-2c3787fa-0fbc-4217-994f-e281e9c637a6.jpg?i_type=t_70x70-2x-webp"/>
            <div className="infoD">
                <span className="doc">Dr. Shwetha Purkanti</span>

                  <p>M.D. (Psychiatry), MBBS</p>
                  <p>Neuropsychiatrist</p>
                  12 Years Experience Overall  (11 years as specialist)
                  <p className="addition">Kondapur, Hyderabad &#xb7;Apollo Medical Centre</p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Doctors



