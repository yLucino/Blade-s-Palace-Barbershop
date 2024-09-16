// Barbershop opening dates
const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const daysNotWorking: string[] = ['Dom', 'Seg'];
const hoursDayWorkingWeekString: string[] = ['09:00', '19:30'];
const hoursDayWorkingWeekedString: string[] = ['08:00', '18:30'];
const hoursDayWorkingWeekNumber: number[] = [9, 19.3];
const hoursDayWorkingWeekedNumber: number[] = [8, 18.3];

// Dates global
// const now = new Date();
// const day = now.getDate();
// const month = ( 1 + now.getMonth());
// const year = now.getFullYear();

export { 
  daysOfWeek,
  daysNotWorking,
  hoursDayWorkingWeekString,
  hoursDayWorkingWeekedString,
  hoursDayWorkingWeekNumber,
  hoursDayWorkingWeekedNumber
}