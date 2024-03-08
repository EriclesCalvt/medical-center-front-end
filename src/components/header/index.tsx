import Image from "next/image";
import LogoImage from "@/app/_assets/Logo.png"
import SideMenu from "../sideMenu";

export default function Header(){
  return (
    <div className="flex shadow-2xl">
      <div className="pl-5">
        <Image
          alt="Logo da CMED" 
          src={LogoImage} 
          width={130}
          height={300}
        />
      </div>
      <div className="flex justify-between pr-5 pl-5 w-screen">
        <div className="flex flex-col pt-5">
          <p className="text-background text-4xl font-bold">Centro Médico</p>
          <p className="tracking-widest pl-1">ESPECIALIDADES</p>
        </div>
        <div>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}