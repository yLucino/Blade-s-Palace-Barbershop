import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import PriceAndService from "./pages/priceAndService/priceAndService";
// import Scheduling from "./pages/scheduling/scheduling";
import Team from "./pages/team/team";
import Header from "./partials/header/header";
import News from "./pages/newsPage/news";
import PopUp from "./partials/popUp/popUp";

const Index = ({ onLoginSuccess }: { onLoginSuccess: (token: string) => void }) => {
  return(
    <>
      <PopUp />
      <Header onLoginSuccess={onLoginSuccess}/>
      <Home />
      <News />
      <PriceAndService />
      <Team />
      {/* <Scheduling /> */}
      <Contact />
    </>
  )
}

export default Index;