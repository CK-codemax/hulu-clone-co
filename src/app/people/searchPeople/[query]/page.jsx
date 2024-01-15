import { fetchPeopleList } from '@/utilities/fetcherFunctions';
import PeopleList from '@/components/PeopleList';


export default async function FetchSearchHome({ params : {query = null}}) {
  const res = await fetchPeopleList(query)
  const people = res.results
const peopleWithPics = people.filter(person => person.profile_path !== null)

  const peopleArr = [...peopleWithPics]

  return (
    <div>
      {people && people.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {people && <PeopleList people={peopleArr}/>}
    </div>
  );
}



