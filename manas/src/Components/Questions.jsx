

import React, { useState, useEffect, useContext } from "react";
import ContextApi from "./ContextApi";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Questions = () => {
  const [data, setData] = useState(null);

  const { tokens, setresult, result} = useContext(ContextApi);
  const [questions, setQuestions] = useState([])
  const [questionsd, setQuestionsd] = useState([])
  const [questionsa, setQuestionsa] = useState([])
  const [stressvis, setstressvis] = useState(false)
  const [depressionvis, setdepressionvis] = useState(false)
  const [anxeityvis, setanxeityvis] = useState(false)
  const [values, setvalues] = useState([4, 4, 4, 4, 4, 4, 4])
  const [values1, setvalues1] = useState([4, 4, 4, 4, 4, 4, 4])
  const [values2, setvalues2] = useState([4, 4, 4, 4, 4, 4, 4])
  const [submit, setsubmit] = useState(false)
  const [submit1, setsubmit1] = useState(false)
  const [submit2, setsubmit2] = useState(false)
  const [submitvis, setsubmitvis] = useState(false)
  const [submitvis1, setsubmitvis1] = useState(false)
  const [submitvis2, setsubmitvis2] = useState(false)
  const user=JSON.parse(localStorage.getItem('user'))
  const [lastStressTestDate, setLastStressTestDate] = useState(localStorage.getItem(`lastStressTestDate${user}`) );
  const [lastDepressionTestDate, setLastDepressionTestDate] = useState(localStorage.getItem(`lastDepressionTestDate${user}`) );
  const [lastAnxietyTestDate, setLastAnxietyTestDate] = useState(localStorage.getItem(`lastAnxietyTestDate${user}`) );


  const handleoptionchange = (questionKey, optionValue) => {
    setvalues(prevValues => {
      const updatedValues = [...prevValues];
      updatedValues[questionKey] = optionValue
      return updatedValues;
    });
  };
  const handleoptionchange1 = (questionKey, optionValue) => {
    setvalues1(prevValues => {
      const updatedValues = [...prevValues];
      updatedValues[questionKey] = optionValue
      return updatedValues;
    });
  };
  const handleoptionchange2 = (questionKey, optionValue) => {
    setvalues2(prevValues => {
      const updatedValues = [...prevValues];
      updatedValues[questionKey] = optionValue
      return updatedValues;
    });
  };


  //--------------------------------------Stress--------------------------------------------------
  useEffect(() => {
    const getQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getQuestions');

        // Convert object to array using Object.value
        setQuestions(Array(response.data));
      } catch (error) {
        console.error('Error getting questions:', error.message);
      }
    };

    getQuestions(questions);
  }, []);

  useEffect(() => {
    const submitres = async () => {
      if (submit) {
        await axios.post('http://localhost:3000/submitResponses', { user_responses: values })
          .then(res => {
            setresult((prevResults) => [...prevResults, { a: 'Stress', b: res.data }]);
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    submitres()
  }, [submit]);

  // ----------Depression
  useEffect(() => {
    const getQuestionsd = async () => {
      try {
        const response1 = await axios.get('http://localhost:3000/getQuestionsd');

        // Convert object to array using Object.value
        setQuestionsd(Array(response1.data));
      } catch (error) {
        console.error('Error getting questions:', error.message);
      }
    };

    getQuestionsd(questionsd);
  }, []);

  useEffect(() => {
    const submitresd = async () => {
      if (submit1) {
        await axios.post('http://localhost:3000/submitResponsesd', { user_responsesd: values1 })
          .then(res => {
            setresult((prevResults) => [...prevResults, { a: 'Depression', b: res.data }]);

          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    submitresd()
  }, [submit1]);

  // Anxiety--------------------------
  useEffect(() => {
    const getQuestionsa = async () => {
      try {
        const response2 = await axios.get('http://localhost:3000/getQuestionsa');

        // Convert object to array using Object.value
        setQuestionsa(Array(response2.data));
      } catch (error) {
        console.error('Error getting questions:', error.message);
      }
    };

    getQuestionsa(questionsa);
  }, []);

  useEffect(() => {
    const submitresa = async () => {
      if (submit2) {

        await axios.post('http://localhost:3000/submitResponsesa', { user_responsesa: values2 })
          .then(res => {
            setresult((prevResults) => [...prevResults, { a: 'Anxiety', b: res.data }]);

          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    submitresa()
  }, [submit2]);




  const submits = () => {
    console.log('1st')
    { console.log(values, "1st") }
    if (values.some(value => value === 4)) { toast.warning("Enter all responses before submitting..", { position: toast.POSITION.TOP_CENTER }) }
    else {
      toast.success("Responses Submitted Succesfuly", { position: toast.POSITION.TOP_CENTER })
      setsubmit(true)
      setsubmit1(false)
      setsubmit2(false)
      setstressvis(false)
      setsubmitvis(!submitvis)

      const currentDate = new Date().toISOString();
      setLastStressTestDate(currentDate);
     localStorage.setItem(`lastStressTestDate${user}`, currentDate);
    }
  }

  const submitd = () => {
    console.log('2nd')
    { console.log(values1, "2nd") }
    if (values1.some(value => value === 4)) { toast.warning("Enter all responses before submit..", { position: toast.POSITION.TOP_CENTER }) }
    else {
      toast.success("Responses Submitted Succesfuly", { position: toast.POSITION.TOP_CENTER })
      setsubmit1(true)
      setsubmit(false)
      setsubmit2(false)
      setdepressionvis(false)
      setsubmitvis1(!submitvis1)


      const currentDate = new Date().toISOString();
      setLastDepressionTestDate(currentDate);
      localStorage.setItem(`lastDepressionTestDate${user}`, currentDate);
    }

  }

  const submita = async () => {
    console.log('3rd')
    { console.log(values2, "3rd") }
    if (values2.some(value => value === 4)) { toast.warning("Enter all Responses before submitting..", { position: toast.POSITION.TOP_CENTER }) }
    else {
      toast.success("Responses Submitted Succesfuly", { position: toast.POSITION.TOP_CENTER })
      setsubmit2(true)
      setsubmit(false)
      setsubmit1(false)
      setanxeityvis(false)
      setsubmitvis2(!submitvis2)

      const currentDate = new Date().toISOString();
      setLastAnxietyTestDate(currentDate);
      localStorage.setItem(`lastAnxietyTestDate${user}`, currentDate);
    }
  }

  // Helper function to check if two dates are the same day
  const isExactlyOneWeekApart = (date1, date2) => {
    const millisecondsInOneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    const millisecondsInOneWeek = 7 * millisecondsInOneDay; // 7 days in milliseconds

    const difference = Math.abs(date1 - date2);
    if(difference===millisecondsInOneWeek){
      localStorage.removeItem(`lastStressTestDate${user}`)
      localStorage.removeItem(`lastDepressionTestDate${user}`)
      localStorage.removeItem(`lastAnxietyTestDate${user}`)
    }
    return difference !== millisecondsInOneWeek;
};

  // console.log(questions)

  //open any div
  const openDiv = (divName) => {

    if (divName === 'stress') {

      if (lastStressTestDate && isExactlyOneWeekApart(new Date(), new Date(lastStressTestDate))) {
        setstressvis(false)
        setdepressionvis(false)
        setanxeityvis(false)
        toast.warning("You can only take the stress test once a week.", { position: toast.POSITION.TOP_CENTER });
        setsubmitvis(false)
        setsubmitvis1(false)
        setsubmitvis2(false)
      }
      else {

        setstressvis(!stressvis)
        setdepressionvis(false)
        setanxeityvis(false)
        setsubmitvis(!submitvis)
        setsubmitvis1(false)
        setsubmitvis2(false)
      }
    };
    if (divName === 'depression') {

      if (lastDepressionTestDate && isExactlyOneWeekApart(new Date(), new Date(lastDepressionTestDate))) {
        setdepressionvis(false)
        setstressvis(false)
        setanxeityvis(false)
        toast.warning("You can only take the depression test once a week.", { position: toast.POSITION.TOP_CENTER });
        setsubmitvis1(false)
        setsubmitvis(false)
        setsubmitvis2(false)
      }
      else {

        setdepressionvis(!depressionvis)
        setstressvis(false)
        setanxeityvis(false)
        setsubmitvis1(!submitvis1)
        setsubmitvis(false)
        setsubmitvis2(false)

      }
    };
    if (divName === 'anxiety') {
      if (lastAnxietyTestDate && isExactlyOneWeekApart(new Date(), new Date(lastAnxietyTestDate))) {
        setanxeityvis(false)
        setdepressionvis(false)
        setstressvis(false)
        toast.warning("You can only take the anxiety test once a week.", { position: toast.POSITION.TOP_CENTER });
        setsubmitvis2(false)
        setsubmitvis1(false)
        setsubmitvis(false)
      }
      else {

        setanxeityvis(!anxeityvis)

        setdepressionvis(false)
        setstressvis(false)
        setsubmitvis2(!submitvis2)
        setsubmitvis(false)
        setsubmitvis1(false)

      }
    };

  }

  // Close all divs
  // const closeAllDivs = () => {
  //   setstressvis(false);
  //   setExercisesVis(false);
  //   setfoodVis(false);
  // }
  // Getting email for storing results
  useEffect(() => {
    axios.get('http://localhost:3000/getemailforreport', {
      headers: {
        'x-token': tokens.token,
      },
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tokens.token, submit, submit1, submit2]);

  // Storing results


  useEffect(() => {
    const storeResult = async () => {
      try {
        if (data && result.length !== 0 && (submit || submit1 || submit2)) {

          var latestResult = result[result.length - 1];


          console.log(result, "yessssssssssssssss")
          console.log(latestResult, "latest")
          const response = await axios.post('http://localhost:3000/storeresult', {
            email: data.email,
            report: result[result.length - 1].b.result,
            condition: result[result.length - 1].a,
          });
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error storing result:', error.message);
      }
    };

    storeResult();
  }, [tokens.token, result]);

  if (!tokens.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className='ques' >
      <p style={{position:'absolute',right:'27%',top:'49%',fontSize:'27px',opacity:'0.5'}}>No Questions Available </p>
      <div className="ads">
        <h1 className="predh">Mental Health Predictions</h1>
        <div className="sda">
          <button onClick={() => { openDiv('stress') }} className={`${stressvis ? 'hover' : 'pred'}`}>Stress Prediction</button>
          <button onClick={() => { openDiv('depression') }} className={`${depressionvis ? 'hover' : 'pred'}`}>Depression Prediction</button>
          <button onClick={() => { openDiv('anxiety') }} className={`${anxeityvis ? 'hover' : 'pred'}`}>Anxiety Prediction</button>

        </div>
        <div>
          <div className="predresult">
            <div className="btndiv">{submitvis && <button onClick={submits}>Submit Responses</button>}</div>
            <div className="btndiv">{submitvis1 && <button onClick={submitd}>Submit Responses</button>}</div>
            <div className="btndiv">{submitvis2 && <button onClick={submita}>Submit Responses</button>}</div>

            {/* <p className="Resshow">The Predicted Result is:<br/><h2>{submit && result.result}</h2></p> */}
          </div>

          {submit && <Link to={`/report`}><span className="viewreport">View Report</span></Link>}
          {submit1 && <Link to={`/report`}><span className="viewreport">View Report</span></Link>}
          {submit2 && <Link to={`/report`}><span className="viewreport">View Report</span></Link>}


        </div>
      </div>

      {questions.map((key) => {
        return <div className={`questions ${stressvis ? '' : 'quesvis'}`}>
          <div className="qt"><p>{key.questions.a}</p><div className="radio"><span><input id={`opt${1}`} type="radio" name="one" onChange={(e) => { handleoptionchange(0, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${1}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${8}`} type="radio" name="one" onChange={(e) => { handleoptionchange(0, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${8}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${15}`} type="radio" name="one" onChange={(e) => { handleoptionchange(0, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${15}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${22}`} type="radio" name="one" onChange={(e) => { handleoptionchange(0, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${22}`}>{key.questions.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key.questions.b}</p><div className="radio"><span><input id={`opt${2}`} type="radio" name="two" onChange={(e) => { handleoptionchange(1, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${2}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${9}`} type="radio" name="two" onChange={(e) => { handleoptionchange(1, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${9}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${16}`} type="radio" name="two" onChange={(e) => { handleoptionchange(1, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${16}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${23}`} type="radio" name="two" onChange={(e) => { handleoptionchange(1, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${23}`}>{key.questions.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key.questions.c}</p><div className="radio"><span><input id={`opt${3}`} type="radio" name="three" onChange={(e) => { handleoptionchange(2, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${3}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${10}`} type="radio" name="three" onChange={(e) => { handleoptionchange(2, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${10}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${17}`} type="radio" name="three" onChange={(e) => { handleoptionchange(2, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${17}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${24}`} type="radio" name="three" onChange={(e) => { handleoptionchange(2, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${24}`}>{key.questions.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key.questions.d}</p><div className="radio"><span><input id={`opt${4}`} type="radio" name="four" onChange={(e) => { handleoptionchange(3, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${4}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${11}`} type="radio" name="four" onChange={(e) => { handleoptionchange(3, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${11}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${18}`} type="radio" name="four" onChange={(e) => { handleoptionchange(3, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${18}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${25}`} type="radio" name="four" onChange={(e) => { handleoptionchange(3, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${25}`}>{key.questions.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key.questions.e}</p><div className="radio"><span><input id={`opt${5}`} type="radio" name="five" onChange={(e) => { handleoptionchange(4, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${5}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${12}`} type="radio" name="five" onChange={(e) => { handleoptionchange(4, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${12}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${19}`} type="radio" name="five" onChange={(e) => { handleoptionchange(4, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${19}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${26}`} type="radio" name="five" onChange={(e) => { handleoptionchange(4, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${26}`}>{key.questions.aa[3]}</label></span></div></div>

          <div className="qt"><p>{key.questions.f}</p><div className="radio"><span><input id={`opt${6}`} type="radio" name="six" onChange={(e) => { handleoptionchange(5, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${6}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${13}`} type="radio" name="six" onChange={(e) => { handleoptionchange(5, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${13}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${20}`} type="radio" name="six" onChange={(e) => { handleoptionchange(5, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${20}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${27}`} type="radio" name="six" onChange={(e) => { handleoptionchange(5, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${27}`}>{key.questions.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key.questions.g}</p><div className="radio"><span><input id={`opt${7}`} type="radio" name="seven" onChange={(e) => { handleoptionchange(6, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${7}`}>{key.questions.aa[0]}</label></span><span><input id={`opt${14}`} type="radio" name="seven" onChange={(e) => { handleoptionchange(6, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${14}`}>{key.questions.aa[1]}</label></span><span><input id={`opt${21}`} type="radio" name="seven" onChange={(e) => { handleoptionchange(6, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${21}`}>{key.questions.aa[2]}</label></span><span><input id={`opt${28}`} type="radio" name="seven" onChange={(e) => { handleoptionchange(6, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${28}`}>{key.questions.aa[3]}</label></span></div></div>
        </div>
      })}

      {questionsd.map((key1) => {
        return <div className={`questions1 ${depressionvis ? '' : 'quesvis'}`}>
          <div className="qt"><p>{key1.questionsd.a}</p><div className="radio"><span><input id={`opt${29}`} type="radio" name="one1" onChange={(e) => { handleoptionchange1(0, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${29}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${36}`} type="radio" name="one1" onChange={(e) => { handleoptionchange1(0, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${36}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${43}`} type="radio" name="one1" onChange={(e) => { handleoptionchange1(0, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${43}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${50}`} type="radio" name="one1" onChange={(e) => { handleoptionchange1(0, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${50}`}>{key1.questionsd.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key1.questionsd.b}</p><div className="radio"><span><input id={`opt${30}`} type="radio" name="two2" onChange={(e) => { handleoptionchange1(1, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${30}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${37}`} type="radio" name="two2" onChange={(e) => { handleoptionchange1(1, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${37}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${44}`} type="radio" name="two2" onChange={(e) => { handleoptionchange1(1, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${44}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${51}`} type="radio" name="two2" onChange={(e) => { handleoptionchange1(1, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${51}`}>{key1.questionsd.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key1.questionsd.c}</p><div className="radio"><span><input id={`opt${31}`} type="radio" name="three3" onChange={(e) => { handleoptionchange1(2, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${31}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${38}`} type="radio" name="three3" onChange={(e) => { handleoptionchange1(2, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${38}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${45}`} type="radio" name="three3" onChange={(e) => { handleoptionchange1(2, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${45}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${52}`} type="radio" name="three3" onChange={(e) => { handleoptionchange1(2, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${52}`}>{key1.questionsd.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key1.questionsd.d}</p><div className="radio"><span><input id={`opt${32}`} type="radio" name="four4" onChange={(e) => { handleoptionchange1(3, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${32}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${39}`} type="radio" name="four4" onChange={(e) => { handleoptionchange1(3, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${39}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${46}`} type="radio" name="four4" onChange={(e) => { handleoptionchange1(3, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${46}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${53}`} type="radio" name="four4" onChange={(e) => { handleoptionchange1(3, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${53}`}>{key1.questionsd.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key1.questionsd.e}</p><div className="radio"><span><input id={`opt${33}`} type="radio" name="five5" onChange={(e) => { handleoptionchange1(4, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${33}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${40}`} type="radio" name="five5" onChange={(e) => { handleoptionchange1(4, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${40}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${47}`} type="radio" name="five5" onChange={(e) => { handleoptionchange1(4, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${47}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${54}`} type="radio" name="five5" onChange={(e) => { handleoptionchange1(4, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${54}`}>{key1.questionsd.aa[3]}</label></span></div></div>

          <div className="qt"><p>{key1.questionsd.f}</p><div className="radio"><span><input id={`opt${34}`} type="radio" name="six6" onChange={(e) => { handleoptionchange1(5, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${34}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${41}`} type="radio" name="six6" onChange={(e) => { handleoptionchange1(5, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${41}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${48}`} type="radio" name="six6" onChange={(e) => { handleoptionchange1(5, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${48}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${55}`} type="radio" name="six6" onChange={(e) => { handleoptionchange1(5, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${55}`}>{key1.questionsd.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key1.questionsd.g}</p><div className="radio"><span><input id={`opt${35}`} type="radio" name="seven7" onChange={(e) => { handleoptionchange1(6, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${35}`}>{key1.questionsd.aa[0]}</label></span><span><input id={`opt${42}`} type="radio" name="seven7" onChange={(e) => { handleoptionchange1(6, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${42}`}>{key1.questionsd.aa[1]}</label></span><span><input id={`opt${49}`} type="radio" name="seven7" onChange={(e) => { handleoptionchange1(6, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${49}`}>{key1.questionsd.aa[2]}</label></span><span><input id={`opt${56}`} type="radio" name="seven7" onChange={(e) => { handleoptionchange1(6, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${56}`}>{key1.questionsd.aa[3]}</label></span></div></div>
        </div>
      })}


      {questionsa.map((key2) => {
        return <div className={`questions2 ${anxeityvis ? '' : 'quesvis'}`}>
          <div className="qt"><p>{key2.questionsa.a}</p><div className="radio"><span><input id={`opt${57}`} type="radio" name="onea" onChange={(e) => { handleoptionchange2(0, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${57}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${64}`} type="radio" name="onea" onChange={(e) => { handleoptionchange2(0, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${64}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${71}`} type="radio" name="onea" onChange={(e) => { handleoptionchange2(0, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${71}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${78}`} type="radio" name="onea" onChange={(e) => { handleoptionchange2(0, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${78}`}>{key2.questionsa.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key2.questionsa.b}</p><div className="radio"><span><input id={`opt${58}`} type="radio" name="twoa" onChange={(e) => { handleoptionchange2(1, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${58}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${65}`} type="radio" name="twoa" onChange={(e) => { handleoptionchange2(1, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${65}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${72}`} type="radio" name="twoa" onChange={(e) => { handleoptionchange2(1, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${72}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${79}`} type="radio" name="twoa" onChange={(e) => { handleoptionchange2(1, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${79}`}>{key2.questionsa.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key2.questionsa.c}</p><div className="radio"><span><input id={`opt${59}`} type="radio" name="threea" onChange={(e) => { handleoptionchange2(2, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${59}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${66}`} type="radio" name="threea" onChange={(e) => { handleoptionchange2(2, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${66}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${73}`} type="radio" name="threea" onChange={(e) => { handleoptionchange2(2, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${73}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${80}`} type="radio" name="threea" onChange={(e) => { handleoptionchange2(2, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${80}`}>{key2.questionsa.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key2.questionsa.d}</p><div className="radio"><span><input id={`opt${60}`} type="radio" name="foura" onChange={(e) => { handleoptionchange2(3, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${60}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${67}`} type="radio" name="foura" onChange={(e) => { handleoptionchange2(3, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${67}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${74}`} type="radio" name="foura" onChange={(e) => { handleoptionchange2(3, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${74}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${81}`} type="radio" name="foura" onChange={(e) => { handleoptionchange2(3, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${81}`}>{key2.questionsa.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key2.questionsa.e}</p><div className="radio"><span><input id={`opt${61}`} type="radio" name="fivea" onChange={(e) => { handleoptionchange2(4, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${61}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${68}`} type="radio" name="fivea" onChange={(e) => { handleoptionchange2(4, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${68}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${75}`} type="radio" name="fivea" onChange={(e) => { handleoptionchange2(4, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${75}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${82}`} type="radio" name="fivea" onChange={(e) => { handleoptionchange2(4, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${82}`}>{key2.questionsa.aa[3]}</label></span></div></div>

          <div className="qt"><p>{key2.questionsa.f}</p><div className="radio"><span><input id={`opt${62}`} type="radio" name="sixa" onChange={(e) => { handleoptionchange2(5, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${62}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${69}`} type="radio" name="sixa" onChange={(e) => { handleoptionchange2(5, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${69}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${76}`} type="radio" name="sixa" onChange={(e) => { handleoptionchange2(5, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${76}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${83}`} type="radio" name="sixa" onChange={(e) => { handleoptionchange2(5, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${83}`}>{key2.questionsa.aa[3]}</label></span></div></div>
          <div className="qt"><p>{key2.questionsa.g}</p><div className="radio"><span><input id={`opt${63}`} type="radio" name="sevena" onChange={(e) => { handleoptionchange2(6, parseInt(e.target.value, 10)) }} value={0} /><label htmlFor={`opt${63}`}>{key2.questionsa.aa[0]}</label></span><span><input id={`opt${70}`} type="radio" name="sevena" onChange={(e) => { handleoptionchange2(6, parseInt(e.target.value, 10)) }} value={1} /><label htmlFor={`opt${70}`}>{key2.questionsa.aa[1]}</label></span><span><input id={`opt${77}`} type="radio" name="sevena" onChange={(e) => { handleoptionchange2(6, parseInt(e.target.value, 10)) }} value={2} /><label htmlFor={`opt${77}`}>{key2.questionsa.aa[2]}</label></span><span><input id={`opt${84}`} type="radio" name="sevena" onChange={(e) => { handleoptionchange2(6, parseInt(e.target.value, 10)) }} value={3} /><label htmlFor={`opt${84}`}>{key2.questionsa.aa[3]}</label></span></div></div>
        </div>
      })}
    </div>
  );
};

export default Questions;