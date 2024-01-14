const API_KEY = process.env.API_KEY

const requests = {
fetchTrending : {
title : 'Trending',
url : `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
},
fetchTopRated : {
title : 'Top-Rated',
url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
},
fetchComedy : {
title : 'Comedy',
url : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
},
fetchHorrorMovies : {
title : 'Horror',
url : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
},
fetchMystery : {
title : 'Mystery',
url : `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
},
fetchAction : {
title : 'Action',
url : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
},

fetchSciFi : {
title : 'Sci-Fi',
url : `/discover/movie?api_key=${API_KEY}&with_genres=878`,
},
fetchWestern : {
title : 'Western',
url : `/discover/movie?api_key=${API_KEY}&with_genres=37`,
},
fetchAnimation : {
title : 'Animation',
url : `/discover/movie?api_key=${API_KEY}&with_genres=16`,
},
fetchTV : {
title : 'TV Movie',
url : `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
},
fetchRomance : {
title : 'Romance',
url : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
},
  fetchFantasy : {
title : 'Fantasy',
url : `/discover/movie?api_key=${API_KEY}&with_genres=14`,
},
  fetchHistory : {
  title : 'History',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  fetchAdventure : {
  title : 'Adventure',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  fetchDocumentary : {
  title : 'Documentary',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  fetchFamily : {
  title : 'Family',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fetchThriller : {
  title : 'Thriller',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  fetchWar : {
  title : 'War',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  fetchMusic : {
  title : 'Music',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  fetchCrime : {
  title : 'Crime',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  fetchDrama : {
  title : 'Drama',
  url : `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },

  
}
export default requests