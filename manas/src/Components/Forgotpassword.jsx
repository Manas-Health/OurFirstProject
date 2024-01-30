
// export default Forgotpassword;
import React, { useState } from 'react';
import '../Css/home.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import {
    FaRegWindowClose,
} from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';

const Forgotpassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [vis, setvis] = useState(false);
    const [donep, setdonep] = useState(false);

    const handleSendOTP = async () => {
        if (!email) {
            // Show a toast message if email is not entered
            toast.warning('Please enter your email first!', { position: toast.POSITION.TOP_CENTER });
            return;
        }
        setvis(true);

        try {
            // Make API call to send OTP (replace the URL and method with your actual implementation)
            const response = await fetch('http://localhost:3000/sendotpr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            toast(result.message, { position: toast.POSITION.TOP_CENTER });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            // Make API call to reset password (replace the URL and method with your actual implementation)
            const response = await fetch('http://localhost:3000/resetpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, newPassword }),
            });

            const result = await response.json();
            if (result.message === 'Password reset successfully') {
                setdonep(true);
            }
            toast(result.message, { position: toast.POSITION.TOP_CENTER });
        } catch (error) {
            console.error('Error:', error);
        }
        setvis(false);
    };

    // Check if password reset is successful and redirect to /studentlogin
    if (donep) {
        return <Navigate to="/studentlogin" />;
    }

    return (
        <div className='universalf'>
            <div className="forgot">
                <Link to="/studentlogin">
                    <span className="closef"><FaRegWindowClose /></span>
                </Link>
                <h2>Reset Password</h2>
                <label htmlFor='fem'><p className='fp'>Email:</p></label>
                <input
                    id='fem'
                    className='forgotinp'
                    type="email"
                    value={email}
                    placeholder='Enter your Registered Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="fhdotp" onClick={handleSendOTP}>Send OTP</button>

                <div className={`fgot2 ${vis ? '' : 'secfvis'}`}>
                    <label htmlFor='fotp'><p className='fp1'>OTP:</p></label>
                    <input
                        id='fotp'
                        className='forgotinp'
                        type="text"
                        value={otp}
                        placeholder='Enter the OTP'
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <label htmlFor='fps'><p className='fp2'>New Password:</p></label>
                    <input
                        id='fps'
                        className='forgotinp'
                        type="password"
                        value={newPassword}
                        placeholder='Create New Password'
                        onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <button className='fbtn' onClick={handleResetPassword}>Reset Password</button>
                </div>
            </div>
        </div>
    );
};

export default Forgotpassword;

