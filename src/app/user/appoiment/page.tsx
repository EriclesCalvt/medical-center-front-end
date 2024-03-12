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
    <div className="h-screen pl-10 pb-10 flex gap-10 items-center">
      <CardFormUpdateData Title="Dados do paciente" MethodSubmit={handleSubmit}/>
    </div>
  )
}