import PeopleView from '@/components/PeopleView'


export default function PeopleList({people}){

  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {people?.map((person) => (
        <PeopleView key={person.id} person={person} />
      ))}
    </div>
  );
}