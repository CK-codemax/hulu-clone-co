import SearchBox from '@/components/SearchBox';

export default function TVPage({ children }){

  return (<>
    <SearchBox keywords="tvshows, series..." type='tv'/>
    {children}
  </>
  )
}