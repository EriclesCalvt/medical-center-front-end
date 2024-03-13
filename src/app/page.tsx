import Element from "@/components/carrossel/element";
import CircleDoctorImage from "@/components/circleDoctorImage";
import { FaAppleAlt } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdGirl } from "react-icons/md";
import { MdToys } from "react-icons/md";
import DoctorImage from '@/app/_assets/doctor.png'
import TwoDoctorsImage from "@/app/_assets/twoDoctors.png"
import RocketIcon from "@/app/_assets/ios-icons/rocket.png"
import PillIcon from "@/app/_assets/ios-icons/pill.png"
import DNAIcon from "@/app/_assets/ios-icons/DNA.png"
import TermometerIcon from "@/app/_assets/ios-icons/termometer.png"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-background-card overflow-x-hidden pb-60">
      <div className="flex gap-10 mt-10">
        <div className="flex gap-x-96 mb-20">
          <CircleDoctorImage image={DoctorImage} icon1={RocketIcon} icon2={PillIcon}/>
          <div className="flex gap-10 flex-wrap w-96">
            <span className="font-bold font-sans tracking-wide text-3xl ">
            Temos aqui as melhores ofertas e profissionais do mercado!
            </span>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris imperdiet tincidunt felis sed mollis. 
            Nam sodales massa nec faucibus viverra. 
            Phasellus ornare purus nec libero posuere dignissim. 
            Donec sit amet arcu nibh. 
            Maecenas gravida condimentum mi nec tristique. 
            Cras ac ipsum sodales leo tempus volutpat.
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-x-96 pb-32 pt-32">
        <div className="flex gap-10 flex-wrap w-96">
        <span className="font-bold font-sans tracking-wide text-3xl ">
          Nos estamos prontos para ajudar você. Agende sua consulta!
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Mauris imperdiet tincidunt felis sed mollis. 
          Nam sodales massa nec faucibus viverra. 
          Phasellus ornare purus nec libero posuere dignissim. 
          Donec sit amet arcu nibh. 
          Maecenas gravida condimentum mi nec tristique. 
          Cras ac ipsum sodales leo tempus volutpat.
        </span>
        </div>
        <div>
          <CircleDoctorImage image={TwoDoctorsImage} icon1={DNAIcon} icon2={TermometerIcon}/>
        </div>
      </div>
      <div className="flex mt-40 justify-around w-full">
        <div>
          <p className="text-background text-6xl font-bold">
            SERVIÇOS <br /> OFERTADOS
          </p>
          <p className="tracking-wide text-3xl">Mais de 20 especialidades</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-white font-bold">
          <Element
           height="h-32"
           width="w-52"
           icon={<MdOutlineHealthAndSafety />} 
           content="Clínico Geral"/>
          <Element
           height="h-32"
           width="w-52"           
           icon={<FaAppleAlt />} 
           content="Nutrição"/>
          <Element
           height="h-32"
           width="w-52"           
           icon={<MdGirl />} 
           content="Ginecologia"/>
          <Element
           height="h-32"
           width="w-52"           
           icon={<MdToys />} 
           content="Pediatria"/>
        </div>
      </div>
    </main>
  );
}
