import './team-style.css';
import './team-responsive.css'
import React, {useEffect, useRef, useState} from 'react';
import Profile from '../../contents/profile_TeamPage/profile';

import imageBackground from '../../../../public/assets/image/team-img/bg-image.png';

const Team: React.FC = () => {
  const containerTeamRef = useRef<HTMLDivElement>(null);
  const containerProfileRef = useRef<HTMLDivElement>(null);
  
  // employee barber carousel
  useEffect(() => {
    const container = containerTeamRef.current;
    
    if (container) {
      const btnNextEmployee = container.querySelectorAll('.btn-chevron-team');
      let count = 1;

      btnNextEmployee.forEach((button) => {
        const handleMouseClick = () => {
          const cardsEmployeeBarber = document.querySelectorAll('.profile');

          if (button.classList.contains('left')) {
            if (count >= ((cardsEmployeeBarber.length + 1) - cardsEmployeeBarber.length)) {
              cardsEmployeeBarber[count].classList.add('disabled');
              count--
              cardsEmployeeBarber[count].classList.remove('disabled');  
            } else if (count == 0) {
              cardsEmployeeBarber[count].classList.add('disabled');           
              count = (cardsEmployeeBarber.length - 1)
              cardsEmployeeBarber[count].classList.remove('disabled');           
            }
          } else if (button.classList.contains('right')) {
            if (count < (cardsEmployeeBarber.length - 1)) {
              cardsEmployeeBarber[count].classList.add('disabled');           
              count++
              cardsEmployeeBarber[count].classList.remove('disabled');           
            } else if (count == (cardsEmployeeBarber.length - 1)) {
              cardsEmployeeBarber[count].classList.add('disabled');           
              count = 0
              cardsEmployeeBarber[count].classList.remove('disabled');           
            }
          }
        }
        
        button.addEventListener('click', handleMouseClick);
      });      
    }
  });

  // add calssName default 'disabled' in profiles
  useEffect(() => {
    const container = containerProfileRef.current;

    if (container) {
      const allProfiles = container.querySelectorAll('.profile');
      
      for (let count = 0; count <= (allProfiles.length - 1); count++) {
        if (count != 1) {
          allProfiles[count].classList.add('disabled'); 
        }
      }
    }
  });

  // Take info in select(option.value) for determine which profile will show
  const [selectedValue, setSelecedValue] = useState<string>('');

  const handleChangeSelectedValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelecedValue(value);
    verificationSelectedValue(value);
  }

  function verificationSelectedValue(value: string) {
    if (value == 'allLocation') {
      changeStyleDisplay(value)
    } else if (value == 'rua-frederico-jensen-Nr3020') {
      changeStyleDisplay(value)
    } else if (value == 'rua-franz-volles-Nr1636') {
      changeStyleDisplay(value)
    }
  }

  function changeStyleDisplay(value: string) {
    const cardsEmployeeBarber = document.querySelectorAll('.profile') 
    cardsEmployeeBarber.forEach(barber => {
      if (value == 'allLocation') {
        barber.classList.add('displayON')
        barber.classList.remove('displayOFF')
      } else if (barber.classList[1] == value) {
        barber.classList.add('displayON')
        barber.classList.remove('displayOFF')
      } else {
        barber.classList.remove('displayON')
        barber.classList.add('displayOFF')
      }
    });    
  }

  return (
    <>
      <div ref={containerTeamRef}>
        <div className='team' id='time'>
          <img src={imageBackground} />
          <div className='title'>
            <h1>Time</h1>
          </div>
          <div className="form-select-location">
            <form>
              <select id="select-location" onChange={handleChangeSelectedValue} value={selectedValue}>
                <option value="allLocation">Todos os barbeiros</option>
                <option value="rua-frederico-jensen-Nr3020">Rua Frederico Jensen | Nrº 3020 | Itoupavazinha</option>
                <option value="rua-franz-volles-Nr1636">Rua Franz Volles | Nrº 1636 | Itoupava Central</option>
              </select>
            </form>
          </div>
          <div className='container-profiles'>
            <div className="btn-arrow-carousel">
              <i className='bx bx-chevron-left bx-md btn-chevron-team left'></i>
            </div>
            <div className='box-profiles' ref={containerProfileRef}>
              <Profile />
            </div>
            <div className="btn-arrow-carousel">
              <i className='bx bx-chevron-right bx-md btn-chevron-team right'></i>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;