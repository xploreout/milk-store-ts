import {  Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import TopBar from './components/TopBar'

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
