import fetchHomeData from '@/utilities/fetcherFunctions';
import MovieList from '@/components/MovieList';


export default async function FetchTVHome({ params : {tvHome = null}}) {
  const res = await fetchHomeData(tvHome)
  const movies = res.results
  return (
    <div>
      {movies && movies.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {movies && <MovieList movies={movies} />}
    </div>
  );
}



