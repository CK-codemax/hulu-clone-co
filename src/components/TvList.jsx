import TvThumbNail from '@/components/TvThumbNail'
  import {arrangeData} from '@/utilities/helperFunctions'


export default function TvList({movies}){
const correctMovies = arrangeData(movies)
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {correctMovies?.map((movie) => (
        <TvThumbNail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}