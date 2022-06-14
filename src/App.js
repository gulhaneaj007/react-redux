import User from './User';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* <h1> React Redux Tutorials</h1> */}
     <User data={{name:"ajinkya",age:27}}/>
    </div>
  );
}

export default App;
