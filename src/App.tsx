import { useEffect, useState } from 'react'
import { NavBar } from './components/ui/navBar'
import { ItemsPage, Product } from './pages/ItemsPage'
import { ErrorPage } from './pages/errorPage'
import { HomePage } from './pages/homePage'
import { Routes, Route } from 'react-router-dom'
import { CartItemsContext, CartItems } from './hooks/useContext'


function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [cartItems, setCartItems] = useState<Product[]>([]);


  const fetchProducts = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products/?categoryId=2")
    const productLis = await response.json()

    setProducts(productLis);
  }

  useEffect(() => {
    fetchProducts()
  }, []) // Empty dependency array ensures useEffect runs only once!!


  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className="grid grid-rows-[auto,1fr] gap-4">
      <CartItems.Provider value={cartItems} >
        <CartItemsContext.Provider value={products}>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemsPage addToCart={addToCart} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </CartItemsContext.Provider>
      </CartItems.Provider>
    </div>
  )
}

export default App
