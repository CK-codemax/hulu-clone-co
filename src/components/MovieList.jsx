import ThumbNail from '@/components/ThumbNail'
import {arrangeData} from '@/utilities/helperFunctions'


export default function MovieList({movies}){
const correctMovies = arrangeData(movies)
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {correctMovies?.map((movie) => (
        <ThumbNail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}