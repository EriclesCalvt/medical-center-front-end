import SelectDoctor from "@/components/SelectDoctor";

export default function Professional() {
  return (
    <div className="h-screen flex flex-col items-center justify-center mb-10 pl-10">
      <h1 className="font-bold text-3xl">Selecione o médico</h1>
      <div className="flex flex-col gap-10">
        <SelectDoctor name="Ericles Duarte" crm={123456790}/>
        <SelectDoctor name="Willian Andrade" crm={98765431}/>
        <SelectDoctor name="Antonio Cruz" crm={12131231}/>
        <SelectDoctor name="Joao Otavio" crm={43543656}/>
      </div>
    </div>
  )
}