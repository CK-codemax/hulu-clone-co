

import Nav from '@/components/Nav';

export default function HomePage({ children }){

  return (<>
    <Nav />
    {children}
  </>
  )
}