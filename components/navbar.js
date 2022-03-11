import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'; // Add this line


const Navbar = () =>{
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <Link href="/">
                <a className="navbar-brand">BlogTalk</a>
              </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link href="/" className="nav-item">
                  <a className="nav-link active" aria-current="page" >Home</a>
                </Link>
                <Link href="/about" className="nav-item">
                  <a className="nav-link" >About</a>
                </Link>
                <Link href="/contact" className="nav-item">
                  <a className="nav-link" >Contact</a>
                </Link>
                <Link href="/blog" className="nav-item">
                  <a className="nav-link" >Blog</a>
                </Link>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;