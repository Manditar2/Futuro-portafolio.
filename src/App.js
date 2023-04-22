import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import MyErrorBoundary from './MyErrorBoundary';
import React, { Suspense } from 'react';
import './App.css';



function App() {

const Main = React.lazy(() => import('./main'));
const Login = React.lazy(() => import('./componentes/login'))
const Registro = React.lazy(() => import('./componentes/registro')) 

  return (
    <div>
      <Router>
      <Suspense fallback = {<div>Loading ..</div>}>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element = {<Main/>}/>
        <Route path ="/registro" element = {<Registro/>}/>
        </Routes>
      </Suspense>
      </Router>

    </div>

  );
}

export default App;
