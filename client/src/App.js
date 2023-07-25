import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Home from './components/Home';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to={`/docs/${uuid()}`} /> } />
        <Route path='/docs/:id' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;