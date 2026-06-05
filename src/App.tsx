import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Waitlist } from './pages/Waitlist'
import { Bloggers } from './pages/Bloggers'

export default function App() {
  return (
    <BrowserRouter basename="/recordgram">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/bloggers" element={<Bloggers />} />
      </Routes>
    </BrowserRouter>
  )
}
