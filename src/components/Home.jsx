
import {useState} from 'react'
import Searchbar from './Searchbar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountriesList'

function Home() {

    const[query,setQuery]=useState('')

  return (
    <>
         <main>
             <div className="search-filter-container">
                <Searchbar setQuery={setQuery}/>
               <SelectMenu/>
             </div>
                  {query === 'unmount' ? '' :
            <CountriesList query={query}/>}
         </main>
    </>
  )
}

export default Home;