import { ServiceInPlan } from './app/shared/models/serviceInPlan';
import { ServiceNoPlan } from './app/shared/models/serviceNoPlan';
import { SubscriptionPlan } from './app/shared/models/subscriptionPlan';

export const sample_subscriptionPlan: SubscriptionPlan[] = [
  {
    title: 'Assinatura Mensal',
    imageUrl: '../../../assets/image/header-img/penteado.png',
    description: 'Exclusiva assinatura mensal, onde você pode cortar o cabelo e fazer a barba quantas vezes quiser durante todo o mês. Garantindo que você esteja sempre com o visual impecável. Estaremos prontos para atender você sempre que precisar.',
    priceFullPlan: 80.00,
    priceHalfPlan: 60.00,
  }
]

export const sample_servicesNoPlan_left: ServiceNoPlan[] = [
  {
    id: '1',
    title: 'Cabelo e Barba',
    imageUrl: './assets/image/priceAndService-img/corte-cabeloEbarba.jpg',
    description: 'Corte de cabelo e barba por apenas 50 reais. Venha desfrutar do talento e experiência de nossos barbeiros, que garantem um visual impecável em cada visita. Cuide-se por um preço acessível.',
    price: 50.00,
  },
  {
    id: '2',
    title: 'Corte de Cabelo',
    imageUrl: './assets/image/priceAndService-img/corte-de-cabelo.jpg',
    description: 'Corte de cabelo por apenas 30 reais. Estamos prontos para oferecer um visual impecável a cada uma de sua visita. Aproveite essa oportunidade para cuidar do seu estilo por um preço acessível.',
    price: 30.00,
  },
  {
    id: '3',
    title: 'Corte de Barba',
    imageUrl: './assets/image/priceAndService-img/corte-barba.jpg',
    description: 'Corte de barba por apenas 30 reais. Iremos proporcionar um acabamento impecável e personalizado. Não perca a chance de cuidar do seu visual com estilo e economia. Venha conhecer!',
    price: 30.00,
  },
  {
    id: '4',
    title: 'Cabelo Platinado',
    imageUrl: './assets/image/priceAndService-img/cabelo-platinado.jpg',
    description: 'Cabelo platinado, a partir de 150 reais. Deixe o seu cabelo com um brilho incrível e uma cor deslumbrante. Aproveite essa oportunidade para ousar e destacar-se com um novo estilo.',
    price: 150.00,
  },
]

export const sample_servicesNoPlan_right: ServiceNoPlan[] = [
  {
    id: '5',
    title: 'Sobrancelha',
    imageUrl: './assets/image/priceAndService-img/corte-sombrancelha.jpg',
    description: 'Fazemos sobrancelhas por apenas 10 reais. Proporcionamos um acabamento impecável e personalizado. Aproveite essa oportunidade para cuidar do seu visual de forma acessível.',
    price: 10.00,
  },
  {
    id: '6',
    title: 'Depilação com Cera',
    imageUrl: './assets/image/priceAndService-img/cera-depilatoria.jpeg',
    description: 'Depilação com cera por apenas 20 reais. Acabamento suave e duradouro. Aproveite essa oportunidade para cuidar da sua pele de forma acessível. Visite-nos e veja a diferença.',
    price: 20.00,
  },
  {
    id: '7',
    title: 'Hidratação Facial',
    imageUrl: './assets/image/priceAndService-img/hidratação-facial.jpeg',
    description: 'Hidratação facial por apenas 20 reais. Tratamento revitalizante que deixa sua pele fresca e saúdavel. Aproveite esta oportunidade para cuidar da sua pele de forma acessível.',
    price: 20.00,
  },
  {
    id: '8',
    title: 'Cabelo com Luzes',
    imageUrl: './assets/image/priceAndService-img/cabelo-com-luzes.png',
    description: 'Aplicação de luzes no cabelo, a partir de 120 reais. Transforme seu visual com o toque iluminado e natural. Aproveite essa oportunidade para realçar sua beleza com estilo.',
    price: 120.00,
  },
]


export const sample_servicesInPlan: ServiceInPlan[] = [
  {
    id: '1',
    title: 'Cabelo e Barba',
    price: 0.00,
  },
  {
    id: '2',
    title: 'Corte de Cabelo',
    price: 0.00,
  },
  {
    id: '3',
    title: 'Corte de Barba',
    price: 0.00,
  },
  {
    id: '4',
    title: 'Cabelo Platinado',
    price: 80.00,
  },
  {
    id: '5',
    title: 'Sobrancelha',
    price: 0.00,
  },
  {
    id: '6',
    title: 'Depilação com Cera',
    price: 10.00,
  },
  {
    id: '7',
    title: 'Hidratação Facial',
    price: 10.00,
  },
  {
    id: '8',
    title: 'Cabelo com Luzes',
    price: 80.00,
  }
]