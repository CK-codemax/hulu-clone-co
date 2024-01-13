
'use client'
  import { createContext, useReducer, useContext } from 'react';

const initialState = {
genre : 'fetchTrending',
  path : 'home',
query : '',
page : 2,

}

function changeGenre(genre){
return {type : 'genre/change', payload : genre}
}

function changeQuery(query){
  return {type : 'query/change', payload : query}
}

function changePath(path){
  return {type : 'path/change', payload : path}
}

function resetQuery(){
  return {type : 'query/reset'}
}


function reducer(state, action){
  switch(action.type){
    case 'genre/change' :
    return {...state, genre : action.payload}
      case 'query/change' :
    return {...state, query : action.payload}
      case 'path/change' :
    return {...state, path : action.payload}
      case 'query/reset' :
    return {...state, query : ''}
      
      default :
    throw new Error('Invalid action type')
}
}


const HuluContext = createContext();

function HuluProvider({ children }){

const [ { genre, page, query, path}, dispatch ] = useReducer(reducer, initialState)

const handleChangeGenre = function( newGenre ){
  if(newGenre === genre)
    return
dispatch(changeGenre(newGenre))
}
  const handleChangeQuery = function( newQuery ){
dispatch(changeQuery(newQuery))
  }

  const handleChangePath = function( newPath ){
    if(newPath === path)return
    dispatch(changePath(newPath))
  }


  const handleResetQuery = function(){
    dispatch(resetQuery())
  }
  
return(
<HuluContext.Provider 
value={{
genre,
handleChangeGenre,
handleChangeQuery,
query,
page,
  path,
handleChangePath,
  handleResetQuery,
}}
>
{children}
</HuluContext.Provider>
)
}

function useHuluContext(){
  
const context = useContext(HuluContext);
  
if(context === undefined) throw new Error
  ('MovieContext was used outside of PostProvider')
return context
}

export { HuluProvider, useHuluContext, }