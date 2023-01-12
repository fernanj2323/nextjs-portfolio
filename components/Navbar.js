import Link from 'next/link'

const Navbar = () =>  (
<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark ">
  <div className="container-fluid">
    <Link href="/"  legacyBehavior>
    <a className="navbar-brand" >Portfolio</a>
    </Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">


        <li className="nav-item">
          <Link href="/blog"  legacyBehavior> 
            <a className="nav-link" >Blog</a>
          </Link>
        </li>
        <li className="nav-item">
           <Link href="/github"  legacyBehavior>
              <a className="nav-link" >Github</a>
           </Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
)


export default Navbar