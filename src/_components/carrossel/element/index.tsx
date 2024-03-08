interface IProps {
  content: string,
  icon: any,
}

export default function Element({content, icon}: IProps){
  return (
    <div>
      <div className="flex flex-col gap-1 items-center justify-center bg-background p-3 px-8 rounded-lg">
        <p className="text-5xl">
         {icon}
        </p>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  )
}