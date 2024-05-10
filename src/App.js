import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Counter from './components/counter';
import Users from './User';
import FAQ from './FAQ';
import Quiz from './Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<Users />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
