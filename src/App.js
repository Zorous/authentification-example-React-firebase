import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import AuthDetails from './components/AuthDetails';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
<Routes>
<Route path="/signin" element={<Signin />} />
<Route path="/signup" element={<Signup />} />
<Route path="/home" element={<Home />} />
</Routes>
    </div>
  );
}

export default App;
