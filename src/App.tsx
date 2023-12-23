import React, { FunctionComponent} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageAccueil from './pages/PageAccueil';
import RendezVous from './pages/RendezVous';
import ImageGallery from './components/ImageGallery';

const App:FunctionComponent =()=>{

  return(
<BrowserRouter>
<Routes>
  <Route path='/' element={<PageAccueil/>}/>
  <Route path='/RendezVous' element={<RendezVous/>}/>
  <Route path='/add' element={<ImageGallery/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App;
