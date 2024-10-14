import { Input } from "@mui/material";

const ManagementAdmin = () => {
  return(
    <div className="bg-Blue h-screen flex flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Gerenciamento do Site</h1>
        <p className="text-gray-900 font-medium text-sm">gerencie dados essenciais que podem ser volateis e imprevisíveis</p>
      </div>
      <div className="bg-BlueDarkSoft w-3/4 p-10 m-5 grid grid-cols-3">
        {/* Estabelecimento */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl">
          <h3 className="mb-1 ml-2">Estabelecimento</h3>
          <hr className="border-black mb-3"/>
          <div className="flex flex-col items-start ml-2 mb-2">
            <p>Data/Hora de funcionamento:</p>
            <Input className=""/>

          </div>
          <div className="flex flex-col items-start ml-2 mb-2">
            <p>Endereços:</p>
            <Input />

          </div>
          <div className="flex flex-col items-start ml-2 mb-2">
            <p>Telefone</p>
            <Input />

          </div>
        </div>

        {/* Preços, Serviços e Planos */}
        <div>

        </div>

        {/* Time */}
        <div>

        </div>
      </div>
    </div>
  )
};

export default ManagementAdmin;