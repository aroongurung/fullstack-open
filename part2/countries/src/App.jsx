import { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import getAll from './services/countryService'
import Country from './components/Country'


function App() {
  const [countriesData, setCountriesData] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [filteredCountry, setFiltererdCountry] = useState([])

// Fetch Data 
  const fetchCountry = () => {
      try {
        getAll()
        .then(initialCountry => {
          setCountriesData(initialCountry)
        })
      } catch (error) {
        console.error('Error fetching country', error)
      }                                      
  }
// Using useEffect 
  useEffect(fetchCountry, [])

//Handle change of input from SearchForm
  const handleCountryChange = (e) => {
    const inputValue = e.target.value
    setSearchCountry(inputValue) 
    
    if (inputValue.trim() === '') {
      setFiltererdCountry([])
    } else {
      const countries = countriesData.filter((country) => 
        country.name.common.toLowerCase().includes(inputValue.trim().toLowerCase())
      )
      setFiltererdCountry(countries)
    }
  }

//Filtered country
  const ShowSelectCountry = (country) => {
    setFiltererdCountry([country])
  }

  return (
    <>
    <SearchForm 
      searchCountry={searchCountry}
      handleCountryChange={handleCountryChange}    
    />
    
      <Country 
        countries={filteredCountry}
        searchCountry={searchCountry}
        ShowSelectCountry={ShowSelectCountry}
      />
    
    </>
  )
}

export default App
