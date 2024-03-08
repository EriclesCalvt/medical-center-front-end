import Image from "next/image"
import LogoImage from "@/app/_assets/Logo.png"
import Button from "../button"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){

  return (
    <div className="flex justify-between pr-20 pl-20 pb-60 bg-button/footer  text-white w-full">
      <div className="pt-5 ">
        <Image
            alt="Logo da CMED" 
            src={LogoImage} 
            height={150}
          />
      </div>
      <div className="flex gap-60 pt-10">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Início</p>
          <p className="cursor-pointer hover:text-xl transition-all">PORQUE NOS ESCOLHER</p>
          <p className="cursor-pointer hover:text-xl transition-all">ESPECIALIDADES</p>
          <p className="cursor-pointer hover:text-xl transition-all">PLANOS</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Suporte</p>
          <p className="cursor-pointer hover:text-xl transition-all">FAQ</p>
          <p className="cursor-pointer hover:text-xl transition-all">TELEFONE</p>
          <p className="cursor-pointer hover:text-xl transition-all">CHAT</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-10 ">
        <div className="flex justify-around">
          <div className="text-5xl cursor-pointer hover:text-6xl transition-all">
            <IoLogoWhatsapp />
          </div>
          <div className="text-5xl cursor-pointer hover:text-6xl transition-all">
            <FaInstagramSquare />
          </div>
          <div className="text-5xl cursor-pointer hover:text-6xl transition-all">
            <FaFacebook />
          </div>
        </div>
        <div>
          <Button 
          height="h-12"
          width="w-72"
          content={"Contato"}/>
        </div>
      </div>
    </div>
  )
}