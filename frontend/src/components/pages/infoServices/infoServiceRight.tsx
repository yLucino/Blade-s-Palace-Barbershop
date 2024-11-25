import HeaderInfo from "../../partials/header/header-info/header-info";
import MenuButton from "../../partials/menuButton/menuButton";
import InfoServiceRightSection from "../../contents/infos_ServicePage/infoServiceRightSection";
import InfoServiceLeftSection from "../../contents/infos_ServicePage/infoServiceLeftSection";
import InfoServiceIndex from "../../contents/infos_ServicePage/infoServiceIndex";

export const InfoServiceRight = () => {
  return(
    <>
      <div className="bg-White w-full h-screen">
        <HeaderInfo />
        <div className="flex flex-col p-10 pt-40 h-screen justify-between">
          <MenuButton />
          <InfoServiceIndex />
          <div className="mt-10">
            <h2 className="text-center text-xl text-GrayBlue font-semibold">Outros Serviços</h2>
            <ul className="flex flex-wrap justify-center gap-2 mt-4">
              <InfoServiceRightSection />
              <InfoServiceLeftSection />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoServiceRight;