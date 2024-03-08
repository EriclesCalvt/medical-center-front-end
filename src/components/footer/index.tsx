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
            height={200}
          />
      </div>
      <div className="flex gap-60 pt-10">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Início</p>
          <p>PORQUE NOS ESCOLHER</p>
          <p>ESPECIALIDADES</p>
          <p>PLANOS</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-bold">Suporte</p>
          <p>FAQ</p>
          <p>TELEFONE</p>
          <p>CHAT</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-10 ">
        <div className="flex justify-around">
          <div className="text-5xl cursor-pointer">
            <IoLogoWhatsapp />
          </div>
          <div className="text-5xl cursor-pointer">
            <FaInstagramSquare />
          </div>
          <div className="text-5xl cursor-pointer">
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