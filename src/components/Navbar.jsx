
const Navbar = () => {
    const token = true
    const total = 25000


    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Mamma Mia!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav gap-3 ms-auto">
                        <a className="nav-link active option" aria-current="page" href="#">🍕Home</a>
                        <a className={`nav-link option ${!token ? 'd-none' : ''}`} href="#">🔓Profile</a>
                        <a className={`nav-link option ${!token ? 'd-none' : ''}`} href="#">🔒Logout</a>
                        <a className={`nav-link option ${token ? 'd-none' : ''}`} href="#">🔐Login</a>
                        <a className={`nav-link option ${token ? 'd-none' : ''}`} href="#">🔐Register</a>
                        <a className="nav-link option" href="#">🛒Total: {total.toLocaleString("es-CL")}</a>
                    </div>
                </div>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  