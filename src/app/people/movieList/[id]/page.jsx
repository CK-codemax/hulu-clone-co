import { fetchMovieCredits } from '@/utilities/fetcherFunctions';
import MovieList from '@/components/MovieList';


export default async function FetchSearchHome({ params : {id}}) {
  const resMovies = await fetchMovieCredits(id)
  const movies = resMovies?.cast?.filter(movie => (movie.backdrop_path !== null && movie.overview !== "") || (movie.poster_path !== null && movie.overview !== ""))
  
  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {movies && <MovieList movies={movies} />}
    </div>
  );
}



