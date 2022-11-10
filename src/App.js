import logo from './logo.svg';
import './App.css';

import Cv from './Cv.jsx';
import Home from './components/Home';



// Use the <Home/> style to show up more components on front the page 
// Use capital letters! 
function App() {
  return (
    <div>
      <Cv></Cv>
      <Home/> 
    </div>
  )}

export default App