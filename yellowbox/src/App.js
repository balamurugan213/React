import Home from './component/home';
import Navbar from './component/navbar';
import './index.css'

function App() {
  // const title="App Component";
  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
