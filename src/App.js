import Layout from './layout';
import HomePage from './homepage';
import About from './about';
import Services from './services';
import Contacts from './contacts';
import Footer from './footer';
import Login from './login';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={< Layout />}>
                  <Route index element={< HomePage />}/>
                  <Route path='about' element={< About />}/>
                  <Route path='services' element={< Services />}/>
                  <Route path='contacts' element={< Contacts />}/>
                  <Route path='login' element={< Login />} />
            </Route>
        </Routes>
        <Footer />
    </BrowserRouter>
   
  )
}

export default App;
