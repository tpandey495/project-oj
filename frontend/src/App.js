import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/problem';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/problem' element={<Editor />} />
           <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
