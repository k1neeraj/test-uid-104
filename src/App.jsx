import "./App.css";
import Home from "./Components/Home";
// import Home from './Components/Home';

function App() {
  const names = ["Neeraj", "Lakshman", "Nishant", "Tushar", "Puneet"];
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Home names={names} />
    </div>
  );
}

export default App;
