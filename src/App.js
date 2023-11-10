
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Master from './website/component/Master';
import All from './website/All';



function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Master Rcf={All}/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
