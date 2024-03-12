import { BsPerson } from "react-icons/bs";


interface IDoctors {
  name: string,
  crm: number,
}

export default function SelectDoctor({ name, crm }:IDoctors){
  return (
    <div>
      <div className="flex items-center border border-background bg-white rounded-3xl p-2 w-72 h-14">
        <div className="flex items-center justify-center border border-background bg-gray-200 p-2 h-12 w-12 rounded-full">
          <p className="text-2xl text-gray-500">
            <BsPerson />
          </p>
        </div>
        <div className="flex flex-col pl-5">
          <h1 className="font-bold">Dr. {name}</h1>
          <span className="text-sm font-sans">CRM: {crm}</span>
        </div>
      </div>
    </div>
  )
}