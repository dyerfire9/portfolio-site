import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Software from './components/Software/Software'
import Timeline from './components/Timeline/Timeline'
import Projects from './components/Projects/Projects'
import ProjectsModal from './components/Projects/ProjectsModal/ProjectsModal'

import LiveSquares from './components/LiveSquares/LiveSquares';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <LiveSquares/>
      <Navbar/>
      <Home/>
      <Timeline/>
      <Software/>
      <Projects/>
    </div>
  );
}


