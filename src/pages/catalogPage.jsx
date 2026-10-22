import { useEffect, useState } from 'react'
import { getProducts } from '../services/productService'
import ProductList from '../components/productList'
import CartSummary from '../components/cartSummary'

function CatalogPage({ onAdd, cart, onRemove }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        const result = await getProducts()
        setProducts(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[1fr_300px]">
      <section>
        <header className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Catálogo
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white">
            Descubrí productos
          </h1>
          <p className="mt-2 text-slate-400">
            Elegí productos y agregalos al carrito.
          </p>
        </header>

        {loading && (
          <p role="status" className="text-slate-300">
            Cargando productos...
          </p>
        )}

        {error && (
          <div role="alert" className="rounded-xl border border-red-500/30 p-4 text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <ProductList
            products={products}
            onAdd={onAdd}
          />
        )}
      </section>

      <CartSummary
        cart={cart}
        onRemove={onRemove}
      />
    </main>
  )
}

export default CatalogPage