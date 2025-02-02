
const Navbar = () => {
    const login = document.getElementById('logged-in')
    const logout = document.getElementById('logged-out')

    const token = true
    const total = 25000




    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mamma Mia!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav gap-3">
                        <a class="nav-link active option" aria-current="page" href="#">🍕Home</a>
                        <div id="logged-in" className="d-flex gap-2">
                            <a class="nav-link option" href="#">🔓Profile</a>
                            <a class="nav-link option" href="#">🔒Logout</a>
                        </div>
                        <div id="logged-out" className="d-flex gap-2">
                            <a class="nav-link option" href="#">🔐Login</a>
                            <a class="nav-link option" href="#">🔐Register</a>
                        </div>
                        <a class="nav-link option" href="#">🛒Total: {total}</a>
                    </div>
                </div>
            </div>
        </nav>
      </>
    )
  }
  
  export default Navbar
  