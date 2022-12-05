import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import './perkins.css'
import { ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
const henZone = require('../resources/Hen-Zone.png');
const eSportsArena = require('../resources/esport-arena.png');
const dunkin = require('../resources/dunkin.png')
const dennys = require('../resources/dennys.png')
const flip = require('../resources/flip-kitchen.png')

export default function Perkins() {
    const [henZoneAndESportStatus, setHenZoneAndESportStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [flipStatus, setFlipStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [dunkinStatus, setDunkinStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});
    const [dennysStatus, setDennysStatus] = useState({'status': 'Open', 'open': Date, 'close': Date, 'reminder' : ''});

    useEffect(()=> {
        let today = new Date();
        let schedule = createSchedule(today);
        
        if (today < schedule['dunkin']['open'] || today >= schedule['dunkin']['close']){
            let reminder = 'Opens at ' + schedule['dunkin']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setDunkinStatus({'status': 'Close', 'open': schedule['dunkin']['open'], 'close': schedule['dunkin']['close'], 'reminder' : reminder})
        }else{
            let reminder = 'Closes at ' + schedule['dunkin']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setDunkinStatus({'status': 'Open', 'open': schedule['dunkin']['open'], 'close': schedule['dunkin']['close'], 'reminder' : reminder})
        }

        if (today < schedule['dennys']['open'] || today >= schedule['dennys']['close']){
            let reminder = 'Opens at ' + schedule['dennys']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setDennysStatus({'status': 'Close', 'open': schedule['dennys']['open'], 'close': schedule['dennys']['close'], 'reminder' :reminder})
        }else{
            let reminder = 'Closes at ' + schedule['dennys']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setDennysStatus({'status': 'Open', 'open': schedule['dennys']['open'], 'close': schedule['dennys']['close'], 'reminder' : reminder})

        }

        if (today < schedule['flip']['open'] || today >= schedule['flip']['close']){
            let reminder = 'Opens at ' + schedule['flip']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setFlipStatus({'status': 'Close', 'open': schedule['flip']['open'], 'close': schedule['flip']['close'], 'reminder' : reminder})
        }else{
            let reminder = 'Closes at ' + schedule['flip']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setFlipStatus({'status': 'Open', 'open': schedule['flip']['open'], 'close': schedule['flip']['close'], 'reminder' : reminder})
        }

        if (today < schedule['henZoneAndESports']['open'] || today >= schedule['henZoneAndESports']['close']){
            let reminder = 'Opens at ' + schedule['henZoneAndESports']['open'].toLocaleString('en-US', { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true })
            setHenZoneAndESportStatus({'status': 'Close', 'open': schedule['henZoneAndESports']['open'], 'close': schedule['henZoneAndESports']['close'],  'reminder' : reminder})
        }else{
            let reminder = 'Closes at ' + schedule['henZoneAndESports']['close'].toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true })
            setHenZoneAndESportStatus({'status': 'Open', 'open': schedule['henZoneAndESports']['open'], 'close': schedule['henZoneAndESports']['close'], 'reminder' : reminder})
        }
    }, [])

    return (
        <List className='perkinList'>
            <ListItem alignItems='flex-start'>
                <a href='https://sites.udel.edu/usc/buildings/perkins/hen-zone/' className='perkinExternalLinks'>
                    <img alt='henZone' src={henZone} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='perkinStatus'>{henZoneAndESportStatus['status']}</text>} 
                    secondary={henZoneAndESportStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://sites.udel.edu/usc/esports/' className='perkinExternalLinks'>
                    <img alt='eSportsArena' src={eSportsArena} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='perkinStatus'>{henZoneAndESportStatus['status']}</text>} 
                    secondary={henZoneAndESportStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/DunkinDonuts' className='perkinExternalLinks'>
                    <img alt='dunkin' src={dunkin} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='perkinStatus'>{dunkinStatus['status']}</text>} 
                    secondary={dunkinStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/TheDenbyDennys' className='perkinExternalLinks'>
                    <img alt="The Den by Denny's" src={dennys} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='perkinStatus'>{dennysStatus['status']}</text>} 
                    secondary={dennysStatus['reminder']} 
                />
            </ListItem>
            <ListItem alignItems='flex-start'>
                <a href='https://udel.campusdish.com/LocationsAndMenus/FlipKitchen' className='perkinExternalLinks'>
                    <img alt="Flip Kitchen" src={flip} className='listImage' />
                </a>
                <ListItemText 
                    primary={<text className='perkinStatus'>{flipStatus['status']}</text>} 
                    secondary={flipStatus['reminder']}
                />
            </ListItem>
        </List>
    );
}

function createSchedule(day){
    let schedule = {
        'henZoneAndESports' : {'open': createTime(day, 12, 0), 'close': createTime(day, 23, 45)},
        'flip' : {'open': createTime(day, 11, 0), 'close': createTime(day, 23, 0)},
        'dennys' : {'open': createTime(day, 11, 0), 'close': createTime(day, 25, 0)},
        'dunkin' : {'open': createTime(day, 7, 0), 'close': createTime(day, 19, 0)},
    }

    if (day.getDay() === 0 || day.getDay() === 6){
        schedule['flip']['open'].setDate(schedule['flip']['open'].getDate() + (day.getDay() === 0 ? 1 : 2));
        schedule['dennys'] = {'open': createTime(day, 17, 0), 'close': createTime(day, 25, 0)};
        schedule['dunkin'] = {'open': createTime(day, 9, 0), 'close': createTime(day, 17, 0)};
    }

    return schedule;
}


function createTime(day, hours, minutes){
    return new Date(day.getFullYear(), day.getMonth(), day.getDate(), hours, minutes, 0, 0);
}