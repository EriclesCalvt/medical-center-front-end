export type IProp = {
  color: string
}
export default function CircleIndicator({color}:IProp){
  return (
      <div className={`h-5 w-5 rounded-full ${color}`}></div>
  )
}