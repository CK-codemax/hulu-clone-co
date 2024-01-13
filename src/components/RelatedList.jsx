import RelatedMovies from '@/components/RelatedMovies';

export default function RelatedList({arrayList}) {

  return (
    <div className="">
      {arrayList.map((results, index) => <RelatedMovies key={index} results={results} /> )}
    </div>
  )
}