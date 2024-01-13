
'use client'
import { useHuluContext } from '@/contexts/HuluContext'
import Image from 'next/image';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function TvThumbNail({movie}){
  const { path } = useHuluContext()
const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
      <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:hover:scale-105 sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
        <Link href={`/tv/individual/${movie.id}`}>
          <Image
            src={`${BASE_URL}${
              movie.backdrop_path || movie.poster_path
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
            <p className="line-clamp-2 text-md">{movie.overview}</p>
            <h2 className="truncate text-lg font-bold">
              {movie.title || movie.name}
            </h2>
            <div className="flex items-center">
              <p>{movie.release_date || movie.first_air_date}</p>
              <HandThumbUpIcon className="h-5 ml-2" />
              <p>{movie.vote_count}</p>
            </div>
          </div>
        </Link>
      </div>
    );

}

