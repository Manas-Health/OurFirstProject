import React,{useContext} from 'react'
import ContextApi from './ContextApi'
import { Navigate } from 'react-router-dom'
const Food = () => {
    const { tokens } = useContext(ContextApi)

    if (!tokens.token) {
        return <Navigate to='/' />
    }
  return (

    <div className='hob'>
      <h1 style={{textAlign:"center"}}>Food For Your Proper Mental-Health</h1>
      <p style={{textAlign:'center',color:'green',marginTop:'5px'}}><b>Note:</b>On moving cursor onto the images you can know little information about them.</p>

       <div style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr 1fr',marginTop:'30px',rowGap:'17px'}}>
        
            <div className="div"title="Broccoli may slow mental decline and support healthy brain and nervous tissue function.">
                <img className="imagee"src="https://tse4.mm.bing.net/th?id=OIP.os6rT89mcI-ImBoB9sns2gHaEm&pid=Api&P=0&h=180"/>
                <p><b>Broccoli</b></p>
            </div>
            <div title="Kiwi is very ggod for mental health and brain health." className="div">
                <img className="imagee"src="https://tse1.mm.bing.net/th?id=OIP.Sq672O7CrJr4mi4zNTYi0AHaFj&pid=Api&P=0&h=180"/>
                <p><b>Kiwi</b></p>
            </div>
            <div title="Oats help to reduce regulate blood sugar levels and provide a steady supply of energy in brain." className="div">
               <img className="imagee"src="https://tse2.mm.bing.net/th?id=OIP.Jp621kL1Aw41Y2bmosJ7GQHaE8&pid=Api&P=0&h=180"/>
               <p><b>Oats</b></p>
            </div>
            <div title="Seafood makes better impulse control, less anxiety and mood stabilizer." className="div">
                <img className="imagee"src="https://tse1.mm.bing.net/th?id=OIP.WykxbL5TkWImnNdBTkuw0wHaE8&pid=Api&P=0&h=180"/>
                <p><b>Sea Food</b></p>
            </div>
            <div title="The people who consume more fruits and vegetables have a lower incidence of mental health disorders." className="div">
                <img className="imagee"src="https://tse3.mm.bing.net/th?id=OIP.Dq4SjBjz2b9H9ow82I7e0wHaE8&pid=Api&P=0&h=180"/>
                <p><b>Veggis and Fruits</b></p>
            </div>
            <div title="Nuts and seeds are powerhouse of nutrients that can greatly improve mental health and brain functioning." className="div">
                <img className="imagee" src="https://tse2.mm.bing.net/th?id=OIP.4S6F2L2oOASrW0vGROaKWwHaFB&pid=Api&P=0&h=180"/>
                <p><b>Nuts and Seeds</b></p>
            </div>
            <div title="Leafy greens are considered power foods that boost cognitive function,which includes memory, decision-making abilities." className="div">
               <img className="imagee"src="https://tse3.mm.bing.net/th?id=OIP.f5SX9FpHL8EV-QL7SdDYdgHaE8&pid=Api&P=0&h=180"/>
               <p><b>Leafy Greens</b></p>
            </div>
            <div title="The combination of vitamin B2 , B12 , choline , iron and tryptophan are all associated with helping reduce the risk of anxiety , symptoms of depression and naturally aiding sleep" className="div">
               <img  className="imagee"src="https://tse4.explicit.bing.net/th?id=OIP.nyE5FK46R-7sO14sR1DF0QHaE7&pid=Api&P=0&h=180"/>
               <p><b>Eggs</b></p>
            </div>
            <div title=" According to Be Brain Fit, olive oil plays a role in reduce rsik of depression and better brain health" className="div">
                <img className="imagee"src="https://tse3.mm.bing.net/th?id=OIP.4m1VupwSjwmDW31CFVwUFwHaE8&pid=Api&P=0&h=180"/>
                <p><b>Olives</b></p>
            </div>
            <div title="Vitamin B12,Creatine and taurine all play a significant role in the reduction of depression." className="div">
               <img className="imagee" src="https://tse2.mm.bing.net/th?id=OIP.yky0jSvNNVk7bRUuKVz09AHaFU&pid=Api&P=0&h=180" />
               <p><b>Meat</b></p>
            </div>
            <div title="Dark Chocolate can prevent depressive symptoms " className="div">
                <img className="imagee" src="https://tse1.mm.bing.net/th?id=OIP.V0B7dCbXWUsSmvTrmkhGiAHaE8&pid=Api&P=0&h=180"/>
                <p><b>Dark Chocolate</b></p>
            </div>
            <div title="Fermented Diary helps in groeing evidence supporting the role of probitics in regulating the brain function and subsequent emotional behaviour" className="div" >
                <img className="imagee"src="https://mejeritekniskselskab.dk/sites/default/files/dms/colourbox12461827_web.jpg"/>
                <p><b>Fermented Diary</b></p>
            </div>
        </div>
    </div>
  )
}

export default Food


