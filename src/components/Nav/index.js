import React from "react";
import About from "../About";
import ContactForm from "../ContactForm";
import Portfolio from "../Portfolio";
import Resume from "../Resume";

const Nav = ({selectedPage,setSelectedPage}) => {
  return(
    <nav>
      <ul className="row nav-list">
        <li className={`col-3 ${selectedPage[1]=== 'About' && 'navActive'}`} >
          <a href="#about" onClick={() => setSelectedPage([<About/>, 'About'])}>
          About Me
          </a>        
        </li>
        <li className={`col-3 ${selectedPage[1]==='Portfolio' && 'navActive'}`}>
        <a href="#portfolio"onClick={() => setSelectedPage([<Portfolio/>, 'Portfolio'])} >
            Portfolio
          </a> 
        </li>
        <li className={`col-3 ${selectedPage[1]==='ContactForm' && 'navActive'}`}>
          <a href="#contact-form"onClick={() => setSelectedPage([<ContactForm/>, 'ContactForm'])} >
            Contact Me
          </a>   
        </li>
        <li className={`col-3 ${selectedPage[1]==='Resume' && 'navActive'}`}>
          <a href="#resume"onClick={() => setSelectedPage([<Resume/>, 'Resume'])} >
            Resume
          </a>   
        </li>
      </ul>
    </nav>
    )
}
export default Nav;