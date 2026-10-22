function ProductCard({ product, onAdd }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className="flex h-48 items-center justify-center bg-white p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-semibold text-white">
          {product.title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {product.category}
        </p>

        <p className="mt-4 text-xl font-bold text-cyan-300">
          {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 0,
          }).format(product.price * 1000)}
        </p>

        <button
          type="button"
          onClick={() => onAdd(product)}
          className="mt-5 rounded-xl bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default ProductCard