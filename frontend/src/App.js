

import React from 'react';
import {Container} from 'react-bootstrap';
import { Footer } from './component/Footer';
import { Header } from './component/Header';



 const App=() =>{
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
            <h1>
            Welcome to ITao Shop
            </h1>
        </Container>
      
       </main>
       <Footer/>
    </div>
  )
}


export default App;