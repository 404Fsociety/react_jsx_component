import './App.css';
import Articles from './components/Articles';
import Message from './components/Message';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <div>
      <Navbar/>
      <Articles color="black"/>
      <Message/>
    </div>
    </div>
  );
}

export default App;
