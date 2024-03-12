'use client'
import { useForm, SubmitHandler } from "react-hook-form"

type TUpdate = {
  patientsName: string,
  recordPatientRG: string,
  individualRegistrationCPF: string,
  numberHouse: number,
  telephone: string,
  sex: string,
  CEP: number,
  city: string,
  street: string,
  complement: string,
  dateBirth: number,
  neighborhood: string,
}

export default function CardFormUpdateData(){
  const { 
    register,
    handleSubmit, 
    formState: { errors },
   } = useForm<TUpdate>()
  const onSubmit: SubmitHandler<TUpdate> = (data) => {
    console.log(data)
    alert("Paciente Atualizado !")
  }
  return(
    <div className="flex flex-col items-center gap-10">
        <h1 className="font-bold text-3xl">Atualizar dados</h1>
      <div className="flex justify-center">
        <form className="grid grid-cols-2 gap-3 place-items-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col pl-10">
            <label>Nome do paciente:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("patientsName", {required: true})}/>
            {errors.patientsName && <span className="text-red-500 font-bold">Preencha este campo !</span>}
          </div>
          <div className="flex flex-col pl-10">
            <label>CEP:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("CEP",  {required: true})}/>
            {errors.CEP && <span className="text-red-500 font-bold">Preencha este campo !</span>}        
          </div>
          <div className="flex flex-col pl-10">
            <label>Registro do paciente(RG):</label>
            <input type="text" maxLength={12}  className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("recordPatientRG", {required: true})}/>
            {errors.recordPatientRG && <span className="text-red-500 font-bold">Preencha este campo !</span>}         
          </div>
          <div className="flex flex-col pl-10">
            <label>Cidade:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("city", {required: true})}/>
            {errors.city && <span className="text-red-500 font-bold">Preencha este campo !</span>}          
          </div>
          <div className="flex flex-col pl-10">
            <label>Cadastro de Pessoa Física(CPF):</label>
            <input type="text" maxLength={14}  className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("individualRegistrationCPF", {required: true})}/>
            {errors.individualRegistrationCPF && <span className="text-red-500 font-bold">Preencha este campo !</span>}         
          </div>
          <div className="flex flex-col pl-10">
            <label>Rua:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("street", {required: true})}/>
            {errors.street && <span className="text-red-500 font-bold">Preencha este campo !</span>}       
          </div>
          <div className="flex flex-col pl-10">
            <label>Numero da casa:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("numberHouse", {required: true})}/>
            {errors.numberHouse && <span className="text-red-500 font-bold">Preencha este campo !</span>}          
          </div>
          <div className="flex flex-col pl-10">
            <label>Complemento:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("complement", {required: true})}/>
            {errors.complement && <span className="text-red-500 font-bold">Preencha este campo !</span>}          
          </div>
          <div className="flex flex-col pl-10">
            <label>Telefone:</label>
            <input type="text" maxLength={14}  className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("telephone", {required: true})}/>
            {errors.telephone && <span className="text-red-500 font-bold">Preencha este campo !</span>}
          </div>
          <div className="flex flex-col pl-10">
            <label>Data de nascimento:</label>
            <input type="date" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("dateBirth", {required: true})}/>
            {errors.dateBirth && <span className="text-red-500 font-bold">Preencha este campo !</span>}
          </div>
          <div className="flex flex-col pl-10">
            <label>Sexo:</label>
            <select className="bg-white outline-none w-72 pl-1 border border-background rounded-xl p-1 cursor-pointer" {...register("sex", {required: true})}>
              <option value="null"></option>
              <option value="MASCULINO">MASCULINO</option>
              <option value="FEMININO">FEMININO</option>
            </select>
          </div>
          <div className="flex flex-col pl-10">
            <label>Bairro:</label>
            <input type="text" className="bg-white outline-none pl-2 w-72 border border-background rounded-xl" {...register("neighborhood", {required: true})}/>
            {errors.neighborhood && <span className="text-red-500 font-bold">Preencha este campo !</span>}
          </div>
          <div className="absolute mt-96 pt-40">
            <input type="submit" value={"ATUALIZAR"} className="text-white font-bold items-center bg-background w-44 rounded-3xl py-1 cursor-pointer hover:bg-background/90 transition-colors"/>
          </div>
        </form>
      </div>
    </div>
  )
}