import React,{useState,useEffect} from 'react'
import CountryCard from './CountryCard'

const CountriesList = ({query}) => {
    const[countriesData,setCountriesData]= useState([])
  
    
     
    useEffect(() => {fetch('https://freetestapi.com/api/v1/politicians')
                  .then((res)=> res.json())
                  .then((data) =>{setCountriesData(data)
                  })
                  .catch((error)=> console.error('Error:',error))

                 },[]) // query
     
    
  return countriesData === null ? (
    'loading....') : (
      <main>
             <div className="countries-container">
            {countriesData
            .filter((country) =>country.name.toLowerCase().includes(query.toLowerCase()))
            .map((country) => {
            
            return (
              <CountryCard
                key={country.name}
                
                name={country.name}
                dob={country.dob}
                country={country.country}
                party={country.party}
                position={country.position}
                image={country.image}
                years_in_office={country.years_in_office}
              />
            )
          })
        }
    
    </div>
      </main>
    )
  
  
}

export default CountriesList;