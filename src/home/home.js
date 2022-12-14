import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
const perkinsExterior = require('../resources/Perkins-Exterior.png');
const trabantExterior = require('../resources/Trabant-Exterior.png');


export default function Home() {
    const [status, setStatus] = useState('Open');
    const [reminder, setReminder] = useState('Reminder');
    useEffect(()=>{
        let today = new Date();
        let schedule = createSchedule(today);

        if(today < schedule['open'] || today >= schedule['close']){
            let tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate()+1);
            let tomorrowSchedule = createSchedule(tomorrow)
            setStatus('Close');
            setReminder('Opens at ' +  tomorrowSchedule['open'].toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })  +  ' tomorrow')
        }else{
            setReminder('Closes at ' + schedule['close'].toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }))
        }

    }, [])

    return (
        <div className='buildings'>
            <div className="perkinsContainer">
                <text className='title'>Perkins Student Center</text>
                <Link to='/perkins'>
                    <img src={perkinsExterior} className='studentCenterExterior' alt="perkins"/>
                </Link>
                <text className='status'>{status}</text>
                <text className='reminder'>{reminder}</text>
            </div>
            <div className="trabantContainer">
                <text className='title'>Trabant Student Center</text>
                <Link to='/trabant'>
                    <img src={trabantExterior} className='studentCenterExterior' alt="trabant" />
                </Link>
                <text className='status'>{status}</text>
                <text className='reminder'>{reminder}</text>
            </div>
        </div>
    );
}

function createTime(day, hours, minutes){
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes, 0, 0);
}

function createSchedule(day){
    let startHour = 7
    let endHour = 24
    if (day.getDay() === 0 || day.getDay() === 6){
        startHour = 9
    }
    return {'open': createTime(day, startHour,0), 'close': createTime(day, endHour,0)}
}


