'use client'
import { useHuluContext } from '@/contexts/HuluContext'
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function SmallTVThumbNail({movie}){
  const { path } = useHuluContext()
const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    return (
      <div className="w-40 mx-4 sm:w-60 cursor-pointer sm:p-3 hover:shadow-slate-400 sm:hover:scale-105 shadow-md rounded-lg border  border-slate-400 transition-shadow duration-200 group">
        <Link href={`/tv/individual/${movie.id}`}>
          <Image
            src={`${BASE_URL}${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-t-lg overflow-hidden group-hover:opacity-80 transition-opacity duration-200"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image is not available"
          ></Image>
          <div className="p-2">
            <p className="truncate text-md">{movie.overview}</p>
            <h2 className="truncate text-lg font-bold">
              {movie.title || movie.name}
            </h2>

          </div>
        </Link>
      </div>
    );

}

