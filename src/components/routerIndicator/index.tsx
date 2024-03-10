import CircleIndicator from "./circleIndicator";
import { IProp } from "./circleIndicator";

export default function RouterIndicator({color, colorIndicator}: IProp){
  return (
    <div className="flex">
      <div className="absolute ml-2 z-0 h-60 border-2 border-black"></div>
      <div className="flex flex-col gap-6 z-10">
        <CircleIndicator color={color} colorIndicator={colorIndicator}/>
        <CircleIndicator color={color} colorIndicator={colorIndicator}/>
        <CircleIndicator color={color} colorIndicator={colorIndicator}/>
        <CircleIndicator color={color} colorIndicator={colorIndicator}/>
        <CircleIndicator color={color} colorIndicator={colorIndicator}/>
        <CircleIndicator color={color} colorIndicator={colorIndicator}/>
      </div>
    </div>
  )
}