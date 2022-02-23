import logo from './logo.svg';
import './App.css';
import Food from './Food';
import Heading from './Heading';
import Lists from './Lists';
import Card from './Card';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
      </header>
      <Heading />
      <h1 style={{color: "red",
    fontSize: "20px",
    border: "1px solid black"}}>My favourite food</h1>
      <Food />
      <Lists />

    </div>
  );
}

export default App;
