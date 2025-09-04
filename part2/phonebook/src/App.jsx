import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [searchPerson, setSearchPerson] = useState('')
  const [filterPerson, setFilterPerson] = useState([])
  const [alertMessage, setAlertMessage] = useState('')
  
//Fetch Data
  const hook = () => {
    personService
      .getAll()
      .then(initialPerson => {
        setPersons(initialPerson)
        setFilterPerson(initialPerson)
      })
      .catch((error) => {
        console.error('Error fetching data', error)
      })
 }
 useEffect(hook, []) 

 //AddName Handle
  const addName = (event) => {
    event.preventDefault()
    
//Check if name exists
   const nameExists = persons.find((person) => person.name === newName.trim())
   //create new name object
    const nameObject = {
      name: newName,
      number: newNum,
    }
   if (nameExists) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        //Update Person 
        personService
          .update(nameExists.id, nameObject)
          .then(updatedPerson => {
            setPersons((prevPersons) => prevPersons.map((person) => person.id !== updatedPerson.id ? person:updatedPerson))

          setFilterPerson((prevFilteredPersons) => prevFilteredPersons.map((person) => person.id !== updatedPerson.id ? person: updatedPerson))
          setAlertMessage({
            type:'success',
            text: `${updatedPerson.name} successfully updated`
          })
          })
          .catch((error) => {
            setAlertMessage({
              type:'error',
              text:`Information of ${newName} has already been removed from server`})
            console.error('Error updating number', error)
          })
      }
   } else {
  //Create Person
    personService
    .create(nameObject)  
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setFilterPerson(filterPerson.concat(returnedPerson))
      setAlertMessage({
        type:'success',
        text:`Added ${returnedPerson.name} successfully`})
      setTimeout(() => {
        setAlertMessage('')
      }, 5000)
     .catch((error) => {
      
            console.error('Error updating number', error)
          })
        })
      }
      setNewName('')
      setNewNum('')
}

//Delete Person
const deletePerson = (id,name) =>{
  if (window.confirm(`Delete ${name} ?`)) {
  personService
  .remove(id)
  .then(() => {
    setPersons(persons.filter((person) => person.id !== id))
    setFilterPerson(filterPerson.filter((person) => person.id !== id))
  })
 .catch((error) => {
  console.error('Error deleting Person', error)
 })
}
}

//Handle Change
  const handleNamechange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNum(event.target.value)

  const handleFilterChange = (event) => {
    setSearchPerson(event.target.value)

    const filteredPersonItem = persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase())) 
    setFilterPerson(filteredPersonItem)
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      {alertMessage && <Notification alertMessage={alertMessage}/>} 
      <Filter 
        searchPerson={searchPerson}
        handleFilterChange={handleFilterChange}
      />
      <h3>Add a new</h3>
      <PersonForm 
        addName={addName}
        newName={newName}
        handleNamechange={handleNamechange}
        newNum={newNum}
        handleNumberChange={handleNumberChange}      
      />
      <h3>Numbers</h3>
      <Persons 
        filterPerson={filterPerson}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App