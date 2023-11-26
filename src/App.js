import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
       <Route Component={HomePage} path='/' exact/>
       <Route Component={LoginPage} path='/login'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
