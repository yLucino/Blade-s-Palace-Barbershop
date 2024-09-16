import './header-info-style.css';
import './header-info-responsive.css';

import React, { useState } from 'react';
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
  // animation icon header-info (bx-map)
  const [isHoveredMap_Nr3020, setIsHoveredMap_Nr3020] = useState(false);
  const [isHoveredMap_Nr1636, setIsHoveredMap_Nr1636] = useState(false);

  const handleMouseEnterMap_Nr3020 = () => {
    setIsHoveredMap_Nr3020(true);
  };

  const handleMouseLeaveMap_Nr3020 = () => {
    setIsHoveredMap_Nr3020(false);
  };

  const handleMouseEnterMap_Nr1636 = () => {
    setIsHoveredMap_Nr1636(true);
  };

  const handleMouseLeaveMap_Nr1636 = () => {
    setIsHoveredMap_Nr1636(false);
  };

  // animation icon header-info (bx-phone)
  const [isHoveredPhone, setIsHoveredPhone] = useState(false);

  const handleMouseEnterPhone = () => {
    setIsHoveredPhone(true);
  };

  const handleMouseLeavePhone = () => {
    setIsHoveredPhone(false);
  };

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
        <div className='info-location-numberPhone'>
          <ul>
            <li className='location'
            onMouseEnter={handleMouseEnterMap_Nr3020}
            onMouseLeave={handleMouseLeaveMap_Nr3020}
            >
              <a href="https://www.google.com/maps/dir//Blade’s+Palace+Barbershop+-+R.+Frederico+Jensen,+3020+-+Sala+-+02+-+Itoupavazinha,+Blumenau+-+SC,+89066-302/@-26.8554769,-49.1192545,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94df1fb391f09bcb:0x36446ac4e6ea704b!2m2!1d-49.1144909!2d-26.8554769?entry=ttu" target='_blank'>
                <i className={`bx bx-map ${isHoveredMap_Nr3020 ? 'bx-tada' : ''}`}></i>
                <p title='CEP: 89066-302'>Nrº 3020 | Rua Frederico Jensen</p>
              </a>
            </li>
            <li className='location'
            onMouseEnter={handleMouseEnterMap_Nr1636}
            onMouseLeave={handleMouseLeaveMap_Nr1636}
            >
              <a href="https://www.google.com/maps/place/Blade%C2%B4s+Place+Barbershop+2/@-26.8344038,-49.1054507,20.25z/data=!4m15!1m8!3m7!1s0x94dee1e12662eb23:0x3e5d80c7f3e4170a!2sR.+Franz+Volles,+1636+-+Itoupava+Central,+Blumenau+-+SC,+89066-101!3b1!8m2!3d-26.8343303!4d-49.1054808!16s%2Fg%2F11f2tshvzg!3m5!1s0x94dee14370570c47:0x66a55f1965e75842!8m2!3d-26.8343303!4d-49.1054808!16s%2Fg%2F11lmkqq6mh?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                <i className={`bx bx-map ${isHoveredMap_Nr1636 ? 'bx-tada' : ''}`}></i>
                <p title='CEP: 89066-302'>Nrº 1636 | Rua Franz Volles</p>
              </a>
            </li>
            <li className='numberPhone'
            onMouseEnter={handleMouseEnterPhone}
            onMouseLeave={handleMouseLeavePhone}
            >
              <a href="http://wa.me/5547997085848" target='_blank'>
                <i className={`bx bx-phone ${isHoveredPhone ? 'bx-tada' : ''}`}></i>
                <p>(47) 99708-5848</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderInfo;