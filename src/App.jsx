import About from './pages/About'
import PageHeader from './components/PageHeader'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <>
    <BrowserRouter>
      <div className='bg-[#111827] w-full '>
     <PageHeader/>
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
