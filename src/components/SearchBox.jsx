"use client";

import { useHuluContext } from "@/contexts/HuluContext";
import { useRouter } from "next/navigation";
export default function SearchBox({ keywords, type }) {
  const { path, query, handleChangeQuery, handleResetQuery } = useHuluContext()

  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    if(type === 'people'){

      router.push(`/people/searchPeople/${query}`);
    }
    if(type === 'search'){router.push(`/search/searchMovies/${query}`);
                         }  

    if(type === 'tv'){router.push(`/tv/searchTV/${query}`);
       }     

handleResetQuery();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={query}
        onChange={(e) => handleChangeQuery(e.target.value)}
        type="text"
        placeholder={`Search ${keywords}`}
        className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!query}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
