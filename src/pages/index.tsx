import { getOptionsForVote } from "@/utils/getRandom"
import { trpc } from "@/utils/trpc"
import { useEffect, useState } from 'react'


export default function Home() {
  // const [number, setNumber] = useState('')
  // useEffect(() => setNumber('red'), [])

  const [first, second] = getOptionsForVote();


  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Who is your favorite?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-800">{first}</div>
        <div className="p-8">vs</div>
        <div className="w-16 h-16 bg-red-800">{second}</div>
      </div>
    </div>
  )
}
