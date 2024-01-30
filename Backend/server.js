require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")
const { student, teacher ,reports} = require('./models')
const jwt = require('jsonwebtoken')
const middleware = require("./middleware")
const middleware2 = require('./middleware2')
const cors = require("cors")
const axios=require('axios')
const bcrypt=require('bcrypt')
var nm = require('nodemailer')
const app = express();

// Connecting with MongoDB using mongoose
mongoose.connect("mongodb://127.0.0.1:27017/manashealth")
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Error connecting to the database");
  });

// Instead of body parser
app.use(express.json());
app.use(cors({ origin: "*" }));

// Register route
app.post("/register", async (req, res) => {
  try {
    const { username, email, mobile } = req.body;
    let exist = await student.findOne({ username });
    let exist1 = await student.findOne({ email });
    let exist2 = await student.findOne({ mobile });

    if (exist) {
      console.log("user")
      return res.send("Exist");

    }
    if (exist1) {
      console.log("email")
      return res.send("E-Exist");
    }
    if (exist2) {
      console.log("m")
      return res.send("M-Exist");
    }
    else{
      return res.send("Now Verify Your Email.");
    }
  } catch (err) {
    console.error(err);
    return res.send("Internal server error");
  }
});

// Login route 

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    //Checking the existence of username and passowrd to login.

    let exist = await student.findOne({ username })

    if (!exist) {
      return res.send("User not found!")
    }

    const passwordMatch =await bcrypt.compare(password, exist.password)
    console.log(passwordMatch)
    if (!passwordMatch) {
      return res.send("password not matched!")
    }
    let payload = {
      user: {
        id: exist.id
      }
    }
    console.log(exist)
    jwt.sign(payload,/*key*/process.env.SECRETKEY1, { expiresIn: '24h' },
      (err, token) => {
        if (err) throw err
        return res.json({ token })

      })

  }
  catch (err) {
    console.log(err)
    return res.send("Server Error!")
  }
})

//Teacher login

app.post('/tlogin', async (req, res) => {
  try {
    const { tusername, tpassword } = req.body

    //Checking the existence of username and passowrd to login.

    let exist = await teacher.findOne({ tusername })
    if (!exist) {
      return res.send("User not found!")
    }
    if (tpassword!==exist.tpassword) {
      return res.send("password not matched!")
    }
    let payload = {
      user1: {
        id: exist.id
      }
    }
    jwt.sign(payload,/*key*/process.env.SECRETKEY2, { expiresIn: '24h' },
      (err, token1) => {
        if (err) throw err
        return res.json({ token1});
        
      })

  }
  catch (err) {
    console.log(err)
    return res.send("Server Error!")
  }
})


app.get('/home', middleware, async (req, res) => {
  try {
    let exist = await student.findById(req.user.id);
    if (!exist) {
      return res.send("User not found!");
    }
    res.json(exist);

  } catch (err) {
    console.log(err);
    return res.send("Server Error!");
  }
});


app.get('/teacher/home', middleware2, async (req, res) => {
  try {
    let exist = await teacher.findById(req.user.id);
    if (!exist) {
      return res.send("User not found!");
    }
    res.json(exist);

  } catch (err) {
    console.log(err);
    return res.send("Server Error!");
  }
});

// Server running at port 5000
app.get('/profile', middleware, async (req, res) => {
  try {
    let exist = await student.findById(req.user.id);
    if (!exist) {
      return res.send("User not found!");
    }

    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.send("Server Error!");
  }
});

let savedOTPS = {

};
var transporter = nm.createTransport(
  {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIN_EMAIL ,
      pass:process.env.PASS
    }
  }
);




app.post('/sendotp', async (req, res) => {
  try {
    let email = req.body.email;
    let digits = '0123456789';
    let limit = 4;
    let otp = '';
    for (let i = 0; i < limit; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }

    var options = {
      from:process.env.MAIN_EMAIL,
      to: `${email}`,
      subject: `Welcome to ManasHealth`,
      html: `<p>Enter the otp: ${otp} to verify your email address</p>`
    };

    await transporter.sendMail(options);

    savedOTPS[email] = otp;

    setTimeout(() => {
      delete savedOTPS[email];
    }, 120000);

    res.send('Sent OTP');
  } catch (error) {
    console.error(error);
    res.status(500).send("Couldn't send OTP");
  }
});

app.post('/verify', async (req, res) => {
  try {
    const { username, password, email, mobile } = req.body;
    let otpReceived = req.body.otp;
    let userEmail = req.body.email;

    const hashedPassword = await bcrypt.hash(password, 10);


    if (savedOTPS[userEmail] === otpReceived) {
      // Save user details to the database
      let newuser = new student({
        username,
        password: hashedPassword,
        email,
        mobile
      });

      await newuser.save();

      return res.send('Verified and Registered');
    } else {
      return res.send('Invalid OTP');
    }
  } catch (error) {
    console.error(error);
    return res.send('Internal server error');
  }
});


//------------------------------------------------------------------------

//............................Stress................................

// Endpoint to get questions from Flask server
app.get('/getQuestions', async (req, res) => {
  try {
    const flaskResponse = await axios.get('http://localhost:5000/questions');
    const questions = flaskResponse.data;
    res.json(questions);
  } catch (error) {
    console.error('Error getting questions from Flask:', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

// Endpoint to submit user responses to Flask server and get predictions
app.post('/submitResponses', async (req, res) => {
  try {
    const userResponses = req.body.user_responses;
    console.log(userResponses)

    // Send user_responses to Flask server for prediction
    const flaskResponse = await axios.post('http://localhost:5000/predict', { user_responses: userResponses });
    const prediction = flaskResponse.data;

    res.json(prediction);
  } catch (error) {
    console.error('Error submitting responses to Flask:', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

//.........................................Depression......................................

// Endpoint to get questions from Flask server
app.get('/getQuestionsd', async (req, res) => {
  try {
    const flaskResponsed = await axios.get('http://localhost:5000/questionsd');
    const questionsd = flaskResponsed.data;
    res.json(questionsd);
  } catch (error) {
    console.error('Error getting questions from Flask:', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

// Endpoint to submit user responses to Flask server and get predictions
app.post('/submitResponsesd', async (req, res) => {
  try {
    const userResponsesd = req.body.user_responsesd;
    console.log(userResponsesd)

    // Send user_responses to Flask server for prediction
    const flaskResponsed = await axios.post('http://localhost:5000/predictd', { user_responsesd: userResponsesd });
    const predictiond = flaskResponsed.data;

    res.json(predictiond);
  } catch (error) {
    console.error('Error submitting responses to Flask:', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});


//.........................................Anxiety......................................

// Endpoint to get questions from Flask server
app.get('/getQuestionsa', async (req, res) => {
  try {
    const flaskResponsea = await axios.get('http://localhost:5000/questionsa');
    const questionsa = flaskResponsea.data;
    res.json(questionsa);
  } catch (error) {
    console.error('Error getting questions from Flask:', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

// Endpoint to submit user responses to Flask server and get predictions
app.post('/submitResponsesa', async (req, res) => {
  try {
    const userResponsesa= req.body.user_responsesa;
    console.log(userResponsesa)

    // Send user_responses to Flask server for prediction
    const flaskResponsea = await axios.post('http://localhost:5000/predicta', { user_responsesa: userResponsesa });
    const predictiona= flaskResponsea.data;

    res.json(predictiona);
  } catch (error) {
    console.error('Error submitting responses to Flask:', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

//---------------------------------------------------------------

//Getting email for report
app.get('/getemailforreport', middleware, async (req, res) => {
  try {
    let exist = await student.findById(req.user.id);
    if (!exist) {
      return res.send("User not found!");
    }
    // console.log(exist,'From getemailforreport')
    res.json(exist);
  } catch (err) {
    console.log(err);
    return res.send("Server Error!");
  }
});



app.post('/storeresult', async (req, res) => {
  try {
    const email = req.body.email;
    const report = req.body.report;
    const condition = req.body.condition;

    console.log(email, report, condition);

    let reportData = new reports({
      email,
      report,
      condition,
    });

    await reportData.save();
    
    res.send("Report stored in db");
  } catch (error) {
    console.error('Unable to store results in db', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

//Getting details of student to show in teacher home page
app.get('/studentdetails', async (req, res) => {
  try{
    let studetails = await student.find()
    res.send(studetails)

  }
  catch(err){
console.log(err)
  }
  // res.json(results);
});


//finding studentreports
app.post('/findstudentreports', async (req, res) => {
  const studentemail=req.body.studentemail
  // console.log(studentemail)
  try {
    let stuemail = await reports.find({email:studentemail})
    // console.log(stuemail)
   res.send(stuemail)
  } catch (error) {
    console.error('Error finding student reports', error.message);
    res.json({ error: 'Internal Server Error' });
  }
});

//------------------------------------Forgot password

let saved= {

};
app.post('/sendotpr', async (req, res) => {
  const { email } = req.body;

  const user = await student.findOne({ email });

  if (!user) {
      return res.json({ message: 'User not found' });
  }

  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  saved[email] = otp;

    setTimeout(() => {
      delete saved[email];
    }, 120000);

  // Send the OTP to the user's email
  const transporter1 = nm.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIN_EMAIL,
      pass: process.env.PASS
    }
  });

  const mailOptions = {
      from: process.env.MAIN_EMAIL,
      to: email,
      subject: 'Your OTP for Password Reset',
      text: `Your OTP is: ${otp}`,
  };

  transporter1.sendMail(mailOptions, (error) => {
      if (error) {
          return res.json({ message: 'Error sending OTP email' });
      }
      res.json({ message: 'OTP sent successfully' });
  });
});

// Endpoint to reset password using OTP
app.post('/resetpassword', async (req, res) => {
  const { email, otp, newPassword } = req.body;

  const user = await student.findOne({ email });
  const hashedPassword = await bcrypt.hash(newPassword, 10);


  if (!user || saved[email] !== otp) {
      return res.json({ message: 'Invalid or expired OTP' });
  }

  // Update the password and clear the OTP fields
  user.password = hashedPassword;
  user.otp = undefined;
  await user.save();

  res.status(200).json({ message: 'Password reset successfully' });
});


const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

