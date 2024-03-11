import CardConsult from "@/components/cardConsult";

export default function MyAccount(){
  return (
    <div className="bg-background-card flex flex-col items-start pl-10 gap-10 justify-center h-min pb-5">
      <div>
        <h1 className="text-3xl font-bold">Minha Conta</h1>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Consultas marcadas: </h1>
      </div>
      <div className="flex gap-10 flex-wrap">
        <CardConsult />
        <CardConsult />
        <CardConsult />
      </div>
    </div>
  )
}