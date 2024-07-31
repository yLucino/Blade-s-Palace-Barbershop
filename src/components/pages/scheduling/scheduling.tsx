import './scheduling-style.css';
import './scheduling-responsive.css';

const Scheduling = () => {
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
                <form action="URL" method="post" id="form-scheduling">
                  <div className="box-user-info">
                    <label htmlFor="name">Nome Completo: </label><br></br>
                    <input type="text" id="name" name="name" required/><br></br>
                    <label htmlFor="email">E-mail:</label><br></br>
                    <input type="email" name="email" id="email" placeholder='email@exemplo.com' required/><br></br>
                    <label htmlFor="phone">Telefone: </label><br></br>
                    <input type="text" name="phone" id="phone" placeholder='(xx) xxxxx-xxxx' maxLength={15} required/><br></br>
                  </div>
                  <div className="box-request-subscriber-plan">
                    <label htmlFor="subscriber">Assinante do plano mensal? </label><br></br>
                    <div className="radio-container">
                      <input type="radio" name="subscriber" id="yes" value="yes" required/>
                      <div className='custom-radio'><span></span></div>
                      <label className='label-yes-no' htmlFor="yes">Sim! </label>
                      <input type="radio" name="subscriber" id="no" value="no" required/>
                      <div className='custom-radio'><span></span></div>
                      <label className='label-yes-no' htmlFor="no">Não! </label><br></br>
                    </div>
                  </div>
                  <div className="box-day-hour">
                    <div className="day-hour">
                      <label htmlFor="date">Data: </label>
                      <input type="date" name="date" id="date" max="2024-07-31" min="2024-07-28" required/><br></br>
                      {/* Fazer com que o maxdate/mindate se atualize automaticamento */}
                      <label htmlFor="time">Hora: </label>
                      <input type="time" name="time" id="time" min="09:00" max="19:30" required/>
                      <span className="validacao"></span>
                    </div>
                    <p>(Ter a Sex: 09:00h as 19:30h | Sáb: 08:00h as 18:30h)</p>
                    {/* Fazer com que o maxtime/mintime se atualize automaticamento */}
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
                            <p className='sub-text'>Preço com a assinatura</p>
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
                            <p className='sub-text'>Preço com a assinatura</p>
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
                <div className="finish-box-scheduling">
                  <button className='concluded'>Concluído</button>
                  <button className='cancel'>Cancelar</button>
                  {/* chamar function para enviar as informações do form para o CheckOut */}
                </div>
              </div>
            </div>
          </div>
          <div className='contaianer-checkout'>
            <div className="subtitle">
              <h2>Confira as informações!</h2>
            </div>
            <div className="box-service-preview">
              <ul>
                <li className='service'>
                  <div className="info-service">
                    <img src="https://placehold.co/60x60" />
                    <p>Corte de Cabelo</p>
                    <p>Preço fora da assinatura</p>
                  </div>
                  <div className='price-service'>
                    <p>R$ 30,00</p>
                  </div>
                </li>
                <li className='service'>
                  <div className="info-service">
                    <img src="https://placehold.co/60x60" />
                    <p>Corte de Cabelo</p>
                    <p>Preço fora da assinatura</p>
                  </div>
                  <div className='price-service'>
                    <p>R$ 30,00</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box-info-scheduling">
              <div className="info-left">
                <p>Nome: Jonh Sera</p>
                <p>E-mail: jonh.sera@gmail.com</p>
                <p>Telefono: (47) 99248-6476</p>
              </div>
              <div className="info-right">
                <p>É assinante: Não</p>
                <p>Data: 01/01/2024</p>
                <p>Hora: 20:30</p>
              </div>
            </div>
            <div className="box-total-price">
              <p>Total: R$ 60,00</p>
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