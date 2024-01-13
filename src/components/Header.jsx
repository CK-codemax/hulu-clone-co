
'use client'
  import Image from "next/image"
import Link from "next/link"
  
import { InformationCircleIcon, HomeIcon, UserIcon, VideoCameraIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

  import HeaderItem from "./HeaderItem";
import { useHuluContext } from "@/contexts/HuluContext";




  export default function Header(){
const { genre, path : activePath } = useHuluContext()
    alert('hacked')
    


  return (
  <header className="flex sm:flex-row m-5 justify-between items-center h-auto">
    <Link href='/'>
  <Image className="object-contain w-[100px] sm:w-[200px]" alt='hulu-logo'
    src="https://links.papareact.com/ua6" width={200} height={100} />
    </Link>
  <div className="flex flex-grow justify-evenly max-w-xl">
  <HeaderItem title='home' Icon={HomeIcon} path={`/home/${genre}`} />
    <HeaderItem title='search' Icon={MagnifyingGlassIcon} path={`/search/${genre}`}
   
      />

  <HeaderItem title='people' Icon={UserIcon} path={`/people`}
    
    />
  <HeaderItem title='tv' Icon={VideoCameraIcon} path={`/tv`}  />
    <HeaderItem title='about' Icon={InformationCircleIcon} path='/'  />
    

  </div>
  </header>
  )

  }