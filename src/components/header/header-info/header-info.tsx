import './header-info-style.css'

const daysNotWorking: string[] = ['Dom', 'Seg']
const hoursDayWorkingWeek: number[] = [9, 19.3]
const hoursDayWorkingWeeked: number[] = [8, 18.3]

function getDayName(date: Date): string {
  const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const dayIndex = date.getDay();
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
    //Dom e Seg
    return <span>Estámos fechados</span>
  } 
  else {
    //Ter a Sáb
    if (dayName == 'Sáb') {
      //const hoursDayWorkingWeeked: number[] = [8, 18.3] (Sáb)
      if (hoursNow >= hoursDayWorkingWeeked[0] && hoursNow <= hoursDayWorkingWeeked[1]) {
        //('Sáb entre 8h e 18h30');
        return <span>Estámos abertos</span>
      } else {
        //('Sab antes/depois das 8h e 18h30');
        return <span>Estámos fechados</span>
      }
    } else {
      // ter a sex
      //const hoursDayWorkingWeek: number[] = [9, 19.3] (ter a sex)
      if (hoursNow >= hoursDayWorkingWeek[0] && hoursNow <= hoursDayWorkingWeek[1]) {
        //('ter a sex entre 9h e 19h30');
        return <span>Estámos abertos</span>
      } else {
        //('ter a sex antes/depois das 9h e 19h30');
        return <span>Estámos fechados</span>
      }
    }

    
    

  }
}

const HeaderInfo = () => {
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
            <li className='location'>
              <a href="https://www.google.com/maps/dir//Blade’s+Palace+Barbershop+-+R.+Frederico+Jensen,+3020+-+Sala+-+02+-+Itoupavazinha,+Blumenau+-+SC,+89066-302/@-26.8554769,-49.1192545,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94df1fb391f09bcb:0x36446ac4e6ea704b!2m2!1d-49.1144909!2d-26.8554769?entry=ttu" target='_blank'>
                <i className='bx bx-map' ></i>
                <p title='CEP: 89066-302'>Nrº 3020 | Rua Frederico Jensen</p>
              </a>
            </li>
            <li className='numberPhone'>
              <a href="http://wa.me/5547997085848" target='_blank'>
                <i className='bx bx-phone'></i>
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