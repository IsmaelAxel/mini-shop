function CartSummary({ cart, onRemove }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0,
  )

  return (
    <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-white">
      <h2 className="text-xl font-bold">Tu carrito</h2>

      {cart.length === 0 ? (
        <p className="mt-4 text-sm text-slate-400">
          Todavía no agregaste productos.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {cart.map((product, index) => (
            <li
              key={`${product.id}-${index}`}
              className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3"
            >
              <span className="text-sm">{product.title}</span>

              <button
                type="button"
                onClick={() => onRemove(index)}
                className="text-sm text-red-300 hover:text-red-200"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 border-t border-slate-700 pt-4">
        <p className="text-sm text-slate-400">
          Cantidad de unidades: {cart.length}
        </p>

        <p className="mt-2 text-2xl font-bold">
          Total: {new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 0,
          }).format(total * 1000)}
        </p>
      </div>
    </aside>
  )
}

export default CartSummary