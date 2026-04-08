import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Layout from './components/Layout.jsx'
import PortfolioPagePage from './pages/PortfolioPage.jsx'
import ClientsPage from './pages/ClientsPage.jsx'
import InquirePage from './pages/InquirePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<PortfolioPagePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="clients" element={<ClientsPage />} />
        <Route path="inquire" element={<InquirePage />} />
      </Route>
    </Routes>
  )
}

export default App
