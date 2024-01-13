import SearchBox from '@/components/SearchBox';

export default function SearchPage({ children }){

  return (<>
    <SearchBox keywords='actors, directors...' type='people'/>
    {children}
  </>
  )
}