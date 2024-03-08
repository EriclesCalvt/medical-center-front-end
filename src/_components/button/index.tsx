interface IProps {
  content: string
  height: string
  width?: string
  functionality?: any
}
export default function Button({content, height, width, functionality}:IProps){
  return (
    <div>
    <button onClick={functionality} className={`flex items-center justify-center ${height} ${width} bg-background
    rounded-xl text-xl font-bold pointer-events-none`}>
      {content}
    </button>
    </div>
  )
}