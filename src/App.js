import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
