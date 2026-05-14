import Counter from "./components/Counter";
import Unicafe from "./components/Unicafe";
import Anecdotes from "./components/Anecdotes";
import TodoList from "./components/TodoList";

function App() {
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
        <h2>الحكم (Anecdotes)</h2>
        <Anecdotes />
      </section>

      <section>
        <h2>قائمة المهام (To-do List)</h2>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
