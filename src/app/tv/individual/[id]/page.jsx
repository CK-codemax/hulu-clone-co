
import { fetchIndividualTV } from '@/utilities/fetcherFunctions'
import IndividualTV from '@/components/IndividualTV'

export default async function TV({ params : { id = null }}){

const tv = await fetchIndividualTV(id)
  return (
    <IndividualTV tv={tv}/>
  )
}