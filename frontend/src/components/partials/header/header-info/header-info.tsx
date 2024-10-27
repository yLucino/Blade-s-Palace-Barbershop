import './header-info-style.css';
import './header-info-responsive.css';
import InfosHeader from '../../../contents/infos_Header/infosHeader';

import { daysOfWeek } from '../../../../app/shared/scripts/scriptsOfDate';
import { getOpeningHours } from '../../../services/forHomeWebSite/openingHours.service.ts';
import { OpeningHours } from '../../../../app/shared/models/openingHours';
import React, { useEffect, useState } from 'react';

const HeaderInfo: React.FC = () => {
  const [ infosOpeningHours, setInfosOpeningHours ] = useState<OpeningHours[]>([]);

  useEffect(() => {
    const getAllOpeningHours = async () => {
      try {
        const response = await getOpeningHours();
        if (response && response.length > 0) {
          setInfosOpeningHours(response);
        }
      } catch (error) {
        console.error('Error in get all opening hours from backend', error);
      }
    }

    getAllOpeningHours();
  }, []);

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
    const dayArrayInfo: OpeningHours[] = [];
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const hoursNow = hours + (minutes / 100);
    
    infosOpeningHours.forEach((info) => {
      if (dayName === info.name_day_week) {
        dayArrayInfo.push(info);
      }
    })
    
    if (dayArrayInfo.length > 0) {
      try {
        if (dayArrayInfo[0].status_open === 'Fechado') {
          return <span>Estamos fechados</span>
        } else {
          if (hoursNow >= Number(dayArrayInfo[0].time_open) && hoursNow <= Number(dayArrayInfo[0].time_close)) {
            return <span>Estamos abertos</span>
          } else {
            return <span>Estamos fechados</span>
          }
        }
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
  }

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