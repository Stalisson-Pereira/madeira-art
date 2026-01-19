import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SiteLayout from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'
import Produtos from '@/pages/Produtos'
import Contato from '@/pages/Contato'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
