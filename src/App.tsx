import { NavBar } from './components/ui/navBar'
import { ItemsPage } from './pages/ItemsPage'
import { CartPage } from './pages/cartPage'
import { ErrorPage } from './pages/errorPage'
import { HomePage } from './pages/homePage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-4">      
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App
