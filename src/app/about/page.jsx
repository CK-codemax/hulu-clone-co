import Link from "next/link";

export default function About() {
    return (
      <div className="max-w-6xl mx-auto space-y-4 p-4">
        <h1 className="text-2xl font-medium text-[#1ce783]">About</h1>
        <p>
          Hello there!
          </p>
          <p> Thanks for visiting my movie database clone website! I built this website
            to practice my skills with React, NextJS and TailwindCSS. This website can be used by movie enthusiasts 
            to query their favourite movies, tvseries, actors, directors, etc. There is also the option to view
            movies and tvseries plots aswell as {"actors'"} and {"directors'"} biographies.
        </p>
  
        <p>
          This website was built entirely with React, NextJS, and TailwindCSS. Additional dependencies
        include heroicons and next themes. The pages are all dynamic generated and the data is pulled from 
        the TMDB api. {"There's"} a darkmode switch for easy visibility. Have a nice time going through my movie database!
        You can check out the source code on <Link className=" text-[#1ce783]" href='https://github.com/CK-codemax/hulu-clone-co'>GitHub</Link>
        </p>
  
        <p>
         Thank you for visiting my website and I hope you
          enjoy your time browsing through our movie database. If you have any
          feedback or suggestions, please feel free to contact me. I am always
          looking for ways to improve and enhance the user experience of my
          websites. Happy browsing!
        </p>
      </div>
    );
  }