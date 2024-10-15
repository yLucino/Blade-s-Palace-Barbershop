import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, IconButton } from '@mui/material';

const ManagementAdmin = () => {
  return(
    <div className="bg-Blue h-screen flex flex-col items-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-AntonSC tracking-wider text-Yellow">Gerenciamento do Site</h1>
        <p className="text-gray-900 font-medium text-sm">gerencie dados essenciais que podem ser volateis e imprevisíveis</p>
      </div>
      <div className="bg-BlueDarkSoft w-3/4 p-10 m-5 grid grid-cols-3 gap-3">
        {/* Estabelecimento */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl">
          <h3 className="mb-1 font-semibold text-xl text-center">Estabelecimento</h3>
          <hr className="border-black mb-3"/>

          <div className="flex flex-col items-start ml-2 mb-2">
            <h4 className="font-medium mb-1">Data/Hora de funcionamento:</h4>
            <div className='flex flex-col flex-wrap gap-1'>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">seg: 7h00 ás 19h30</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">ter: 7h00 ás 19h30</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">qua: 7h00 ás 19h30</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">qui: 7h00 ás 19h30</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">sex: 7h00 ás 19h30</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">sáb: 7h00 ás 19h30</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center'>
                <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                  <p className="text-sm">dom: Fechado</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start ml-2 mb-2">
            <h4 className="font-medium">Endereços:</h4>
            <div className='flex flex-wrap items-center gap-1'>
              <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                <p className="text-sm">R. Frederico Jensen</p>
              </div>
              <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                <p className="text-sm">R. Franz Volles</p>
              </div>
              <IconButton aria-label='edit'>
                <EditIcon />
              </IconButton>
              <IconButton aria-label='add'>
                <AddIcon />
              </IconButton>
            </div>
          </div>

          <div className="flex flex-col items-start ml-2 mb-2">
            <h4 className="font-medium">Telefones:</h4>
            <div className='flex flex-wrap items-center gap-1'>
              <div className="p-1 pl-2 pr-2 bg-slate-400 rounded-full">
                <p className="text-sm">8309182309</p>
              </div>
              <IconButton aria-label='edit'>
                <EditIcon />
              </IconButton>
              <IconButton aria-label='add'>
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Preços, Serviços e Planos */}
        <div className="bg-slate-300 w-auto p-5 pt-2 rounded-xl relative">
          {/* Serviços */}
          <div>
            <h3 className="mb-1 font-semibold text-xl text-center">Preços, Serviços e Planos</h3>
            <hr className="border-black mb-3"/>
            <div>
              <h4 className="font-medium mb-1">Serviços:</h4>
              <div className='flex mb-2'>
                <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-lg text-sm'>
                  <h4 className='mb-1'><span className='text-black font-semibold'>Titúlo:</span> Corte De Cabelo</h4>
                  <p className='mb-1'><span className='text-black font-semibold'>Imagem URL:</span> https://imagemurlexample/</p>
                  <p className='mb-1'><span className='text-black font-semibold'>Descrição:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus doloremque beatae voluptas explicabo asperiores at nisi natus quia ex.</p>
                  <p className='mb-1'><span className='text-black font-semibold'>Preço com plano:</span> R$ 00.00</p>
                  <p><span className='text-black font-semibold'>Preço sem plano:</span> R$ 30.00</p>
                </div>
                <div className='flex flex-col justify-evenly'>
                  <IconButton aria-label='edit'>
                    <EditIcon />
                  </IconButton>
                  <IconButton aria-label='edit'>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <Button variant='outlined'>
                Adicionar novo serviço
                <AddIcon />
              </Button>
            </div>
          </div>

          {/* Planos Mensais */}
          <div>
            <h4 className="font-medium mb-1">Planos Mensais:</h4>
            <div className='flex flex-col'>
              <div className='flex items-center text-sm'>
                <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-full'>
                  <p><span className='text-black font-semibold'>Plano cabelo E barba:</span> R$ 80.00</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
              <div className='flex items-center text-sm'>
                <div className='p-1 pl-2 pr-2 bg-slate-400 rounded-full'>
                  <p><span className='text-black font-semibold'>Plano cabelo OU barba:</span> R$ 65.00</p>
                </div>
                <IconButton aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>

        {/* Time */}
        <div>
          
        </div>
      </div>
    </div>
  )
};

export default ManagementAdmin;