import { useState } from 'react'
import Navbar from './components/navbar'
import CatalogPage from './pages/catalogPage'

function App() {
  const [cart, setCart] = useState([])

  function handleAddProduct(product) {
    setCart((currentCart) => [
      ...currentCart,
      product,
    ])
  }

  function handleRemoveProduct(indexToRemove) {
    setCart((currentCart) =>
      currentCart.filter(
        (_, index) => index !== indexToRemove,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar cartCount={cart.length} />

      <CatalogPage
        cart={cart}
        onAdd={handleAddProduct}
        onRemove={handleRemoveProduct}
      />
    </div>
  )
}

export default App