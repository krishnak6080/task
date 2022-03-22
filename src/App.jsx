import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit' element={<Edit/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
