import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import AllBeers from './Pages/AllBeers';
import RandomBeer from './Pages/RandomBeer';
import Nav from './Components/Nav';
import DetailPage from './Pages/DetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/allbeers" element={<AllBeers />}/>
        <Route path="/randombeer" element={<RandomBeer />}/>
        <Route path="/:id" element={<DetailPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
