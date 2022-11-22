import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("리액트 배우기"),
    new Todo("클래스 배우기"),
    new Todo("할 거 한 듯"),
  ];
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
