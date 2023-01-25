import Link from "next/link";
import { useTheme } from 'next-themes'
import classNames from "classnames"

const Navbar = () => {


  
  const { theme, setTheme } = useTheme()
  return (
 
    <nav   className={classNames('navbar navbar-expand-lg nav-color', {'bg-dark': theme == 'dark'})} >
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand"   >Portfolio</a>
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="navbar-toggler">
                {
                theme == "dark" ? (
                <button className="btn btn-light btnrounded"  onClick={() => setTheme('light')}>Light Mode</button>
                )  : (      
                <button className="btn btn-dark btnrounded" onClick={() => setTheme('dark')}>Dark Mode</button>
                ) }

          
          </div>


        <div className="collapse navbar-collapse flex" id="navbarNav">
          <ul className="navbar-nav ml-auto push ">
      
       
          

            <li className="nav-item">
              <div>
                {
                theme == "dark" ? (
                <button className="btn btn-light btnrounded"  onClick={() => setTheme('light')}>Light Mode</button>
                )  : (      
                <button className="btn btn-dark btnrounded" onClick={() => setTheme('dark')}>Dark Mode</button>
                ) }

          
              </div>
        
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;