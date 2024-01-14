
 import Image from "next/image";
import RelatedList from "@/components/RelatedList";
  import { fetchRelatedMovieList } from "@/utilities/fetcherFunctions"
export default async function IndividualMovie({ movie }){
  
  const data = movie.genres.map( genre => fetchRelatedMovieList(genre, movie.id))
  const relatedData = await Promise.all(data)

  return(
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
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
              {movie.title || movie.name}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {movie.overview}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            
              <p className="mb-3">
                <span className="font-semibold mr-1">Genre:</span>
                {movie.genres.map(el => el.name).join(', ')}
                </p>

             {movie.budget ? (
                <p className="mb-3"><span className="font-semibold mr-1">Budget:</span>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                movie.budget)}
                </p>) : null}

             {movie.revenue ? (<p className="mb-3">
                <span className="font-semibold mr-1">Revenue:</span>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                movie.revenue)}
                </p>) : null}

                <p className="mb-3">
                <span className="font-semibold mr-1">Movie location:</span>
                {movie.production_countries.map(el => el.name).join(', ')}
                </p>

                <p className="mb-3">
                <span className="font-semibold mr-1">Languages:</span>
                {movie.spoken_languages.map(el => el.english_name).join(', ')}
                </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_count}
            </p>
          </div>
        </div>
        <RelatedList arrayList={relatedData} />
      </div>
    );

}