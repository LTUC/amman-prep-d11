import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import FavList from './components/FavList';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
