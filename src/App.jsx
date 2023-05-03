import About from './pages/About'
import PageHeader from './components/PageHeader'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'
import { useState } from 'react'
import Projects from './pages/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {

  const [showMenu, setShowMenu]= useState(false)

   function handleShowMenu(){
    setShowMenu(!showMenu)
   }
  return (
    <>
    <BrowserRouter>
      <div className='bg-[#111827]'>
     <PageHeader handleShowMenu={handleShowMenu}/>
      <SideMenu showMenu={showMenu} handleShowMenu={handleShowMenu} />
     <Routes>
     <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/projects'element={<Projects/>}/>
     </Routes>
     <Footer/>
      </div>
     </BrowserRouter>
    </>
  )
}

export default App
