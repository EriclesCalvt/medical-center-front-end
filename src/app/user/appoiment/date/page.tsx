'use client'
import Button from "@/components/button";
import DateCalendarValue from "@/components/calendar";
import Link from "next/link";

export default function ConfirmationData(){
  return (
    <div className="flex flex-col items-center h-screen pt-20 pl-10 gap-10">
      <h1 className="font-bold text-3xl">Marque seu dia e horário</h1>
      <div className="flex gap-10">
        <div>
          <DateCalendarValue />
        </div>
        <div className="text-white grid grid-cols-3 gap-3">
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
          <Link href={""}>
            <Button content="00:00" height="h-10" width="w-24"/>
          </Link>
        </div>
      </div>
    </div>
  )
}