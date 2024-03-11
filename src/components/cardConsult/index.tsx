export default function CardConsult(){
  return (
      <div>
        <div className="flex gap-52">
          <div className="border border-background bg-white pl-4 flex flex-col h-min p-2 w-96 rounded-xl">
            <div>
              <h1 className="font-bold text-xl py-1">Agendamento:</h1>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <h3 className="font-bold">Data:</h3>
                  <span>dd/mm/aaaa</span>
                </div>
                <div>
                  <h3 className="font-bold">Profissional:</h3>
                  <span>Nome do profissional</span>
                </div> 
                <div>
                  <h3 className="font-bold">Horario:</h3>
                  <span>00:00</span>
                </div>
                <div>
                  <h3 className="font-bold">Especialidade:</h3>
                  <span>Pediatria</span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-xl py-1">Paciente:</h1>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <h3 className="font-bold">Nome:</h3>
                  <span>Ericles Cavalcante Duarte</span>
                </div>
                <div>
                  <h3 className="font-bold">RG:</h3>
                  <span>0000000000-0</span>
                </div>
                <div>
                  <h3 className="font-bold">CPF:</h3>
                  <span>000.000.000-00</span>
                </div>
                <div>
                  <h3 className="font-bold">Data de Nascimento:</h3>
                  <span>dd/mm/aaaa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}