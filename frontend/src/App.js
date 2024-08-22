import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Editor from './pages/Editor/problem';
import Register from './pages/Register';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);

const App=()=>{
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path='/problem' element={<Editor />} />
           <Route path='/register' element={<Register />} />
           <Route path='/login' element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
