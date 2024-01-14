import requests from '@/utilities/homeRequests'

const API_KEY = process.env.API_KEY

 export default async function fetchHomeData( genre ){

const res = await fetch(`https://api.themoviedb.org/3
${requests[`${genre}`].url}`)

   if (!res.ok) {
     throw new Error("Error fetching data");
   }

              
return res.json()

}

async function fetchRelatedMovieList(genre, movieId){
  const res = await fetch( `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre.id}`)
  const data = await res.json()
  const list = data.results
  const updatedList = list.filter(el => movieId !== el.id)

  return {name : genre.name, list : updatedList}
  }



 async function fetchIndividualMovie(id){
const res = await fetch(   `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}` );

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchPeopleList(query){
const res = await fetch(   
`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${query}
`
);

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchMovieList(query){
const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false`)
   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}


async function fetchIndividualPerson(id){
  const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&append_to_response=images`)
     if (!res.ok) {
        throw new Error("Error fetching data");
      }

  return res.json()
}

async function fetchTVList(query){
  const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}&language=en-US&include_adult=false&page=1`)
     if (!res.ok) {
        throw new Error("Error fetching data");
      }

  return res.json()
}

async function fetchIndividualTV(id){
const res = await fetch(   `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}` );

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchTrendingTV(){
const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`)
   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchTrendingPeople(){
const res = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${API_KEY}&language=en-US`)
   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}


async function fetchMovieCredits(id){
const res = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}

async function fetchTVCredits(id){
const res = await fetch(`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${API_KEY}&language=en-US`)

   if (!res.ok) {
      throw new Error("Error fetching data");
    }

return res.json()
}









export {fetchIndividualMovie, fetchMovieList, fetchRelatedMovieList, fetchIndividualPerson, fetchPeopleList, fetchTVList, fetchIndividualTV, fetchTrendingTV, fetchTrendingPeople, fetchMovieCredits, fetchTVCredits,
}