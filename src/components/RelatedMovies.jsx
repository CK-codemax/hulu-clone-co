'use client'
  import SmallThumbNail from '@/components/SmallThumbNail'
import Link from 'next/link'
import requests from '@/utilities/homeRequests'
  import { useHuluContext } from '@/contexts/HuluContext'




export default function RelatedMovies({results}){
  const { handleChangeGenre } = useHuluContext()
const related = results?.list.slice(0,8)
  const genre = Object.keys(requests).find((key) => (key.includes(results?.name)))
                                           
  return (
    <div >
      {!results?.name.includes('&') && 
      <Link className="ml-20" href={`$/home/${genre}`} onClick={()=>handleChangeGenre(genre)}> More {' '}<span className="font-semibold " >{results?.name}</span>{' '} movies</Link>
  }
      <div className=" flex gap-x-2.5 max-w-6xl mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ">{related?.map((movie) => (
        <SmallThumbNail key={movie.id} movie={movie} />
      ))}
      </div>
      
    </div>
      
  );
}