import './team-style.css';
import './team-responsive.css'
import React, {useEffect, useRef, useState} from 'react';
import Profile from '../../contents/profile_TeamPage/profile';

import imageBackground from '../../../../public/assets/image/team-img/bg-image.png';

const Team: React.FC = () => {
  const containerTeamRef = useRef<HTMLDivElement>(null);
  const [ employee, setEmployee ] = useState<NodeListOf<Element>>();
  const [ reRender, setReRender ] = useState(false);

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

  useEffect(() => {
    const cardsEmployeeBarber = document.querySelectorAll('.profile');
          
    if (cardsEmployeeBarber.length > 0) {
      setEmployee(cardsEmployeeBarber);
      setReRender(false);
    } else {
      setReRender(true);
    }
  }, [reRender]);

  return (
    <>
      <div className='team' id='time' ref={containerTeamRef}>
        <img src={imageBackground} />
        <div className='title text-4xl'>
          <h1>Time</h1>
        </div>
        <div className='container-profiles'>
          <div className="btn-arrow-carousel">
            <i className='bx bx-chevron-left bx-md btn-chevron-team left'></i>
          </div>
          <div className={`box-profiles pt-28 pb-5 overflow-y-hidden 2xl:${employee && employee.length > 3 ? 'overflow-x-scroll w-auto xl:w-1500' : 'overflow-x-hidden w-auto'} `}>
            <Profile />
          </div>
          <div className="btn-arrow-carousel">
            <i className='bx bx-chevron-right bx-md btn-chevron-team right'></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team;