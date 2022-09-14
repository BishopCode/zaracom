import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/home/home';
import Header from './views/header/header';
import DetailView from './views/detail-view/detail-view';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<DetailView />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
