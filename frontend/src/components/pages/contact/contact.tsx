import InfosContact from '../../contents/infos_ContactPage/infosContact';

const Contact = () => {
  return (
    <>
      <div className='750sw:h-80 h-96 bg-Gray' id='contato'>
        <div className='pt-5 pb-4'>
          <h1 className='font-AntonSC text-center text-Yellow text-4xl'>Contato</h1>
        </div>
        <InfosContact />
      </div>
    </>
  )
}

export default Contact;