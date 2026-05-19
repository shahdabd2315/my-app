import { useEffect, useState } from "react";

import Counter from "./components/counter";
import Unicafe from "./components/unicafe";
import Anecdotes from "./components/Anecdotes";
import TodoList from "./components/Todolist";
import Course from "./components/course";
import Phonebook from "./components/phonebook";
import Countries from "./components/countries";

function App() {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then(res => res.json())
      .then(data => setPersons(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>

      <h1>مشروعي الأكاديمي</h1>

      <section>
        <h2>تطبيق العداد</h2>
        <Counter />
      </section>

      <section>
        <h2>Unicafe</h2>
        <Unicafe />
      </section>

      <section>
        <h2>Anecdotes</h2>
        <Anecdotes />
      </section>

      <section>
        <h2>قائمة المهام</h2>
        <TodoList />
      </section>

      <hr />

      <section>
        <h2>تمرين Course</h2>
        <Course />
      </section>

      <hr />

      <section>
        <h2>دليل الهاتف</h2>
        <Phonebook />
      </section>

      <hr />

      <section>
        <h2>تمرين الدول</h2>
        <Countries />
      </section>

      <hr />

      {/* 🔥 JSON SERVER SECTION */}
      <section>
        <h2>Persons (JSON Server)</h2>
        <ul>
          {persons.map(p => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}

export default App;