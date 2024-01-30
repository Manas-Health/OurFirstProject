
import React, { useState, useContext } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import ContextApi from './ContextApi';
import { FaRegWindowClose } from 'react-icons/fa'
import "../Css/App.css";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const StudentLogin = () => {
  // const [ token, setToken ] = useContext(store);
  const { tokens, setTokens } = useContext(ContextApi);

  //details of user for logging in
  const [data, setdata] = useState({
    username: '',
    password: ''
  });

  const change = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  };
  
  //submitting login form
  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login', data).then(
      res => {
        setTokens({ ...tokens, token: res.data.token });
        if (!res.data.token) {
          console.log(data.token)
          console.log(res.data.token)
          if (data.username == "" || data.password == "") {
            toast.warning("Please Enter Credentials!", { position: toast.POSITION.TOP_CENTER })
          }
          else {
            toast.error("Invalid Credentials!", { position: toast.POSITION.TOP_CENTER })
          }
        }
        else {
          setTokens({token:res.data.token})
        }
      }
    );
  };
  if (tokens.token) {
    return <Navigate to="/home" />;
  }
  return (
    <div className='st'>
      {/* <!-- Login-stu--> */}
      <div className={`outer `} >
        <h1>LOGIN</h1>
        <form className="fdiv" onSubmit={submit} id="forml">
          <div className="divf">
            <div className="inner" id="f">
              Username: <pre>  </pre><input onChange={change} name="username" className="in1" id="namee" type="text" placeholder="Enter Username" /><span className='icon2'><FaUser /></span>
            </div>
            <div className="inner" id="s">
              Password:<pre>  </pre><input onChange={change} name="password" className="in1" id="passwordd" type="password" autocomplete="new-password" placeholder="Enter Password" /><span className='icon2'><FaLock /></span>
            </div>
            <div className="inner" id="remember">
              <Link to="/forgot"><p>forgotpassword?</p></Link>
            </div>
            <div className="inner" ><button type="submit" className="in2"><b>Login</b></button></div>
          </div>
          <Link to="/">
            <span className="lcls">< FaRegWindowClose /></span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default StudentLogin

