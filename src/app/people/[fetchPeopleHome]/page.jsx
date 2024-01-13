import fetchHomeData from '@/utilities/fetcherFunctions';
import MovieList from '@/components/MovieList';


export default async function FetchSearchHome({ params : {fetchPeopleHome}}) {
  const res = await fetchHomeData(fetchPeopleHome)
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



