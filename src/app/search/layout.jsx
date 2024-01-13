import SearchBox from '@/components/SearchBox';

export default function SearchPage({ children }){

  return (<>
    <SearchBox keywords="movies..." type='search'/>
    {children}
  </>
  )
}