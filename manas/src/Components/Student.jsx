


import React, {  useState } from 'react';
import axios from 'axios';
import { Link,Navigate } from 'react-router-dom';
import {
  FaUserCircle,
  FaLock,
  FaEnvelope,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
  FaRegWindowClose,
} from 'react-icons/fa';
import '../Css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Student = () => {
  const [username, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [cpasswordError, setCPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVisible, setOtpVisible] = useState(false);
  const [formvis,setformvis]=useState(true)
  const [otpsend,setotpsend]=useState('')
  const [otpresult,setotpresult]=useState('')
  const [navigateToLogin, setNavigateToLogin] = useState(false);

  const details = { username, password, cpassword, email, mobile };

  const submit = async (e) => {
    e.preventDefault();
    // Reset previous errors
    setPasswordError('');
    setCPasswordError('');
    setEmailError('');
    setMobileError('');

    // Validation logic
    let isValid = true;     
    if (username === '' || password === '' || cpassword === '' || email === '' || mobile === '') {
      toast.warning('Please fill in all the details!', { position: toast.POSITION.TOP_CENTER });
      isValid = false;
    } else {
      // Password validation
      if (password.length < 8 || password.length > 16) {
        setPasswordError('Password must be between 8 and 16 characters.');
        isValid = false;
      } else if (!isPasswordValid(password)) {
        setPasswordError('Password must contain 1 special character, 1 digit, 1 uppercase.');
        isValid = false;
      }

      // Confirm Password validation
      if (cpassword !== password) {
        setCPasswordError('Passwords do not match.');
        isValid = false;
      }

      // Email validation
      if (!isEmailValid(email)) {
        setEmailError('Enter a valid email address.');
        isValid = false;
      }

      // Mobile validation
      if (mobile.length !== 10) {
        setMobileError('Enter a valid 10-digit mobile number.');
        isValid = false;
      }
    }

    if (isValid) {
      axios.post('http://localhost:3000/register', details)
        .then(res => {
          if (res.data === "Exist") {
            toast.error("User already exists")
          }
          if (res.data === "E-Exist") {
            toast.error("Email already exists")
          }
          if (res.data === "M-Exist") {
            toast.error("Mobile already exists")
          }
          if (res.data === "Now Verify Your Email.") {
            setformvis(false)
            toast('Now Verify Your Email, OTP will be send to your email.',{ position: toast.POSITION.TOP_CENTER })
            setOtpVisible(true)
            correct()
          }
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  };

  const correct=()=>{
    setotpsend('')
    setotpresult('')
    axios.post('http://localhost:3000/sendotp', { email })
    .then((res) => {
      if (res.data === 'Sent OTP') {
        setOtpVisible(true);
        setotpsend('An OTP sent to your E-mail')
        // toast.success('OTP sent successfully!', { position: toast.POSITION.TOP_CENTER });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      setotpsend('Could not send OTP!')
      // toast.error("Couldn't send OTP", { position: toast.POSITION.TOP_CENTER });
    });
  }
  const isPasswordValid = (password) => {
    const specialCharacters = /[!@#$%^&*()_+[\]{};:'"<>,.?~\\-]/;
    const hasSpecialCharacter = specialCharacters.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasSpecialCharacter && hasUppercase && hasDigit;
  };

  const isEmailValid = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const reset = () => {
    setPasswordError('');
    setCPasswordError('');
    setEmailError('');
    setMobileError('');
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOtpSubmit = () => {
    axios.post('http://localhost:3000/verify', { ...details, otp })
      .then((res) => {
        if (res.data === 'Verified and Registered') {
          setotpresult(<p style={{color:"green"}}>Your Email Verified Succesfully!</p>)
         setTimeout(() => {
          setOtpVisible(false)
          toast.success('Registration successful! You can now login.', { position: toast.POSITION.TOP_CENTER });
          setNavigateToLogin(true);
         }, 2000);
        } else {
          
          setotpresult(<p style={{color:"red"}}>Invalid OTP or OTP time out!</p>)
          // toast.error('Invalid OTP', { position: toast.POSITION.TOP_CENTER });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Internal server error', { position: toast.POSITION.TOP_CENTER });
      });
  };
  return (
    <div className='stubody'>
      < p style={{position:"relative",top:'39px',left:"57.2%",fontSize:'25px',color:'green'}}><b>Note:</b>Enter a Valid Mobile Number only!</p>
      {
        formvis && <div className="full">
        <form onSubmit={submit} noValidate={true}>
          <p className="h2">Student Sign-Up</p>
          <div className="bb" id="b1">
            <label htmlFor="nam1">Student Name: </label>
            <input type="text" className="aa" id="nam1" placeholder="Student Name" onChange={(e) => setUser(e.target.value)} />
            <span className="icon">
              <FaUserCircle />
            </span>
          </div>
          <div className="bb" id="b3">
            <label htmlFor="password1">Password: </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="aa"
              id="password1"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span id="eye" onClick={PasswordVisibility}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <br />
            <span className="error">{passwordError}</span>
          </div>
          <div className="bb" id="b4">
            <label htmlFor="con-password">Confirm Password: </label>
            <input type="password" className="aa" id="con-password" placeholder="Confirm password" onChange={(e) => setCPassword(e.target.value)} />
            <span className="icon">
              <FaLock />
            </span>
            <br />
            <span className="error">{cpasswordError}</span>
          </div>
          <div className="bb" id="b5">
            <label htmlFor="e-mail">E-Mail: </label>
            <input type="email" className="aa" id="e-mail" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            <span className="icon">
              <FaEnvelope />
            </span>
            <br />
            <span className="error">{emailError}</span>
          </div>
          <div className="bb" id="b6">
            <label htmlFor="mobile">Mobile Number: </label>
            <input type="tel"  className="aa" id="mobile" placeholder="Mobile number" onChange={(e) => setMobile(e.target.value)} />
            <span className="icon">
              <FaPhoneAlt />
            </span>
            <br />
            <span className="error">{mobileError}</span>
          </div>

          <br />
          <input className="hh" id="submit" type="submit" value="SUBMIT" />
          <input className="hh" id="reset" type="reset" value="RESET" onClick={reset} />
          <Link to="/">
            <span className="close1"><FaRegWindowClose /></span>
          </Link>
        </form>
      </div>
      }

      {otpVisible && (
        <div className="mail">
          <Link to="/">
         <span className="closeotp"><FaRegWindowClose /></span>
       </Link>
          <p className="mail-ver">Email Verification</p>
          <span>{otpsend}</span>
          <div className="otp">
            <input
              className="inp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button className="sub" onClick={handleOtpSubmit}>
              Submit
            </button>
          </div>
          <span>{otpresult}</span>
          <button className="sub1" onClick={correct}>Resend</button>
        </div>
      )}
        {navigateToLogin && <Navigate to="/studentlogin" />}
    </div>
  );
};

export default Student;
