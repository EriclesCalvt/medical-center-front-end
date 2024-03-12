import Button from "@/components/button";
import Link from "next/link";

export default function Configs(){
  return(
    <div className="bg-background-card flex flex-col justify-center pl-10 gap-10 h-min pb-5">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center text-white">
        <Link href={"/user/configs/dataupdate"} className="flex justify-center">
          <Button content="ALTERAR DADOS" height="h-20" width="w-60" />
        </Link>
        <Link href={""}>
          <Button content="SAIR" height="h-20" width="w-60" />
        </Link>    
      </div>      
    </div>
  )
}