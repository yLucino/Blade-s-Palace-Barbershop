import './header-info-style.css';
import './header-info-responsive.css';
import InfosHeader from '../../../contents/infos_Header/infosHeader';

import React from 'react';
import { daysOfWeek } from '../../../../app/shared/scripts/scriptsOfDate';
import { getOpeningHours } from '../../../services/openingHours.service';
import { OpeningHours } from '../../../../app/shared/models/openingHours';

// store opening hours checker
let infosOpeningHours: OpeningHours[] = [];
const getAllOpeningHours = async () => {
  try {
    const response = await getOpeningHours();
    infosOpeningHours = response
  } catch (error) {
    console.error('Error in get all opening hours from backend', error);
  }
}

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
  const dayArrayInfo: OpeningHours[] = [];

  infosOpeningHours.forEach((info) => {
    if (dayName === info.name_day_week) {
      dayArrayInfo.push(info);
    }
  })
  
  if (dayArrayInfo[0].status_open === 0) {
    return <span>Estamos fechados</span>
  } else {
    if (hoursNow >= dayArrayInfo[0].time_open && hoursNow <= dayArrayInfo[0].time_close) {
      return <span>Estamos abertos</span>
    }
  }
}

getAllOpeningHours();

const HeaderInfo: React.FC = () => {
  return (
    <>
      <div className='header-info'>
        <div className='info-open-establishment'>
          <p title='Seg a Sex: 09:00h as 19:30h | Sáb: 08:00h as 18:30h'>
            {serviceSituation()}
            <i className='bx bx-time-five' ></i>
            seg a sáb
          </p>
        </div>
        <InfosHeader />
      </div>
    </>
  )
}

export default HeaderInfo;