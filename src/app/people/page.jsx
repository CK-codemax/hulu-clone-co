import { fetchTrendingPeople } from '@/utilities/fetcherFunctions';
import PeopleList from '@/components/PeopleList';


export default async function SearchHome() {
  const res = await fetchTrendingPeople()
  const people = res.results
const peopleWithPics = people.filter(person => person.profile_path !== null)

  const peopleArr = [...peopleWithPics]

  return (
    <div>
      {people && people.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {people && <PeopleList people={peopleArr} />}
    </div>
  );
}



