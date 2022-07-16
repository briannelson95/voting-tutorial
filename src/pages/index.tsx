import { getOptionsForVote } from "@/utils/getRandom"
import { trpc } from "@/utils/trpc"
import { useEffect, useMemo, useState } from 'react'

const btn =
  "inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";


export default function Home() {
  // const [number, setNumber] = useState('')
  // useEffect(() => setNumber('red'), [])

  const [ids, updateIds] = useState(() => getOptionsForVote());

  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(["get-pokemon-by-id", { id: first }]);
  const secondPokemon = trpc.useQuery(["get-pokemon-by-id", { id: second }]);

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

  const voteForFavorite = (selected: number) => {

    updateIds(getOptionsForVote())
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Who is your favorite?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-64 h-64 flex flex-col items-center">
          <img 
            src={firstPokemon.data?.sprites.front_default} 
            className="w-full" 
          />
          <div className="text-xl text-center capitalize">
            {firstPokemon.data.name}
          </div>
          <button className={btn} onClick={() => voteForFavorite(first)}>Favorite</button>
        </div>
        <div className="p-8">vs</div>
        <div className="w-64 h-64 flex flex-col items-center">
          <img 
            src={secondPokemon.data?.sprites.front_default} 
            className="w-full" 
          />
          <div className="text-xl text-center capitalize">
            {secondPokemon.data.name}
          </div>
          <button className={btn} onClick={() => voteForFavorite(second)}>Favorite</button>
        </div>
        <div className="p-2" />
      </div>
    </div>
  )
}
