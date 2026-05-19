import { useState, useEffect } from "react";
import axios from "axios";

function Phonebook() {

    const [contacts, setContacts] = useState([])
    const [newName, setNewName] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [filter, setFilter] = useState("")

    useEffect(() => {

        axios
            .get("http://localhost:3001/persons")
            .then(response => {
                setContacts(response.data)
            })

    }, [])

    const addPerson = (e) => {

        e.preventDefault()

        const exists = contacts.find(
            c => c.name === newName
        )

        if (exists) {
            alert("موجود مسبقاً")
            return
        }

        const personObject = {
            id: String(contacts.length + 1),
            name: newName,
            number: newNumber
        }

        setContacts(
            contacts.concat(personObject)
        )

        setNewName("")
        setNewNumber("")

    }

    const contactsToShow = filter
        ? contacts.filter(c =>
            c.name.toLowerCase()
                .includes(filter.toLowerCase())
        )
        : contacts

    return (

        <div>

            <h2>دفتر الهاتف</h2>

            <div>

                بحث:

                <input
                    value={filter}
                    onChange={(e) =>
                        setFilter(e.target.value)}
                />

            </div>

            <form onSubmit={addPerson}>

                <div>

                    الاسم:

                    <input
                        value={newName}
                        onChange={(e) =>
                            setNewName(e.target.value)}
                    />

                </div>

                <div>

                    الرقم:

                    <input
                        value={newNumber}
                        onChange={(e) =>
                            setNewNumber(e.target.value)}
                    />

                </div>

                <button type="submit">
                    إضافة
                </button>

            </form>

            <ul>

                {contactsToShow.map(c => (

                    <li key={c.id}>
                        {c.name}: {c.number}
                    </li>

                ))}

            </ul>

        </div>

    )

}

export default Phonebook;