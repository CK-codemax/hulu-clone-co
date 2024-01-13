'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useHuluContext } from '@/contexts/HuluContext';

export default function HeaderItem({ title, path, Icon}){
  const {handleChangePath, path : activePath, handleResetQuery} = useHuluContext()
  const pathname = usePathname()
  const isActive = pathname.includes(`/${title}/`) 
  
return(
<Link href={path} class={`group flex flex-col items-center cursor-pointer w-8 sm:w-16 hover:text-white group-hover:animate-bounce ${isActive ? 'text-red-500' : ''}`} onClick={() => {handleChangePath(title)
    handleResetQuery()                                                                                                                                                                                 }}>
<Icon className="h-5 sm:h-8 mb-1" />
<p className={`text-[8px] tracking-widest uppercase hover:uppercase opacity-0 group-hover:opacity-100 ${ isActive ? 'opacity-100' : ''}`}>{title}</p>
</Link>
)
}