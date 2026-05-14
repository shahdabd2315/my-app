import { useState } from "react";

function Phonebook() {
    const [contacts] = useState([
        { name: "Shahd", number: "123456" },
        { name: "Ahmad", number: "987654" }
    ]);

    return (
        <div>
            <h2>دفتر الهاتف</h2>
            <ul>
                {contacts.map((c, index) => (
                    <li key={index}>
                        {c.name}: {c.number}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Phonebook;
