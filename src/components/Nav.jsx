'use client'
import requests from "../utilities/homeRequests.js"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useHuluContext } from '@/contexts/HuluContext'

export default function Nav(){
const { genre, handleChangeGenre} = useHuluContext()
  console.log(genre)
  const pathname = usePathname()
  const isActive = pathname.includes(`/${genre}`)
return(
<nav >
<ul className="flex text-l px-10 sm:px-20 sm:text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll
  scrollbar-hide"
 >
{Object.entries(requests).map(([key, { title }]) => (
<Link className={`last:pr-24 cursor-pointer uppercase transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ${ pathname.includes(`/home/${key}`) || genre === key ? 'text-red-500' : ''}`} href={`/home/${key}`} key={key} onClick={() => handleChangeGenre(key)}>{title}
  </Link>
))}
</ul>
</nav>
)
}