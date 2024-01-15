  import { fetchIndividualPerson } from '@/utilities/fetcherFunctions'
 import IndividualPerson from '@/components/IndividualPerson'

 export default async function Person({ params : { id = null }}){

 const person = await fetchIndividualPerson(id)
   return (
     <IndividualPerson person={person}/>
   )}


