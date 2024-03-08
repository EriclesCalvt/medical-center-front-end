import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function CardFormLogin(){
  return (
    <div className="flex flex-col items-center gap-10 bg-white rounded-2xl h-full w-80 shadow-2xl">
      <div className="mt-10">
        <p className="text-3xl text-background font-bold">Faça seu login</p>
      </div>
      <form className="flex flex-col items-center gap-10 mb-10">
        <div className="bg-background-card h-10 rounded-2xl flex items-center justify-center pl-2 hover:h-14 transition-all">
          <p className="text-button/footer"><FaUser /></p>
          <input type="text" placeholder="e-mail" className="bg-background-card outline-none pl-4 "/>
        </div>
        <div className="bg-background-card h-10 rounded-2xl flex items-center justify-center pl-2 hover:h-14 transition-all">
          <p className="text-button/footer"><FaLock /></p>
          <input type="text" placeholder="senha" className="bg-background-card outline-none pl-4 "/>
        </div>
        <Link href={"/register"}>
          <p className="text-background hover:text-black">Ainda nao se inscreveu ?</p>
        </Link>
        <input type="submit" value={"ENTRAR"} className="text-white bg-background w-36 rounded-3xl p-4 cursor-pointer hover:bg-background/80 transition-colors"/>
      </form>
    </div>
  )
}