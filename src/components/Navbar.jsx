function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navContent p-4 text-center">
        <div className="logo">
          <div>
            <h1>Curamentis</h1>
            <h6>Praxis für Psychotherapie</h6>
          </div>
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ONLINE-THERAPIE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ablauf & Kosten
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Über uns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Magazin
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Kontakt
            </a>
          </li>
          <li>
            <div>
              <button className="appointment ms-3">Terminvereinbarung</button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
