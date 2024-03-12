'use client'
import Button from "@/components/button"
import RouterIndicator from "@/components/routerIndicator"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function Speciality(){

  const router = useRouter()

  const handleNextPage = () => {
    console.log("oi")
    router.push('/user/appoiment/speciality')
}

  return (
    <div className="h-screen pl-10 flex gap-10 items-center">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">Selecione a especialidade:</h1>
        <div className="text-white grid grid-cols-3 gap-x-12 gap-y-5 px">
          <Link href={""} onClick={handleNextPage}>
            <Button content="ALERGOLOGIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="CARDIOLOGIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="CLINICO GERAL" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="GASTROLOGISTA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="GINECOLOGIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="DERMATOLOGIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="NEUROCIRURGIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="OFTAMOLOGIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="ORTOPEDIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="PEDIATRIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="PSQUIATRIA" height="h-20" width="w-52"/>
          </Link>
          <Link href={""} onClick={handleNextPage}>
          <Button content="UROLOGIA" height="h-20" width="w-52"/>
          </Link>
        </div>
      </div>
    </div>
  )
}