import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import PriceAndService from "./pages/priceAndService/priceAndService";
// import Scheduling from "./pages/scheduling/scheduling";
import Team from "./pages/team/team";
import Header from "./partials/header/header";
import News from "./pages/newsPage/news";

const Index = ({ onLoginSuccess }: { onLoginSuccess: (token: string) => void }) => {
  return(
    <>
      <ToastContainer autoClose={3500} position={"bottom-left"} />
      <Header onLoginSuccess={onLoginSuccess}/>
      <Home />
      <PriceAndService />
      <Team />
      {/* <Scheduling /> */}
      <News />
      <Contact />
    </>
  )
}

export default Index;