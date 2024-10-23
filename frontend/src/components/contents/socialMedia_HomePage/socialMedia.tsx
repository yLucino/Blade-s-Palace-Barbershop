import React, { useEffect, useState } from "react";
import { Social } from "../../../app/shared/models/social";
import { getSocialMedia } from "../../services/homePage.service";

const SocialMedia: React.FC = () => {
  const [socialMedia, setSocialMedia] = useState<Social[]>([]);

  useEffect(() => {
    const getAllSocialMedia = async () => {
      try {
        const response = await getSocialMedia();
        setSocialMedia(response);
      } catch (error) {
        console.error('Erro in get all social media from backend', error);
      }
    }

    getAllSocialMedia();
  }, []);

  return(
    <>
      <div className='nav-home-social'>
        <nav>
          <ul>
            {socialMedia.map((social, index) => (
              <li className='btn-social' key={index}>
                <a href={social.url} target='_blank'>
                  <i className={`bx bxl-${social.name}${social.name === 'instagram' ? '-alt' : social.name === 'facebook' ? '-circle' : ''}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SocialMedia;