import ImageHome from "@/app/_assets/PorqueNosEscolher.png"
import Element from "@/components/carrossel/element";
import Image from "next/image";
import { FaAppleAlt } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdGirl } from "react-icons/md";
import { MdToys } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-background-card overflow-x-hidden pb-60">
      <div className="mt-10 rounded-lg">
        <Image src={ImageHome} alt="Imagem da pagina inicial" height={1000}/>
      </div>
      <div className="flex mt-40 justify-around w-full">
        <div>
          <p className="text-background text-5xl font-bold">
            SERVIÇOS <br /> OFERTADOS
          </p>
          <p className="tracking-wide text-xl">Mais de 20 especialidades</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-white font-bold">
          <Element
           icon={<MdOutlineHealthAndSafety />} 
           content="Clínico Geral"/>
          <Element
           icon={<FaAppleAlt />} 
           content="Nutrição"/>
          <Element
           icon={<MdGirl />} 
           content="Ginecologia"/>
          <Element
           icon={<MdToys />} 
           content="Pediatria"/>
        </div>
      </div>
    </main>
  );
}
