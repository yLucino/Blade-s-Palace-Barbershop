import { getOpeningHours } from "../../../components/services/openingHours.service";
import { OpeningHours } from "../models/openingHours";

// Barbershop opening dates
const daysOfWeek: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const daysNotWorking: string[] = [];

const hoursDayWorkingWeekString: string[] = ['09:00', '19:30'];
const hoursDayWorkingWeekedString: string[] = ['08:00', '18:30'];

let allInfosOpeningHours: OpeningHours[] = [];

const getAllOpeningHours = async () => {
  try {
    const response = await getOpeningHours();
    allInfosOpeningHours = response
    getDayNotWorking();
  } catch (error) {
    console.error('Error in get all opening hours from backend', error);
  }
}

const getDayNotWorking = () => {
  allInfosOpeningHours.forEach((info) => {
    if (info.status_open === 0) {
      daysNotWorking.push(info.name_day_week);
    }
  })
} 

getDayNotWorking();
getAllOpeningHours();

export { 
  allInfosOpeningHours,
  daysOfWeek,
  daysNotWorking,
  hoursDayWorkingWeekString,
  hoursDayWorkingWeekedString,
}