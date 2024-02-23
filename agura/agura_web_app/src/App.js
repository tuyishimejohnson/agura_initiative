import HomePage from './homepage';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import Layout from './layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Layout />}>
            <Route index element={<HomePage/>}/>
            <Route path='about' element={< About />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
