import Link from "next/link";

import { useNight } from "../context/nightContext";
import { useTheme } from 'next-themes'


const Navbar = () => {


  // let {styles, switchColor} = useNight()

  // var Nigth = styles[0].night
  //  Nigth = false 

  // const HandleColorChange = () => {
  //   switchColor(styles[0].night)
  //   Nigth = styles[0].night 
  //   console.log('new night color  => ', Nigth)
  // }
  const { theme, setTheme } = useTheme()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">Portfolio</a>
        </Link>
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
        <div className="collapse navbar-collapse flex" id="navbarNav">
          <ul className="navbar-nav ml-auto push ">
            <li className="nav-item ">
              {/* <Link href="/blog" legacyBehavior>
                <a className="nav-link active" aria-current="page">
                  Blog
                </a>
              </Link> */}
            </li>
            <li className="nav-item">
              {/* <Link href="/github" legacyBehavior>
                <a className="nav-link">
                 Github 
                </a>
              </Link> */}
            </li>
       
            



            <li className="nav-item">
              <div>
                {
                theme == "dark" ? (
                <button className="btn btn-light btnrounded"  onClick={() => setTheme('light')}>Light Mode</button>
                )  : (      
                <button className="btn btn-dark btnrounded" onClick={() => setTheme('dark')}>Dark Mode</button>
                ) }

          
              </div>
              {
              //   Nigth ? (
              //     // onClick={HandleColorChange} 
              //   <button type="button" className="btn btn-light btnrounded">Light</button>
              //  ): (
              //   // onClick={HandleColorChange} 
              //   <button  type="button" class="btn btn-dark">Dark</button>
              //   ) 
              }
                 
            </li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;