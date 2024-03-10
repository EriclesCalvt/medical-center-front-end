export type IProp = {
  color: string
  colorIndicator?: string
}
export default function CircleIndicator({color, colorIndicator}:IProp){
  return (
      <div className={color ? `h-5 w-5 rounded-full ${color}` : `h-5 w-5 rounded-full ${colorIndicator}`}></div>
  )
}