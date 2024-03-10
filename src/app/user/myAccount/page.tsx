import CardConsult from "@/components/cardConsult";

export default function MyAccount(){
  return (
    <div className="flex flex-col ml-10 justify-center h-screen">
      <div>
        <h1 className="text-3xl font-bold">Minha Conta</h1>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Consultas marcadas</h1>
      </div>
      <CardConsult />
    </div>
  )
}