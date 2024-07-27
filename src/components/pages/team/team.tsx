import './team-style.css';
import './team-responsive.css'
import React, {useEffect, useRef} from 'react';
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

  return (
    <>
      <div ref={containerTeamRef}>
        <div className='team' id='time'>
          <img src={imageBackground} />
          <div className='title'>
            <h1>Time</h1>
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