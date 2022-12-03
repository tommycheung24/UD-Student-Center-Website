import { useEffect, useState } from 'react';
import './home.css'
const perkinsExterior = require('../resources/Perkins-Exterior.png');
const trabantExterior = require('../resources/Trabant-Exterior.png');


export default function Home() {
    const [status, setStatus] = useState('Open');
    const [reminder, setReminder] = useState('Reminder');
    useEffect(()=>{
        let today = new Date();
        let schedule = getSchedule(today);

        if(today < schedule['open'] || today >= schedule['close']){
            let tomorrow = new Date(today);
            tomorrow.setDate(tomorrow+1);
            let tomorrowSchedule = getSchedule(tomorrow)
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
                <a href='https://sites.udel.edu/usc/buildings/perkins/'>
                    <img src={perkinsExterior} className='perkinsExterior' alt="perkins" />
                </a>
                <text className='status'>{status}</text>
                <text className='reminder'>{reminder}</text>
            </div>
            <div className="trabantContainer">
                <text className='title'>Trabant Student Center</text>
                <a href='https://sites.udel.edu/usc/buildings/trabant/'>
                    <img src={trabantExterior} className='trabantExterior' alt="trabant" />
                </a>
                <text className='status'>{status}</text>
                <text className='reminder'>{reminder}</text>
            </div>
        </div>
    );
}

function createTime(day, hours, minutes){
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes, 0, 0);
}

function getSchedule(day){
    let startHour = 7
    let endHour = 24
    if (day.getDate() === 0 || day.getDate() === 6){
        startHour = 9
    }
    return {'open': createTime(day, startHour,0), 'close': createTime(day, endHour,0)}
}


