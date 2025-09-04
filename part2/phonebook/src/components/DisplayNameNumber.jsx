import DeleteButton from "./DeleteButton";

const DisplayNameNumber = ({person, deletePerson}) => {
    return (
        <div>
            <p>
                {person.name} {person.number} {''}
                <DeleteButton 
                    onClick={()=>deletePerson(person.id, person.name)}
                    text="delete"               
                />
            </p>
        </div>

    )
}

export default DisplayNameNumber;