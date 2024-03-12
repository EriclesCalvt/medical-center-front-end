import RouterIndicator from "@/components/routerIndicator"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
  <section className="flex items-center justify-center bg-background-card ">
    <div className="flex gap-10">
    <RouterIndicator color="bg-button/footer"/>
      <div className="flex flex-col gap-5 font-bold">
          <p>Agendar consulta</p>
          <p>Dados do paciente</p>
          <p>Especialidade</p>
          <p>Profissional</p>
          <p>Horario</p>
          <p>Confirmação</p>
      </div>
    <div className="h-96 border border-black"></div>
    </div>
    {children}
  </section>
)}