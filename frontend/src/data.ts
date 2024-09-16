import { Services } from './app/shared/models/services';
import { SubscriptionPlan } from './app/shared/models/subscriptionPlan';
import { EmployeeTeam } from './app/shared/models/employeeTeam';
import { Login } from './app/shared/models/login';

export const sample_subscriptionPlan: SubscriptionPlan[] = [
  {
    title: 'Assinatura Mensal',
    imageUrl: '../../../assets/image/header-img/penteado.png',
    description: 'Exclusiva assinatura mensal, onde você pode cortar o cabelo e fazer a barba quantas vezes quiser durante todo o mês. Garantindo que você esteja sempre com o visual impecável. Estaremos prontos para atender você sempre que precisar.',
    priceFullPlan: 80.00,
    priceHalfPlan: 60.00,
  }
]

export const sample_services_left: Services[] = [
  {
    id: '1',
    title: 'Cabelo e Barba',
    imageUrl: './assets/image/priceAndService-img/corte-cabeloEbarba.jpg',
    description: 'Corte de cabelo e barba por apenas 50 reais. Venha desfrutar do talento e experiência de nossos barbeiros, que garantem um visual impecável em cada visita. Cuide-se por um preço acessível.',
    priceNoPlan: 50.00,
    priceInPlan: 0.00,
  },
  {
    id: '2',
    title: 'Corte de Cabelo',
    imageUrl: './assets/image/priceAndService-img/corte-de-cabelo.jpg',
    description: 'Corte de cabelo por apenas 30 reais. Estamos prontos para oferecer um visual impecável a cada uma de sua visita. Aproveite essa oportunidade para cuidar do seu estilo por um preço acessível.',
    priceNoPlan: 30.00,
    priceInPlan: 0.00,
  },
  {
    id: '3',
    title: 'Corte de Barba',
    imageUrl: './assets/image/priceAndService-img/corte-barba.jpg',
    description: 'Corte de barba por apenas 30 reais. Iremos proporcionar um acabamento impecável e personalizado. Não perca a chance de cuidar do seu visual com estilo e economia. Venha conhecer!',
    priceNoPlan: 30.00,
    priceInPlan: 0.00,
  },
  {
    id: '4',
    title: 'Cabelo Platinado',
    imageUrl: './assets/image/priceAndService-img/cabelo-platinado.jpg',
    description: 'Cabelo platinado, a partir de 150 reais. Deixe o seu cabelo com um brilho incrível e uma cor deslumbrante. Aproveite essa oportunidade para ousar e destacar-se com um novo estilo.',
    priceNoPlan: 150.00,
    priceInPlan: 80.00,
  },
]

export const sample_services_right: Services[] = [
  {
    id: '5',
    title: 'Sobrancelha',
    imageUrl: './assets/image/priceAndService-img/corte-sombrancelha.jpg',
    description: 'Fazemos sobrancelhas por apenas 10 reais. Proporcionamos um acabamento impecável e personalizado. Aproveite essa oportunidade para cuidar do seu visual de forma acessível.',
    priceNoPlan: 10.00,
    priceInPlan: 0.00,
  },
  {
    id: '6',
    title: 'Depilação com Cera',
    imageUrl: './assets/image/priceAndService-img/cera-depilatoria.jpeg',
    description: 'Depilação com cera por apenas 20 reais. Acabamento suave e duradouro. Aproveite essa oportunidade para cuidar da sua pele de forma acessível. Visite-nos e veja a diferença.',
    priceNoPlan: 20.00,
    priceInPlan: 10.00,
  },
  {
    id: '7',
    title: 'Hidratação Facial',
    imageUrl: './assets/image/priceAndService-img/hidratação-facial.jpeg',
    description: 'Hidratação facial por apenas 20 reais. Tratamento revitalizante que deixa sua pele fresca e saúdavel. Aproveite esta oportunidade para cuidar da sua pele de forma acessível.',
    priceNoPlan: 20.00,
    priceInPlan: 10.00,
  },
  {
    id: '8',
    title: 'Cabelo com Luzes',
    imageUrl: './assets/image/priceAndService-img/cabelo-com-luzes.png',
    description: 'Aplicação de luzes no cabelo, a partir de 120 reais. Transforme seu visual com o toque iluminado e natural. Aproveite essa oportunidade para realçar sua beleza com estilo.',
    priceNoPlan: 120.00,
    priceInPlan: 80.00,
  },
]

export const sample_employee_allteam: EmployeeTeam[] = [
  {
    id: '1',
    imageUrl: '../../../../public/assets/image/team-img/profile-img.jpg',
    name: 'Matheus',
    jobRole: 'Barbeiro Profissional',
    instagramUrl: 'https://www.instagram.com/matheuserickcoelho/',
    facebookUrl: 'https://www.facebook.com/matheus.coelho.752487?locale=pt_BR',
    whatsappUrl: 'https://api.whatsapp.com/message/OQPYP5XUZGU7E1?autoload=1&app_absent=0',
    description: 'Barbeiro uma sólida experiência de 2 anos no setor, trazendo um vasto conhecimento e habilidade para cada serviço oferecido. Atencioso a todas as suas petições, ele se dedica a entender suas necessidades e a garantir que você receba o melhor atendimento possível.',
    businessAddress: 'Rua Franz Volles Nrº1636',
  },
  {
    id: '2',
    imageUrl: '../../../../public/assets/image/team-img/profile-img.jpg',
    name: 'Isaque',
    jobRole: 'Barbeiro Prof. | Fundador',
    instagramUrl: 'https://www.instagram.com/isaqueluizsilva/',
    facebookUrl: 'https://www.facebook.com/isaque.luizsilva.9?locale=pt_BR',
    whatsappUrl: 'https://api.whatsapp.com/message/OQPYP5XUZGU7E1?autoload=1&app_absent=0',
    description: 'Barbeiro com 3 anos de experiência e dedicado a estudar e entender todas as necessidades dos clientes, garantindo um serviço personalizado e de alta qualidade. Ele está sempre atualizado com as últimas tendências e técnicas para oferecer o melhor atendimento possível.',
    businessAddress: 'Rua Frederico Jensen Nrº3020',
  },
  {
    id: '3',
    imageUrl: '../../../../public/assets/image/team-img/profile-img.jpg',
    name: 'Vinícius',
    jobRole: 'Barbeiro Profissional',
    instagramUrl: 'https://www.instagram.com/viniiii_oliveira/',
    facebookUrl: 'https://www.facebook.com/?locale=pt_BR',
    whatsappUrl: 'https://api.whatsapp.com/message/OQPYP5XUZGU7E1?autoload=1&app_absent=0',
    description: 'Barbeiro com um ano de experiência, está em constante busca para fornecer sempre a melhor experiência para cada cliente. Com dedicação e atenção aos detalhes, esforçado para entender e atender às necessidades individuais, garantindo que cada visita seja única e satisfatória.',
    businessAddress: 'Rua Frederico Jensen Nrº3020',
  },
] // in database

export const sample_users_login: Login[] = [
  {
    email: 'chiodiniluciano@gmail.com',
    password: 'chuva2243'
  },
]