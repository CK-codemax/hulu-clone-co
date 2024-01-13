
'use client'
import { useHuluContext } from '@/contexts/HuluContext'
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function PeopleView({person}){
  const { path } = useHuluContext()
const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
      <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Link href={`/people/individuals/${person.id}`}>
          <Image
            src={`${BASE_URL}${
              person.profile_path
            }`}
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
          <div className="p-2">
            
            <h2 className="truncate text-lg font-bold">
              {person.name || person.original_name}
            </h2>
            
          </div>
        </Link>
      </div>
    );

}

