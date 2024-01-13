import requests from '@/utilities/homeRequests'

 export default async function fetchHomeData( genre ){

const res = await fetch(`https://api.themoviedb.org/3
${requests[`${genre}`].url}`)

   if (!res.ok) {
     throw new Error("Error fetching data");
   }

              
return res.json()

}

async function fetchRelatedMovieList(genre, movieId){
  const res = await fetch( `https://api.themoviedb.org/3/discover/movie?api_key=7f7ee1dafc77183119a173cafe9e02a1&with_genres=${genre.id}`)
  const data = await res.json()
  const list = data.results
  const updatedList = list.filter(el => movieId !== el.id)

  return {name : genre.name, list : updatedList}
  }



 async function fetchIndividualMovie(id){
const res = await fetch(   `https://api.themoviedb.org/3/movie/${id}?api_key=7f7ee1dafc77183119a173cafe9e02a1` );

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchPeopleList(query){
const res = await fetch(   
`https://api.themoviedb.org/3/search/person?api_key=7f7ee1dafc77183119a173cafe9e02a1&query=${query}
`
);

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchMovieList(query){
const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f7ee1dafc77183119a173cafe9e02a1&query=${query}&language=en-US&include_adult=false`)
   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}


async function fetchIndividualPerson(id){
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=7f7ee1dafc77183119a173cafe9e02a1&append_to_response=images`)
     if (!res.ok) {
        throw new Error("Error fetching data");
      }

  return res.json()
}

async function fetchTVList(query){
  const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=7f7ee1dafc77183119a173cafe9e02a1&query=${query}&language=en-US&include_adult=false&page=1`)
     if (!res.ok) {
        throw new Error("Error fetching data");
      }

  return res.json()
}

async function fetchIndividualTV(id){
const res = await fetch(   `https://api.themoviedb.org/3/tv/${id}?api_key=7f7ee1dafc77183119a173cafe9e02a1` );

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchTrendingTV(){
const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=7f7ee1dafc77183119a173cafe9e02a1&language=en-US')
   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchTrendingPeople(){
const res = await fetch('https://api.themoviedb.org/3/trending/person/day?api_key=7f7ee1dafc77183119a173cafe9e02a1&language=en-US')
   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}


async function fetchMovieCredits(id){
const res = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=7f7ee1dafc77183119a173cafe9e02a1&language=en-US`)

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchTVCredits(id){
const res = await fetch(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=7f7ee1dafc77183119a173cafe9e02a1&language=en-US`)

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}









export {fetchIndividualMovie, fetchMovieList, fetchRelatedMovieList, fetchIndividualPerson, fetchPeopleList, fetchTVList, fetchIndividualTV, fetchTrendingTV, fetchTrendingPeople, fetchMovieCredits, fetchTVCredits,
}