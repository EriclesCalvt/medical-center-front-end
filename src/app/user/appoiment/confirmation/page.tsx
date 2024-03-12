import CardConsultConfirmation from "@/components/cardConsultConfirmation";

export default function ConfirmationData(){
  return (
    <div className="h-screen flex flex-col pt-20 pl-10">
      <h1 className="font-bold text-3xl">Confirmar Dados</h1>
      <CardConsultConfirmation />
    </div>
  )
}