import DisplayNameNumber from "./DisplayNameNumber";

const Persons = ({filterPerson, deletePerson}) => {
    return (
         <div>
           {filterPerson.map ((person) => (
            <DisplayNameNumber 
              key={person.id} 
              person={person}
              deletePerson={deletePerson}
            />
          ))
        }
      </div>
    )
}

export default Persons;