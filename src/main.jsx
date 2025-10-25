import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import LessonPage from './pages/LessonPage/LessonPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Need to have a dynamic URL based off the lesson here. */}
        <Route path="/lesson" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
