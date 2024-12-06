import { useEffect, useState } from "react";
import HeaderInfo from "../../partials/header/header-info/header-info";
import MenuButton from "../../partials/menuButton/menuButton";
import { MonthlyPlans } from "../../../app/shared/models/monthlyPlans";
import { getMonthlyPlans } from "../../services/forHomeWebSite/priceAndServicesPage.service";

import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import DiscountIcon from '@mui/icons-material/Discount';
import { IconButton } from "@mui/material";


const InfoMonthlyPlan = () => {
  const [ monthlyPlan, setMonthlyPlan ] = useState<MonthlyPlans>();

  useEffect(() => {
    const getPlan = async () => {
      try {
        const response = await getMonthlyPlans();
        setMonthlyPlan(response[0])
      } catch (error) {
        console.log('Error in get plan', error);
      }
    }

    getPlan();
  }, [])

  return(
    <>
      <div>
        <HeaderInfo />
        <div className="flex flex-col gap-10 p-10 pt-36">
          <MenuButton />
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 bg-GrayBlue p-10 rounded-md w-5/6 mr-auto ml-auto">
            <div className="flex justify-center">
              <img className="h-80 rounded-lg" src={monthlyPlan?.imageUrl} alt={monthlyPlan?.title} />
            </div>
            <div className="flex flex-col justify-center items-center text-center ">
              <h1 className="text-white text-3xl font-bold mb-10">{monthlyPlan?.title} - Estilo o Mês Todo!</h1>
              <p className="text-white font-extralight w-2/3">{monthlyPlan?.description}</p>
              <div className="flex flex-col mt-4 w-72 text-center gap-2">
                <a href="#about">
                  <p className="p-2 bg-sky-800 rounded-xl text-white text-sm font-extralight hover:bg-sky-900 hover:scale-105 transition-all">Preço plano mensal COMPLETO: <span className="font-medium">R$ {monthlyPlan?.priceFullPlan}</span></p>
                </a>
                <a href="#about">
                  <p className="p-2 bg-sky-800 rounded-xl text-white text-sm font-extralight hover:bg-sky-900 hover:scale-105 transition-all">Preço plano mensal BÁSICO: <span className="font-medium">R$ {monthlyPlan?.priceHalfPlan}</span></p>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center bg-gray-200 p-10 rounded-md 750sw:w-4/6 w-5/6 mr-auto ml-auto">
            <h2 className="text-Blue font-bold text-xl mb-5">Por que escolher nossa assinatura mensal?</h2>
            <p className="font-extralight">Com nossa Assinatura Mensal, você terá acesso ilimitado aos nossos serviços de corte de cabelo e barba ao longo de todo o mês. Isso significa liberdade para cuidar do seu visual sempre que quiser, sem preocupações e com a qualidade que você merece.</p>
            <hr className="border-gray-400 m-20 mb-5 mt-5" />
            <ul className="mt-5">
              <li className="text-sm font-extralight"><span className="text-base font-semibold text-Blue">Estilo Impecável:</span> Esteja sempre bem-apresentado em qualquer ocasião.</li>
              <li className="text-sm font-extralight"><span className="text-base font-semibold text-Blue">Praticidade e Liberdade:</span> Agende seus serviços quantas vezes for necessário.</li>
              <li className="text-sm font-extralight"><span className="text-base font-semibold text-Blue">Atendimento Premium:</span> Nossa equipe estará sempre à disposição para garantir sua melhor experiência.</li>
              <li className="text-sm font-extralight"><span className="text-base font-semibold text-Blue">Custo Fixo e Economia:</span> Pague um valor único e aproveite ao máximo sem surpresas no final do mês.</li>
            </ul>
            <hr className="border-gray-400 m-20 mb-5 mt-5" />
            <p className="font-extralight">Você merece o melhor cuidado. Invista em você e garanta um visual impecável o mês inteiro com nosso plano exclusivo. Estamos prontos para receber você a qualquer momento!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 text-center bg-gray-200 p-10 rounded-md 750sw:w-4/6 w-5/6 mr-auto ml-auto mb-10" id="about">
            <div className="lg:mb-0 mb-20">
              <h2 className="text-lg font-bold text-Blue mb-5">Plano Completo</h2>
              <h3 className="mb-2 text-Blue font-semibold">💈Cabelo + Barba (Ilimitados)</h3>
              <p className="font-extralight ml-14 mr-14">Com o Plano Completo, você pode cuidar do cabelo e da barba quantas vezes quiser durante todo o mês. Esse plano foi pensado para quem busca um cuidado completo e frequente, garantindo que seu visual esteja sempre impecável, em qualquer ocasião. Seja para um corte, um alinhamento de barba ou ajustes detalhados, você terá acesso total aos nossos serviços principais.</p>
              <hr className="border-gray-400 m-20 mb-5 mt-5" />
              <h3 className="mb-2 text-Blue font-semibold">💡 Benefício Adicional</h3>
              <p className="font-extralight ml-14 mr-14">Além disso, aproveite descontos exclusivos em outros serviços, como hidratação, coloração e tratamentos capilares. Esse é o plano ideal para quem não abre mão de um visual sempre bem cuidado com o máximo de vantagens.</p>
              <div className="flex justify-center mt-4">
                <p className="text-white text-sm p-2 bg-BlueLight rounded-full self-center">Preço: R$ {monthlyPlan?.priceFullPlan}</p>
              </div>
              <div className="mt-4">
                <IconButton>
                  <AllInclusiveIcon />
                </IconButton>
                <IconButton>
                  <CurrencyExchangeIcon />
                </IconButton>
                <IconButton>
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton>
                  <LocalActivityIcon />
                </IconButton>
                <IconButton>
                  <DiscountIcon />
                </IconButton>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-bold text-Blue mb-5">Plano Básico</h2>
              <h3 className="mb-2 text-Blue font-semibold">💈 Cabelo OU Barba (Ilimitados)</h3>
              <p className="font-extralight ml-14 mr-14">O Plano Básico é perfeito para quem precisa de manutenção frequente, mas prefere focar em um único serviço: corte de cabelo ou barba. Durante todo o mês, você poderá realizar quantas visitas forem necessárias para manter o estilo que você gosta, esteja com um corte sempre alinhado ou uma barba bem ajustada.</p>
              <hr className="border-gray-400 m-20 mb-5 mt-5" />
              <h3 className="mb-2 text-Blue font-semibold">💡 Benefício Adicional</h3>
              <p className="font-extralight ml-14 mr-14">Assim como o plano completo, o Plano Básico também oferece descontos especiais em outros serviços do salão, permitindo que você experimente tratamentos adicionais por um valor reduzido. Podendo desfrutar de ótimos serviços e economizando mais.</p>
              <div className="flex justify-center mt-4">
                <p className="text-white text-sm p-2 bg-BlueLight rounded-full self-center">Preço: R$ {monthlyPlan?.priceHalfPlan}</p>
              </div>
              <div className="mt-4">
                <IconButton>
                  <AllInclusiveIcon />
                </IconButton>
                <IconButton>
                  <CurrencyExchangeIcon />
                </IconButton>
                <IconButton>
                  <CalendarMonthIcon />
                </IconButton>
                <IconButton>
                  <LocalActivityIcon />
                </IconButton>
                <IconButton>
                  <DiscountIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoMonthlyPlan;