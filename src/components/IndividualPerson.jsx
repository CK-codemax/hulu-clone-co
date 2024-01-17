import Image from "next/image";
import SmallThumbNail from '@/components/SmallThumbNail';
import SmallTVThumbNail from '@/components/SmallTVThumbNail';
import { fetchPeopleList, fetchMovieCredits, fetchTVCredits} from "@/utilities/fetcherFunctions"
import Link from "next/link";


export default async function IndividualPerson({ person }){
const query = person.name

  const res = await fetchPeopleList(query)
    const people = res.results.find((searchedPerson) => searchedPerson.id === person.id)
  const movies = people.known_for

  const resMovies = await fetchMovieCredits(person.id)
  const movieCredits = resMovies?.cast?.filter(movie => (movie.backdrop_path !== null && movie.overview !== "") || (movie.poster_path !== null && movie.overview !== ""))
  const movieCreditsDisplay = movieCredits.length > 8 ? movieCredits.slice(0, 8) : movieCredits

  const resTV = await fetchTVCredits(person.id)
  const TVCredits = resTV?.cast?.filter(movie => (movie.backdrop_path !== null && movie.overview !== "") || (movie.poster_path !== null && movie.overview !== ""))
  const TVCreditsDisplay = TVCredits.length > 8 ? TVCredits.slice(0, 8) : TVCredits
const images = person.images?.profiles?.length > 8 ? person.images.profiles.slice(0, 8) : person.images.profiles


  return(
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
          person.profile_path
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
            alt="Person poster"
          ></Image>
          <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">
              {person.name}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Biography:</span>
              {person.biography}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Birth date:</span>
              {person.birthday}
            </p>

            <p className="mb-3">
            <span className="font-semibold mr-1">Place of birth:</span>
            {person.place_of_birth}
            </p>

              <p className="mb-3">
                <span className="font-semibold mr-1">Known for:</span>
                {person.known_for_department}
                </p>


          </div>
        </div>
        <div className=" flex gap-x-2.5 mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ">
      

        {images?.map((image, i) => <Image
            src={`https://image.tmdb.org/t/p/original/${
         image.file_path
            }`}
            width={500}
            height={300}
                                           className="rounded-lg w-[160px] sm:w-[250px] " key={i}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
          blurDataURL="/spinner.svg"
            alt="Person poster"
          />)}
        </div>
          
            
          
        
<div>
        <p className="mb-3 ml-10 lg:ml-20">
          <span className="font-semibold mr-1">Popular movies</span>
          </p>

        
  <div className=" flex gap-x-2.5 max-w-6xl mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ">{movies.map((movie) => (
    <SmallThumbNail key={movie.id} movie={movie} />
  ))}
  </div>
  </div>

        <div>
          <Link href={`/people/movieList/${person.id}`}>
          <p className="mb-3 ml-10 lg:ml-20">More{" "}
            <span className="font-semibold mr-1"> {person.name} </span>{" "}movies
            </p>
            </Link>
          


        <div className=" flex gap-x-2.5 max-w-6xl mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ">{movieCreditsDisplay.map((movie) => (
        <SmallThumbNail key={movie.id} movie={movie} />
        ))}
        </div>
        </div>
        
        <div>
          <Link href={`/people/tvList/${person.id}`}>
          <p className="mb-3 ml-10 lg:ml-20">
            More{""}
            <span className="font-semibold mr-1"> {person.name} </span>{" "}TVSeries
            </p>
            </Link>


        <div className=" flex gap-x-2.5 max-w-6xl mx-auto px-5 py-4 overflow-x-scroll scrollbar-hide ">{TVCreditsDisplay.map((movie) => (
        <SmallTVThumbNail key={movie.id} movie={movie} />
        ))}
        </div>
        </div>



        
        
        
      </div>
    );

}