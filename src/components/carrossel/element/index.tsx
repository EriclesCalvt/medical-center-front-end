interface IProps {
  content: string,
  icon?: any,
  height: string,
  width?: string,
}

export default function Element({content, icon, height,width}: IProps){
  return (
    <div>
      <div className={`flex flex-col gap-1 items-center justify-center bg-background ${height} ${width} rounded-2xl`}>
        <p className="text-5xl">
         {icon}
        </p>
        <p className="text-2xl">{content}</p>
      </div>
    </div>
  )
}