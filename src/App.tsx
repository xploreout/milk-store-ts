import { Routes, Route } from 'react-router-dom'
import './App.css'
import Detail from './components/Detail'
import Home from './components/Home'
import TopBar from './components/TopBar'

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
