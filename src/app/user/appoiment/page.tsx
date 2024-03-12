'use client'
import CardFormUpdateData from "@/components/CardFormUpdateData";
import RouterIndicator from "@/components/routerIndicator";
import { useRouter } from "next/navigation";

export default function Appoiment(){

  const router = useRouter()

  const handleSubmit = () => {
    router.push('/user/appoiment/speciality')
  }

  return (
    <div className="h-screen bg-background-card pl-10 pb-10 flex gap-10 items-center">
      <RouterIndicator color="bg-button/footer"/>
      <div className="flex flex-col gap-5 font-bold">
          <p>Agendar consulta</p>
          <p>Dados do paciente</p>
          <p>Especialidade</p>
          <p>Profissional</p>
          <p>Horario</p>
          <p>Confirmação</p>
        </div>
        <div className="h-96 border border-black"></div>
      <CardFormUpdateData Title="Dados do paciente" MethodSubmit={handleSubmit}/>
    </div>
  )
}