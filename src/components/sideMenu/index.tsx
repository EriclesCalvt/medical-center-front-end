'use client'
import Image from "next/image"
import { useState } from "react"
import buttonCloseMenu from "@/app/_assets/back-button.png"
import Link from "next/link"
import LogoImage from "@/app/_assets/Logo.png"

export default function SideMenu(){

  const [hiddenMenu, setHiddenMenu] = useState<Boolean>(true)

  const handleToggleMenu = () => {
    setHiddenMenu((state) => !state)
  }

  function sideSlider(){
    return (
      <div onClick={handleToggleMenu} className="bg-white flex flex-col items-center h-min py-2 w-40 shadow-2xl rounded-2xl transition-all">
        <Image className="h-24 w-24 rotate-180 cursor-pointer" src={buttonCloseMenu} alt="botao de fechar menu"/>
        <ul className="flex items-center justify-center flex-col gap-20 mt-20 text-button/footer font-bold transition-all">
          <Link className="cursor-pointer p-2" href={"/who-are-us"}>QUEM SOMOS NOS</Link>
          <Link className="cursor-pointer p-2" href={""}>CONTATE NOS</Link>
          <Link className="cursor-pointer p-2" href={""}>SOBRE NOS</Link>
          <Link className="cursor-pointer p-2" href={""}>FAQ</Link>
        </ul>
        <div className="mt-56">
          <Image alt="Logo_da_CMED" src={LogoImage}/>
        </div>
      </div>
    )
  }

  return (
    <>
      {hiddenMenu ? (
      <div onClick={handleToggleMenu} className="flex flex-col items-center justify-center gap-2 border-2 border-background rounded-full h-16 w-16 mt-5 cursor-pointer transition-all">
        <div className="bg-background border border-background w-8 h-1 rounded-md"></div>
        <div className="bg-background border border-background w-8 h-1 rounded-md"></div>
        <div className="bg-background border border-background w-8 h-1 rounded-md"></div>
      </div>
      ) : (
        <div className="absolute -right-2">
          {sideSlider()}
        </div>
      )}
    </>
  )
}