
import { fetchIndividualTV } from '@/utilities/fetcherFunctions'
import IndividualTV from '@/components/IndividualTV'

export default async function TV({ params : { id }}){

const tv = await fetchIndividualTV(id)
  return (
    <IndividualTV tv={tv}/>
  )
}