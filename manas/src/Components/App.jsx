


import  React  from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Project from './Project.jsx'
import Student from './Student.jsx';
import Forgotpassword from './Forgotpassword.jsx';
import Questions from "./Questions.jsx";
import Profile from "./Profile.jsx";
import Aboutus from './Aboutus.jsx';
import Report from './Report.jsx';
import Aware from './Aware.jsx'
import Home from './Home.jsx';
import THome from './THome.jsx';
import Nav from './Nav.jsx';
import TeacherLogin from './TeacherLogin.jsx';
import StudentLogin from './StudentLogin.jsx';
import Doctors from './Doctors.jsx';
import Activities from './Activities.jsx';
import Exercises from './Exercises.jsx';
import Food from './Food.jsx';
import '../Css/home.css'
import ScrollToTop from './ScrollToTop'; // Import the ScrollToTop component

import ContextState from './ContextState.jsx';
import Reports from './Reports.jsx';

const App = () => {
  return (
    <ContextState>
      <div>
        <BrowserRouter>
        <ScrollToTop />
          <Nav />
          <Routes>
            <Route path="/forgot" element={<Forgotpassword />} />
            <Route path="/stu" element={<Student />} />
            <Route
              path="/profile"
              element={<Profile />}
            />
            
            <Route
              path="/about"
              element={<Aboutus /> }
            />
            <Route
              path="/questions"
              element={<Questions />}
            />
            <Route
              path="/report"
              element={ <Report />}
            />
            <Route
              path="/reports"
              element={ <Reports />}
            />
            <Route
              path="/awareness"
              element={<Aware />}
            />
            <Route path="/home" element={<Home />} />
            <Route
              path="/teacherhome"
              element={ <THome /> }
            />
            <Route path="/doctors" element={<Doctors/>} />

            <Route path="/" element={<Project />} />
            <Route path="/teacherlogin" element={<TeacherLogin />} />
            <Route path="/studentlogin" element={<StudentLogin />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/food" element={<Food />} />
          </Routes>
        </BrowserRouter>
      </div>
      </ContextState>
  );
};

export default App;
