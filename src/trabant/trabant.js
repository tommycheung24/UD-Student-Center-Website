import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './trabant.css'
import { ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';

const stompingGrounds = require('../resources/stomping-grounds.png');
const chickfila = require('../resources/chick-fil-a.png');
const quiznos = require('../resources/quiznos.png')
const wildBlue = require('../resources/wildblue.png')
const greens = require('../resources/greens.png')

export default function Trabant() {
    const [stompingGroundsStatus, setstompingGroundsStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [chickfilaStatus, setChickfilaStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [greensStatus, setGreensStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [quiznosStatus, setQuiznosStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [wildBlueStatus, setWildBlueStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});

    useEffect(()=> {
        let today = new Date();
        let schedule = createSchedule(today);
        
        if (today < schedule['quiznos']['open'] || today >= schedule['quiznos']['close']){
            let reminder = 'Opens at ' + schedule['quiznos']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setQuiznosStatus({'status': 'Close', 'open': schedule['quiznos']['open'], 'close': schedule['quiznos']['close'], 'reminder' : reminder})
            setChickfilaStatus({'status': 'Close', 'open': schedule['chickfila']['open'], 'close': schedule['chickfila']['close'], 'reminder' : reminder})
            setGreensStatus({'status': 'Close', 'open': schedule['greens']['open'], 'close': schedule['greens']['close'], 'reminder' : reminder})
        }else{
            let reminder = 'Closes at ' + schedule['quiznos']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setQuiznosStatus({'status': 'Open', 'open': schedule['quiznos']['open'], 'close': schedule['quiznos']['close'], 'reminder' : reminder})
            setChickfilaStatus({'status': 'Open', 'open': schedule['chickfila']['open'], 'close': schedule['chickfila']['close'], 'reminder' : reminder})
            setGreensStatus({'status': 'Open', 'open': schedule['greens']['open'], 'close': schedule['greens']['close'], 'reminder' : reminder})
        }

        if (today < schedule['wildBlue']['open'] || today >= schedule['wildBlue']['close']){
            let reminder = 'Opens at ' + schedule['wildBlue']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setWildBlueStatus({'status': 'Close', 'open': schedule['wildBlue']['open'], 'close': schedule['wildBlue']['close'], 'reminder' :reminder})
        }else{
            let reminder = 'Closes at ' + schedule['wildBlue']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setWildBlueStatus({'status': 'Open', 'open': schedule['wildBlue']['open'], 'close': schedule['wildBlue']['close'], 'reminder' : reminder})

        }

        if (today < schedule['stompingGrounds']['open'] || today >= schedule['stompingGrounds']['close']){
            let reminder = 'Opens at ' + schedule['stompingGrounds']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setstompingGroundsStatus({'status': 'Close', 'open': schedule['stompingGrounds']['open'], 'close': schedule['stompingGrounds']['close'],  'reminder' : reminder})
        }else{
            let reminder = 'Closes at ' + schedule['stompingGrounds']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setstompingGroundsStatus({'status': 'Open', 'open': schedule['stompingGrounds']['open'], 'close': schedule['stompingGrounds']['close'], 'reminder' : reminder})
        }
    }, [])

    return (
        <List className='trabantList'>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/TrabantFoodCourt/StompingGrounds' className='trabantExternalLinks'>
                    <img alt='Stomping Grounds' src={stompingGrounds} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='trabantStatus'>{stompingGroundsStatus['status']}</text>} 
                    secondary={stompingGroundsStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/TrabantFoodCourt/Chick-fil-A' className='trabantExternalLinks'>
                    <img alt='Chick-Fil-A' src={chickfila} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='trabantStatus'>{chickfilaStatus['status']}</text>} 
                    secondary={chickfilaStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/TrabantFoodCourt/Quiznos' className='trabantExternalLinks'>
                    <img alt='Quiznos' src={quiznos} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='trabantStatus'>{quiznosStatus['status']}</text>} 
                    secondary={quiznosStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/TrabantFoodCourt/Konomi' className='trabantExternalLinks'>
                    <img alt="Wild Blue" src={wildBlue} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='trabantStatus'>{wildBlueStatus['status']}</text>} 
                    secondary={wildBlueStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/TrabantFoodCourt/GreenstoGo' className='trabantExternalLinks'>
                    <img alt="Greens to Go" src={greens} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='trabantStatus'>{greensStatus['status']}</text>} 
                    secondary={greensStatus['reminder']}
                />
            </ListItem>
        </List>
    );
}

function createSchedule(day){
    let schedule = {
        'stompingGrounds' : {'open': createTime(day, 7, 0), 'close': createTime(day, 19, 0)},
        'chickfila' : {'open': createTime(day, 11, 0), 'close': createTime(day, 23, 0)},
        'greens' : {'open': createTime(day, 11, 0), 'close': createTime(day, 23, 0)},
        'wildBlue' : {'open': createTime(day, 11, 0), 'close': createTime(day, 19, 0)},
        'quiznos' : {'open': createTime(day, 11, 0), 'close': createTime(day, 23, 0)},
    }

    if (day.getDay() === 0 || day.getDay() === 6){
        
        for (let i = 0; i < schedule.size(); ++i){
            schedule[i]['open'].setDate(schedule[i]['open'].getDate() + (day.getDay() === 0 ? 1 : 2));
            schedule[i]['close'].setDate(schedule[i]['close'].getDate() + (day.getDay() === 0 ? 1 : 2));
        }
    }

    return schedule;
}


function createTime(day, hours, minutes){
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes, 0, 0);
}