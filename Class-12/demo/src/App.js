import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <h1>App Comp</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
