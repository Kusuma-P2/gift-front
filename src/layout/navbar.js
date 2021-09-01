import React from 'react'


export default function NavBar(){
    return (
        <nav className="navbar navbar-b navbar-dark navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div className="container-fluid">
      <a className="navbar-brand js-scroll" href="#page-top"><img src="/img/Logo1.jpg" alt="" width="70" height="70" /></a>
     
        <div className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="button button-a button-rouded my-2 my-sm-0" type="submit">Search</button>
        </div>
        <span></span>
        <span></span>
        <span></span>
      <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll active" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#service">Videos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#work">Products</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#contact">Contact</a>
          </li>    
          <li className="nav-item">
            <a href="" className="icons-btn nav-link">
              <img src="/img/cart.png" alt="" width="30" height="30" />
            </a>
          </li> 
          <li className="nav-item">
            <a href="" className="icons-btn nav-link">
              <i className="fa fa-heart-o fa-2x"></i>
            </a>
          </li>                
        </ul>
        
        
        <a className="  " href="/login"><span className="button button-a button-rouded button-big ml-5 py-1 ">Sign In</span> </a>
        
      </div>
    </div>
  </nav>

    )
}
