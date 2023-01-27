import { Routes, Route } from 'react-router-dom'
import './App.css'
import Detail from './components/Detail'
import Home from './components/Home'
import TopBar from './components/TopBar'
import MilksProvider from './context/milksContext'

function App() {
  return (
    <>
      <TopBar />
      <MilksProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Detail />} />
        </Routes>
      </MilksProvider>
    </>
  )
}

export default App
