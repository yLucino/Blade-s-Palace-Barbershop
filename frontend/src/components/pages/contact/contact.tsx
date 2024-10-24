import './contact-style.css';
import './contact-responsive.css';
import InfosContact from '../../contents/infos_ContactPage/infosContact';

const Contact = () => {
  return (
    <>
      <div className='contact' id='contato'>
        <div className='title'>
          <h1 className='text-4xl'>Contato</h1>
        </div>
        <InfosContact />
      </div>
    </>
  )
}

export default Contact;