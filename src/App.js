import React from 'react'
import Header from './components/Header'
import Landing from './components/Landing'
import Quote from './components/Quote'
import Services from './components/Services'
import Onsitedeliver from './components/Onsitedeliver'
import Others from './components/Others/Others'
import Example from './components/Example'
import Clients from'./components/Clients'
import Bookplumber from './components/Bookplumber'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <Header />
      <Landing/>
      <Quote />
      <Services/>
      <Onsitedeliver/>
      <Others/>
      <Example/>
      <Clients/>
      <Bookplumber/>
      <Footer/>
    </div>
  )
}
