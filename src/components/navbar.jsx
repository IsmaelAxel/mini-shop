function Navbar({ cartCount }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <a href="/" className="text-xl font-bold tracking-tight">
          MiniShop
        </a>

        <div className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950">
          Carrito: {cartCount}
        </div>
      </nav>
    </header>
  )
}

export default Navbar