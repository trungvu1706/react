import logo from './logo.svg';
import './App.css';

function App() {
  const todos = ["Go to maket", "buy food", "make dinner"];
  // const todoList = todos.map((item) => <li>{item}</li>);
  const renderList = () =>{
    return todos.map((item)=> <li>{item}</li>);
  }
  return (
    <div className="App">
     <ul>{renderList()}</ul>
    </div>
  );
}

export default App;
