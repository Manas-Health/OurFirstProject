
import React, { useState, useContext } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import ContextApi from './ContextApi';
import { FaRegWindowClose } from 'react-icons/fa'
import "../Css/App.css";
import 'react-toastify/dist/ReactToastify.css';
import {  toast } from 'react-toastify';


const TeacherLogin = () => {
    // const [ token1, setToken1 ] = useContext(store);
    const { tokens, setTokens } = useContext(ContextApi);

    const [data1, setdata1] = useState({
        tusername: '',
        tpassword: ''
      });

      const change1 = (e) => {
        setdata1({ ...data1, [e.target.name]: e.target.value });
          console.log(data1)
      };

      const tsubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/tlogin', data1).then(
          res => {
            console.log(res.data)
            setTokens({ ...tokens, token1: res.data.token1 });
           if (!res.data.token1) {
            if(data1.tusername=="" || data1.tpassword==""){
              toast.warning("Please Enter Credentials!",{position:toast.POSITION.TOP_CENTER}) 
            }
            else{
              toast.error("Invalid Credentials!",{position:toast.POSITION.TOP_CENTER})      
            }
            }
          }
        );
      };
       if (tokens.token1) {
          return <Navigate to='/teacherhome' />;
        }
      
  return (
    <div className='st'>
       {/* <!--Login-tea --> */}
       <div className={`outer1`} >
        <h1>LOGIN</h1>
        <form className="fdiv" onSubmit={tsubmit}>
          <div className="divf">
            <div className="inner" id="f1">
              TeacherName: <pre>  </pre><input onChange={change1} name="tusername" className="in1" id="namee1" type="text" placeholder="Enter Username" /><span className='icon2'><FaUser /></span>
            </div>
            <div className="inner" id="s1">
              Password:<pre>  </pre><input onChange={change1} name="tpassword" className="in1" id="passwordd1" type="password" placeholder="Enter Password" /><span className='icon2'><FaLock /></span>
            </div>
            <div className="inner" ><button type="submit" className="int"><b>Login</b></button></div>
          </div>
          <Link to="/">
            <span className="lcls">< FaRegWindowClose/></span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default TeacherLogin
