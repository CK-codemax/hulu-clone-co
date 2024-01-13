import Image from "next/image";
 import RelatedList from "@/components/RelatedList";
 import { fetchRelatedMovieList } from "@/utilities/fetcherFunctions"
 export default async function IndividualTV({ tv }){








 const data = tv.genres.map( genre => fetchRelatedMovieList(genre, tv.id))
 const relatedData = await Promise.all(data)



 return(
 <div className="w-full">
 <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
 <Image
 src={`https://image.tmdb.org/t/p/original/${
 tv.backdrop_path || tv.poster_path
 }`}
 width={500}
 height={300}
 className="rounded-lg"
 style={{
 maxWidth: "100%",
 height: "100%",
 }}
 placeholder="blur"
 blurDataURL="/spinner.svg"
 alt="Movie poster"
 ></Image>
 <div className="p-2">
 <h2 className="text-lg mb-3 font-bold">
 {tv.title || tv.name || tv.original_name}
 </h2>
 <p className="text-lg mb-3">
 <span className="font-semibold mr-1">Overview:</span>
 {tv.overview}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Created by:</span>
 {tv.created_by.map(el => el.name).join(', ')}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Date Released:</span>
 {tv.release_date || tv.first_air_date}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Genre:</span>
 {tv.genres.map(el => el.name).join(', ')}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Seasons:</span>
 {tv.number_of_seasons}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Episodes:</span>
 {tv.number_of_episodes}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Runtime:</span>
 {tv.episode_run_time[0]} minutes
 </p>



 <p className="mb-3">
 <span className="font-semibold mr-1">Movie location:</span>
 {tv.production_countries.map(el => el.name).join(', ')}
 </p>

 <p className="mb-3">
 <span className="font-semibold mr-1">Languages:</span>
 {tv.spoken_languages.map(el => el.english_name).join(', ')}
 </p>
 <p className="mb-3">
 <span className="font-semibold mr-1">Rating:</span>
 {tv.vote_count}
 </p>
 </div>
 </div>
 <RelatedList arrayList={relatedData} />
 </div>
 );

 }