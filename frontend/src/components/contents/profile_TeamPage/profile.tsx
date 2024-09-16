import React from "react";
import { sample_employee_allteam } from "../../../data";

const Profile: React.FC = () => {
  return (
    <>
      {sample_employee_allteam.map((profile, index) => (
        <div className='profile' key={index}>
          <img src={profile.imageUrl} alt={profile.name} />
          <h2>{profile.name}</h2>
          <h3>{profile.jobRole}</h3>
          <h3>{`Local: ${profile.businessAddress}`}</h3>
          <nav>
            <ul>
              <li className='btn-social'>
                <a href={profile.instagramUrl} target='_blank'>
                  <i className='bx bxl-instagram-alt'></i>
                </a>
              </li>
              <li className='btn-social'>
                <a href={profile.facebookUrl} target='_blank'>
                  <i className='bx bxl-facebook-circle'></i>
                </a>
              </li>
              <li className='btn-social'>
                <a href={profile.whatsappUrl} target='_blank'>
                  <i className='bx bxl-whatsapp'></i>
                </a>
              </li>
            </ul>
          </nav>
          <p>{profile.description}</p>
        </div>
      ))}
    </>
  )
}

export default Profile;