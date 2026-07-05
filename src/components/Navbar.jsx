function Navbar() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Phoenix Coffee home">
        <span className="brand-mark">🔥</span>
        <span>Phoenix Coffee</span>
      </a>
      <div className="nav-links">
        <a href="#story">Story</a>
        <a href="#coffee">Coffee</a>
        <a href="#order">Order</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
