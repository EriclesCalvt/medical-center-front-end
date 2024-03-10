import Element from "@/components/carrossel/element";
import RouterIndicator from "@/components/routerIndicator";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import Link from "next/link"
export default function HomeUser(){
  return (
    <main className="pb-40 bg-background-card h-screen flex items-center justify-center gap-20">
      <div className="flex gap-10">
        <RouterIndicator color="bg-button/footer"/>
        <div className="flex flex-col gap-5 font-bold">
          <p>Agendar consulta</p>
          <p>Dados do paciente</p>
          <p>Especialidade</p>
          <p>Profissional</p>
          <p>Horario</p>
          <p>Confirmação</p>
        </div>
      </div>

      <div className="h-96 border border-black"></div>

      <div className="flex flex-col gap-10">
        <div>
          <p className="font-bold text-4xl">Bem vindo! O que deseja acessar ?</p>
        </div>
        <div className="flex gap-10 text-white font-bold">
         <Link href={"/user/appoiment"} className="cursor-pointer">
            <Element height="h-52"  width="w-60" content="Agendar consulta" icon={<FaUserDoctor />}/>
          </Link>
         <Link href={"/user/myAccount"} className="cursor-pointer">
            <Element height="h-52"  width="w-60" content="Acessar minha conta" icon={<FaRegUserCircle />}/>
          </Link>          
         <Link href={"/user/configs"} className="cursor-pointer">
            <Element height="h-52"  width="w-60" content="Configurações" icon={<GrConfigure />}/>
          </Link>        
          </div>
      </div>
    </main>
  )
}