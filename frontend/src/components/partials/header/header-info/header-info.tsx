import './header-info-style.css';
import './header-info-responsive.css';
import Infos from '../../../contents/infos_Header/infos';

import React from 'react';
import {   
  daysOfWeek,
  daysNotWorking,
  hoursDayWorkingWeekNumber,
  hoursDayWorkingWeekedNumber
} from '../../../../app/shared/scripts/scriptsOfDate';

// store opening hours checker
function getDayName(date: Date): string {
  const dayIndex = date.getUTCDay();
  const day = daysOfWeek[dayIndex];
  return day
}

function serviceSituation() {
  const now = new Date();
  const day = now.getDate();
  const month = ( 1 + now.getMonth());
  const year = now.getFullYear();

  if (month < 10) {
    const mes = "0" + `${month}`
    const dayOfYear = `${year}-${mes}-${day}`      
    const date = new Date(dayOfYear)
    const dayName = getDayName(date)
    
    return activityCheckWork(dayName)
  } else {
    const dayOfYear = `${year}-${month}-${day}` 
    const date = new Date(dayOfYear)
    const dayName = getDayName(date)
    
    return activityCheckWork(dayName)
  } 
}

function activityCheckWork(dayName: string) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const hoursNow = hours + (minutes / 100);

  if (dayName == daysNotWorking[0] || dayName == daysNotWorking[1]) {
    return <span>Estamos fechados</span>
  } else {
    if (dayName == daysOfWeek[6]) {
      if (hoursNow >= hoursDayWorkingWeekedNumber[0] && hoursNow <= hoursDayWorkingWeekedNumber[1]) {
        return <span>Estamos abertos</span>
      } else {
        return <span>Estamos fechados</span>
      }
    } else {
      if (hoursNow >= hoursDayWorkingWeekNumber[0] && hoursNow <= hoursDayWorkingWeekNumber[1]) {
        return <span>Estamos abertos</span>
      } else {
        return <span>Estamos fechados</span>
      }
    }
  }
}

const HeaderInfo: React.FC = () => {
  return (
    <>
      <div className='header-info'>
        <div className='info-open-establishment'>
          <p title='Ter a Sex: 09:00h as 19:30h | Sáb: 08:00h as 18:30h'>
            {serviceSituation()}
            <i className='bx bx-time-five' ></i>
            ter a sáb
          </p>
        </div>
        <Infos />
      </div>
    </>
  )
}

export default HeaderInfo;