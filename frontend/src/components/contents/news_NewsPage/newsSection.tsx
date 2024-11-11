import { Link } from "react-router-dom";

const NewsSection = () => {
  return(
    <>
      {/* Fazer display Grid 2cols 2rows - Responsive */}
      <div className="flex justify-center items-center">
        {/* Fazer layout se não tiver nenhuma novidade */}
        {/* Fazer popUp pedindo se o user quer ver as novidades */}
        <Link to={'/novidades/${id}'}>
          <div className="bg-GrayLight hover:bg-GrayBlue hover:scale-105 transition-all cursor-pointer flex rounded-lg">
            <img className="w-80 rounded-tl-lg rounded-bl-lg object-cover" src="https://media.istockphoto.com/id/506514230/pt/foto/barba-cuidar-se.jpg?s=612x612&w=0&k=20&c=72NFvAcPT0gqdwkhQdmp_QEVJmN9NfCc1YMGlvjLPY4=" alt="barber" />
            <div className="flex flex-col justify-between m-5">
              <div>
                <h1 className="font-AntonSC text-Yellow text-2xl pl-1">Novo Serviço</h1>
                <hr className="border-Yellow mt-1 mb-2"/>
                <h2 className="pl-1 text-Yellow font-semibold">Sub título</h2>
                <div className="overflow-x-hidden overflow-y-scroll mt-2 mb-5 max-h-28">
                  <p className="max-w-96 text-sampleText text-sm pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, esse? Sequi tenetur at ut quos nam expedita quo possimus earum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, esse? Sequi tenetur at ut quos nam expedita quo possimus earum!</p>
                </div>
              </div>
              <div className="flex w-full bottom-0 justify-end">
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NewsSection;