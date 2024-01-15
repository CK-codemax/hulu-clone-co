
import { fetchIndividualMovie } from '@/utilities/fetcherFunctions'
import IndividualMovie from '@/components/IndividualMovie'

export default async function Movie({ params : { id = null }}){

const movie = await fetchIndividualMovie(id)
  return (
    <IndividualMovie movie={movie}/>
  )
}