import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import LiveSquares from './components/LiveSquares/LiveSquares';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}


