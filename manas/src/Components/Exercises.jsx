import React, { useContext } from 'react'
import ContextApi from './ContextApi'
import { Navigate } from 'react-router-dom'
const Exercises = () => {

    const { tokens } = useContext(ContextApi)

    if (!tokens.token) {
        return <Navigate to='/' />
    }
    return (

        <div className='hob'>
            <h1 style={{ textAlign: "center" }}>Exercise For Your Better Mental-Health</h1>
            <p style={{ textAlign: 'center', color: 'green', marginTop: '5px'}}><b>Note:</b>On moving cursor onto the images you can know little information about them.</p>
            <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '30px',rowGap:'17px',paddingLeft:'29px' }}>

                <div className="div" title="Walking increases mental alertness and positive mood.">
                    <img className="imagee" src="https://tse4.mm.bing.net/th?id=OIP.PtsUlc98DRjia15Z6BfGsgHaEJ&pid=Api&P=0&h=180" />
                    <p><b>Walking</b></p>
                </div>
                <div title="Running calms down the mind and relaxes both body and brain and gives you peace of mind" className="div">
                    <img className="imagee" src="https://img.freepik.com/free-photo/full-length-happy-sportswoman-jogging-road-morning-copy-space_637285-3764.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705449600&semt=ais" />
                    <p><b>Running</b></p>
                </div>
                <div title="Swimming can decrease anxiety." className="div">
                    <img className="imagee" src="https://tse3.explicit.bing.net/th?id=OIP.476kB6jrc-GlXgXBZxhWnAHaE8&pid=Api&P=0&h=180" />
                    <p><b>Swimming</b></p>
                </div>
                <div title="Aerobics exercise can ease the gloominess of depression,reduce the tension associated with anxiety and promote relaxation." className="div">
                    <img className="imagee" src="https://www.shutterstock.com/image-photo/group-young-sporty-people-doing-600nw-2123360942.jpg" />
                    <p><b>Aerobics</b></p>
                </div>
                <div title="Improves mood and may decreases negative thoughts" className="div">
                    <img className="imagee" src="https://fitpage.in/wp-content/uploads/2021/04/Article_Banner-1-34-1.jpg" />
                    <p><b>Workouts</b></p>
                </div>
                <div title="cycling improves memeory and improves creative thinking and stabilizes both pysical and mental health." className="div">
                    <img className="imagee" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQiZHP2MjlUpOqbO9uifvYjIBcT8EZOvJyg&usqp=CAU" />
                    <p><b>Cycling</b></p>
                </div>
                <div title="yoga increases body awareness ,relieves chronic stress patterns, relaxes mind and sharpness mind." className="div">
                    <img className="imagee" src="https://img.freepik.com/premium-photo/woman-doing-yoga-beach-with-mountain-background_865967-25537.jpg" />
                    <p><b>Yoga</b></p>
                </div>
                <div title="Indoor Cycling is best for reducing the stress and anxiety1 " className="div">
                    <img className="imagee" src="https://img.freepik.com/free-photo/people-doing-indoor-cycling_23-2149270249.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais" />
                    <p><b>Indoor Cycling</b></p>
                </div>
                <div title=" pilates may assist in the treatment of depression and anxiety by offering an oppurtunity to socalise,changing the chemicals in the brain providing distarction from negative thoughts." className="div">
                    <img className="imagee" src="https://media.istockphoto.com/id/1189386452/photo/adult-woman-practising-yoga-at-home.jpg?s=612x612&w=0&k=20&c=jNKlF5SMhfWHLzIyp2nfKHeCpAqaEpJE3p2dySvKLv8=" />
                    <p><b>Pilates</b></p>
                </div>
                <div title=" skipping improves blood circulation and improves mood and leave you with positive brain chemicals called endorphins." className="div">
                    <img className="imagee" src='https://tse2.mm.bing.net/th?id=OIP.2tcHENO3qbXGlL7xtNhw8wAAAA&pid=Api&P=0&h=180' />
                    <p><b>Skipping</b></p>
                </div>
                <div title=" Meditation may decreases stress ,improves memory and mental clarity." className="div">
                    <img className="imagee" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCPVpEJzaPedzisFzJxVHShyhEfneMmrZCNQ&usqp=CAU" />
                    <p><b>Meditation</b></p>
                </div>
                <div title="Tai-chi may help in reducing anxiety,depresion and blood presure.`" className="div" >
                    <img className="imagee" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSyWqVrqpxms3z-eL-iNdiNq94mGFcctaL6mR_rSR_w&s" />
                    <p><b>Tai-Chi</b></p>
                </div>
            </div>
        </div>
    )
}

export default Exercises


