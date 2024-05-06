import React from 'react'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contato from './Contato';
import QuemSomos from './QuemSomos';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() 
{ 
 return ( 
 <div className="App"> 
 <Navbar />
<BrowserRouter> 
<Routes> 
<Route path='/' element={<Home />} /> 
 <Route path='/Contato' element={<Contato />} /> 
 <Route path='/QuemSomos' element={<QuemSomos/>} /> 
 </Routes> 
 </BrowserRouter> 
 <Footer /> 
</div> );} export 
default App; 























