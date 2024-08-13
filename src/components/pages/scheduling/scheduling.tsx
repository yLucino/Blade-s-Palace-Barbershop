import './scheduling-style.css';
import './scheduling-responsive.css';

import React, { useState } from 'react';

const Scheduling: React.FC = () => {
  // function to update min/max in date input
  
  function getMinDate() {
    const now = new Date();
    const day = now.getDate();
    const month = ( 1 + now.getMonth());
    const year = now.getFullYear();
  
    if (month < 10) {
      if (day < 10) {
        const monthLessThanTen = "0" + `${month}`
        const dayLessThanTen = "0" + `${day}`
        const dayOfYear = `${year}-${monthLessThanTen}-${dayLessThanTen}`
        return dayOfYear

      } else {
        const monthLessThanTen = "0" + `${month}`
        const dayOfYear = `${year}-${monthLessThanTen}-${day}`   
        return dayOfYear
      }
    } else {
      if (day < 10) {
        const dayLessThanTen = "0" + `${day}`
        const dayOfYear = `${year}-${month}-${dayLessThanTen}`
        return dayOfYear

      } else {
        const dayOfYear = `${year}-${month}-${day}`  
        return dayOfYear
      } 
    } 
  }
  
  function getMaxDate() {
    const now = new Date();
    const month = ( 1 + now.getMonth());
    const year = now.getFullYear();
    
    if (month < 10) {
      const monthLessThanTen = "0" + `${month}`
      const dayOfYear = `${year}-${monthLessThanTen}-${getLastDayOfMonth(year, month)}`      
      return dayOfYear
    } else {
      const dayOfYear = `${year}-${month}-${getLastDayOfMonth(year, month)}` 
      return dayOfYear
    } 
  }

  function getLastDayOfMonth(year: number, month: number): number {
    const firstDayOfNextMonth = new Date(year, month, 1);
    firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() - 1);
    return firstDayOfNextMonth.getDate();
  }

  // function for update min/max in hour input AND get day value input type date
  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const daysNotWorking: string[] = ['Dom', 'Seg'];
  const hoursDayWorkingWeek: string[] = ['09:00', '19:30'];
  const hoursDayWorkingWeeked: string[] = ['08:00', '18:30'];
  const [dateValue, setDateValue] = useState<string>('');
  const [dateValueBR, setDateValueBR] = useState<string>('');
  const [day, setDay] = useState<number>(Number);
  const [month, setMonth] = useState<number>(Number);
  const [year, setYear] = useState<number>(Number);
  const handleChangeGetDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedDate = formatDateToBR(value);
    setDateValueBR(formattedDate);
    setDateValue(value);
    const [year, month, day] = value.split('-').map(Number);
    setDay(day);
    setMonth(month);
    setYear(year);
  }
  
  function getDayName(day: number, month: number, year: number): string {
    const date = new Date(year, month - 1, day);
    const dayName = daysOfWeek[date.getUTCDay()];
    return dayName;
  }

  function getHour() {
    getMinHour()
    getMaxHour()
  }
  
  function getMinHour() {
    const dayName = getDayName(day, month, year);
    if (dayName == daysNotWorking[0] || dayName == daysNotWorking[1]) {
      return '00:00'
    } else if (dayName == daysOfWeek[6]) {
      return hoursDayWorkingWeeked[0]
    } else {
      return hoursDayWorkingWeek[0]
    }
  }
  
  function getMaxHour() {
    const dayName = getDayName(day, month, year);
    if (dayName == daysNotWorking[0] || dayName == daysNotWorking[1]) {
      return '00:00'
    } else if (dayName == daysOfWeek[6]) {
      return hoursDayWorkingWeeked[1]
    } else {
      return hoursDayWorkingWeek[1]
    }
  }

  // function to get => Full name in input type text
  const [nameValue, setNameValue] = useState<string>('');
  const [displayNameValue, setDisplayNameValue] = useState<string>('');
  const handleChangeGetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNameValue(value);    
  }

  // function to get => E-mail in input type e-mail
  const [emailValue, setEmailValue] = useState<string>('');
  const [displayEmailValue, setDisplayEmailValue] = useState<string>('');
  
  const handleChangeGetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmailValue(value);    
  }

  // function to get => Number of phone in input type number
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [displayPhoneValue, setDisplayPhoneValue] = useState<string>('');

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (match) {
      const formatted = `(${match[1]}${match[1] && match[2] ? ')' : ''} ${match[2]}${match[3] ? '-' : ''}${match[3]}`;
      return formatted.trim();
    }
    return value;
  };

  const handleChangeGetPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setPhoneValue(formattedPhoneNumber);
  }

  // function to get => Response of input checked in 'monthly plan', type radio
  const [planRadioValue, setPlanRadioValue] = useState<string>('');
  const [displayPlanRadioValue, setDisplayPlanRadioValue] = useState<string>('');
  
  const handleChangeGetPlanRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPlanRadioValue(value);    
  }

  // function to get/formatted in Br => Full date in input type date
  const [displayDateValue, setDisplayDateValue] = useState<string>('');
  const formatDateToBR = (dateString: string): string => {
    const [years, months, days] = dateString.split('-');
    return `${days}/${months}/${years}`;
  };

  // function to get => Full hour in input type hour
  const [hourValue, setHourValue] = useState<string>('');
  const [displayHourValue, setDisplayHourValue] = useState<string>('');
  
  const handleChangeGetHour = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setHourValue(value);    
  }

  // function to pass info in form to CheckOut box
  function formConcluded() {
    setDisplayNameValue(nameValue);
    setDisplayDateValue(dateValueBR);
    setDisplayEmailValue(emailValue);
    setDisplayPhoneValue(phoneValue);
    setDisplayPlanRadioValue(planRadioValue);
    setDisplayHourValue(hourValue);
  }

  // function to reset all values in form scheduling and checkout
  const formCancel = () => {
    // Form Scheduling Inputs
    setNameValue('');
    setDateValue('');
    setEmailValue('');
    setPhoneValue('');
    setPlanRadioValue('');
    setHourValue('');
    // Form Checkout Info
    setDisplayNameValue('');
    setDisplayDateValue('');
    setDisplayEmailValue('');
    setDisplayPhoneValue('');
    setDisplayPlanRadioValue('');
    setDisplayHourValue('');
  };

  // function for validation of the information form
  const validationInfoInput = () => {
    if (nameValue && dateValueBR && emailValue && planRadioValue && hourValue) {
      if (phoneValue.length == 15) {
        formConcluded()
      } else {
        alert('Por favor, preencha o campo TELEFONE corretamente para fazer o agendamento.');
      }
    } else {
      alert('Por favor, preencha o formulário para fazer o agendamento.');
    }
  }

  return (
    <>
      <div className='scheduling' id='agendamento'>
        <div className='title'>
          <h1>Agendamento</h1>
        </div>
        <div className="container">
          <div className="container-scheduling">
            <div className="subtitle">
              <h2>Faça seu agendamento aqui!</h2>
              <hr />
            </div>
            <div className="partials-scheduling">
              <div className="left-partial">
                <form action="" method="" id="form-scheduling"> 
                  {/* action="URL.php" method="post" */}
                  <div className="box-user-info">
                    <label htmlFor="name">Nome Completo: </label><br></br>
                    <input type="text" id="name" name="name" placeholder='Seu nome' value={nameValue} onChange={handleChangeGetName} maxLength={40} required/><br></br>
                    <label htmlFor="email">E-mail:</label><br></br>
                    <input type="email" name="email" id="email" placeholder='email@exemplo.com' value={emailValue} onChange={handleChangeGetEmail} maxLength={40} required/><br></br>
                    <label htmlFor="phone">Telefone: </label><br></br>
                    <input type="text" name="phone" id="phone" placeholder='(xx) xxxxx-xxxx' value={phoneValue} onChange={handleChangeGetPhone} maxLength={15} required/><br></br>
                  </div>
                  <div className="box-request-subscriber-plan">
                    <label htmlFor="subscriber">Assinante do plano mensal? </label><br></br>
                    <div className="radio-container">
                      <input type="radio" name="subscriber" id="yes" value='Sim' checked={planRadioValue === 'Sim'} onChange={handleChangeGetPlanRadio} required/>
                      <div className='custom-radio'><span></span></div>
                      <label className='label-yes-no' htmlFor="yes">Sim! </label>

                      <input type="radio" name="subscriber" id="no" value='Não' checked={planRadioValue === 'Não'} onChange={handleChangeGetPlanRadio} required/>
                      <div className='custom-radio'><span></span></div>
                      <label className='label-yes-no' htmlFor="no">Não! </label><br></br>
                    </div>
                  </div>
                  <div className="box-day-hour">
                    <div className="day-hour">
                      <label htmlFor="date">Data: </label>
                      <input type="date" name="date" id="date" max={getMaxDate()} min={getMinDate()} value={dateValue} onChange={handleChangeGetDate} required/><br></br>
                      <label htmlFor="time">Hora: </label>
                      <input type="time" name="time" id="time" min={getMinHour()} max={getMaxHour()} value={hourValue} onChange={handleChangeGetHour} onClick={getHour} required />
                      <span className="validacao"></span>
                    </div>
                    <p>(Ter a Sex: 09:00h as 19:30h | Sáb: 08:00h as 18:30h)</p>
                  </div>
                  <div className="finish-box-scheduling">
                    <button className='concluded' onClick={validationInfoInput}>Concluído</button>
                    <button className='cancel' onClick={formCancel}>Cancelar</button>
                  </div>
                </form>
              </div>
              <div className="right-partial">
                <div className="preview-service">
                  <div className="box-services-select">
                    <div className="text-description">
                      <p>Serviços escolhidos:</p>
                    </div>
                    <ul>
                      <li className='service'>
                        <div className="info-service">
                          <button>
                            <i className='bx bxs-trash'></i>
                          </button>
                          <img src="https://placehold.co/50x50" />
                          <div className="text">
                            <p className='title-text'>Corte de Cabelo</p>
                            <p className='sub-text'>Preço fora da assinatura</p>
                          </div>
                        </div>
                        <div className='price-service'>
                          <p>R$ 30</p>
                        </div>
                      </li>
                      <li className='service'>
                        <div className="info-service">
                          <button>
                            <i className='bx bxs-trash'></i>
                          </button>
                          <img src="https://placehold.co/50x50" />
                          <div className="text">
                            <p className='title-text'>Corte de Cabelo</p>
                            <p className='sub-text'>Preço fora da assinatura</p>
                          </div>
                        </div>
                        <div className='price-service'>
                          <p>R$ 30</p>
                        </div>
                      </li>
                      <li className='service'>
                        <div className="info-service">
                          <button>
                            <i className='bx bxs-trash'></i>
                          </button>
                          <img src="https://placehold.co/50x50" />
                          <div className="text">
                            <p className='title-text'>Corte de Cabelo</p>
                            <p className='sub-text'>Preço fora da assinatura</p>
                          </div>
                        </div>
                        <div className='price-service'>
                          <p>R$ 30</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="options-services-select">
                    <a href='#precos-e-servicos'>Adicionar mais serviços +</a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className='container-arrow'>
            <i className='bx bx-chevrons-right'></i>
          </div>
          <div className='container-checkout'>
            <div className="subtitle">
              <h2>Confira suas informações!</h2>
              <hr />
            </div>
            <div className="box-service-preview">
              <div className="text-description">
                <p>Serviços escolhidos:</p>
              </div>
              <ul>
                <li className='service'>
                  <div className="info-service">
                    <img src="https://placehold.co/50x50" />
                    <div className="text">
                      <p className="title-text">Corte de Cabelo</p>
                      <p className="sub-text">Preço fora da assinatura</p>
                    </div>
                  </div>
                  <div className='price-service'>
                    <p>R$ 30</p>
                  </div>
                </li>
                <li className='service'>
                  <div className="info-service">
                    <img src="https://placehold.co/50x50" />
                    <div className="text">
                      <p className="title-text">Corte de Cabelo</p>
                      <p className="sub-text">Preço fora da assinatura</p>
                    </div>
                  </div>
                  <div className='price-service'>
                    <p>R$ 30</p>
                  </div>
                </li>
                <li className='service'>
                  <div className="info-service">
                    <img src="https://placehold.co/50x50" />
                    <div className="text">
                      <p className="title-text">Corte de Cabelo</p>
                      <p className="sub-text">Preço fora da assinatura</p>
                    </div>
                  </div>
                  <div className='price-service'>
                    <p>R$ 30</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box-info-scheduling">
              <div className="text-description">
                <p>Suas informações:</p>
              </div>
              <div className="container-info">
                <div className="info-left">
                  <p>Nome: <span>{displayNameValue}</span></p>
                  <p>E-mail: <span>{displayEmailValue}</span></p>
                  <p>Telefone: <span>{displayPhoneValue}</span></p>
                </div>
                <div className="info-right">
                  <p>É assinante: <span>{displayPlanRadioValue}</span></p>
                  <p>Data: <span>{displayDateValue}</span></p>
                  <p>Hora: <span>{displayHourValue}</span></p>
                </div>
              </div>
            </div>
            <div className="box-total-price">
              <p>Total: <span>R$ 90</span></p>
            </div>
            <div className="box-finish-scheduling">
              <button>Agendar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Scheduling;