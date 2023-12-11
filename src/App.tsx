import React, { FunctionComponent} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageAccueil from './pages/PageAccueil';
import RendezVous from './pages/RendezVous';

const App:FunctionComponent =()=>{

  return(
<BrowserRouter>
<Routes>
  <Route path='/' element={<PageAccueil/>}/>
  <Route path='/RendezVous' element={<RendezVous/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App;
