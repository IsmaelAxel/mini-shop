import ProductCard from './productCard'

function ProductList({ products, onAdd }) {
  if (products === 0) {
    return (
      <p className="rounded-xl border border-slate-800 p-6 text-slate-400">
        No hay productos para mostrar.
      </p>
    )
  }

  return (
    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </section>
  )
}

export default ProductList