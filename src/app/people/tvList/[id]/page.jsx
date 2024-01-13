import { fetchTVCredits } from '@/utilities/fetcherFunctions';
import TvList from '@/components/TvList';


export default async function FetchSearchHome({ params : {id}}) {
  const resMovies = await fetchTVCredits(id)
  const movies = resMovies?.cast?.filter(movie => (movie.backdrop_path !== null && movie.overview !== "") || (movie.poster_path !== null && movie.overview !== ""))

  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {movies && <TvList movies={movies} />}
    </div>
  );
}



