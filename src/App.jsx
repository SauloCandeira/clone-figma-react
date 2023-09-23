import { useState } from 'react'
import Header from './components/Banner/Banner';
import Banner from './components/Header/Header';
import Title from './components/Title/Title';
import Product from './components/Product/Product';
import Status from './components/Status/Status';
import Feedback from './components/Feedback/Feedback';


function App() {

  return (
    <>

      <div className=''>
        <Header></Header>
        <Banner></Banner>
        <Title></Title>
        <Status></Status>
        <Product></Product>
        <Feedback></Feedback>

      </div>

    </>
  )
}

export default App
