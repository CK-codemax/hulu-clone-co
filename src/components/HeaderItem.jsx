'use client'
import Link from 'next/link';
import { useHuluContext } from '@/contexts/HuluContext';

export default function HeaderItem({ title, path, Icon}){
  const {handleChangePath, path : activePath, handleResetQuery} = useHuluContext() 
  const isActive = activePath === title
  
return(
<Link href={path} className={`group flex flex-col items-center cursor-pointer w-8 sm:w-16 dark:hover:text-white hover:text-gray-900 ${isActive ? 'text-red-500' : ''}`} onClick={() => {handleChangePath(title)
    handleResetQuery()                                                                                                                                                                                 }}>
<Icon className="h-5 sm:h-7 mb-1 group-hover:animate-bounce" />
<p className={`text-xs md:text-sm tracking-widest uppercase opacity-0 sm:group-hover:opacity-100 ${isActive && 'opacity-100'}`}>{title}</p>
</Link>
)
}