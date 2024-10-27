import React, { useEffect, useState } from "react";
import { EmployeeTeam } from "../../../app/shared/models/employeeTeam";
import { getTeam } from "../../services/forHomeWebSite/teamPage.service";

const Profile: React.FC = () => {
  // request from backend to take all employeer barbers
  const [employeer, setEmployeer] = useState<EmployeeTeam[]>([]);

  useEffect(() => {
    const getAllTeam = async () => {
      try {
        const response = await getTeam();
        setEmployeer(response); 
      } catch (error) {
        console.error('Error in get all team from backend', error);
      }
    }

    getAllTeam();
  }, []);

  return (
    <>
      {employeer.map((profile, index) => (
        <div className='profile' key={index}>
          <img src={profile.imageUrl} alt={profile.name} />
          <h2 className="text-2xl">{profile.name}</h2>
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