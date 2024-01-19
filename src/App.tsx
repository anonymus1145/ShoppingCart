import { NavBar } from './components/ui/navBar'
import { ItemsPage } from './pages/ItemsPage'
import { ErrorPage } from './pages/errorPage'
import { HomePage } from './pages/homePage'
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <>        
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
