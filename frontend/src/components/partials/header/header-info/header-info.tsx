import InfosHeader from '../../../contents/infos_Header/infosHeader';

import { daysOfWeek } from '../../../../app/shared/scripts/scriptsOfDate';
import { getOpeningHours } from '../../../services/forHomeWebSite/openingHours.service.ts';
import { OpeningHours } from '../../../../app/shared/models/openingHours';
import React, { useEffect, useState } from 'react';
import { SummaryDay } from '../../../../app/shared/models/summaryDay.ts';
import { getSummaryDay } from '../../../services/forHomeWebSite/summaryDay.service.ts';

const HeaderInfo: React.FC = () => {
  const [ infosOpeningHours, setInfosOpeningHours ] = useState<OpeningHours[]>([]);
  const [ summaryDay, setSummaryDay ] = useState<SummaryDay>();

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

    const getSummaryDayService = async () => {
      try {
        const response = await getSummaryDay();
        setSummaryDay(response[0]);
      } catch (error) {
        console.log('Error in get summary day service from backend', error);
      }
    }

    getAllOpeningHours();
    getSummaryDayService();
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
          return <span className='mr-5'>Estamos fechados</span>
        } else {
          if (hoursNow >= Number(dayArrayInfo[0].time_open) && hoursNow <= Number(dayArrayInfo[0].time_close)) {
            return <span className='mr-5'>Estamos abertos</span>
          } else {
            return <span className='mr-5'>Estamos fechados</span>
          }
        }
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }
  }

  return (
    <>
      <div className='flex 1070sw:flex-row flex-col absolute w-full pt-10 pb-10 1070sw:pl-50 1070sw:pr-50 pl-10 pr-10 justify-between items-center bg-BlueDark text-GoldenLight uppercase font-semibold text-13 z-1100'>
        <div>
          <p className='flex items-center 1070sw:mb-0 mb-2'>
            {serviceSituation()}
            <i className='bx bx-time-five' ></i>
            {summaryDay?.summary}
          </p>
        </div>
        <InfosHeader />
      </div>
    </>
  )
}

export default HeaderInfo;