import React from 'react'
import { useSelector } from 'react-redux'


export default function NavBar(){

  const logout = () => {
    localStorage.clear('user')
  }
   const isLogged = useSelector(state => state.isLogged)
    return (
        <nav className="navbar navbar-b  navbar-trans navbar-expand-md fixed-top" id="mainNav">
    <div className="container-fluid">
      <a className="navbar-brand js-scroll" href="#page-top"><img src="/img/Logo1.jpg" alt="" width="70" height="70" /></a>
      <h3 style={{color: "#cf9786", fontFamily: "Arizonia, cursive" }}>Glaring Cosmos</h3>
        
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
            <a className="nav-link js-scroll" href="#work">Products</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link js-scroll" href="#contact">Contact</a>
          </li> 

          <li className="nav-item">
            <a className="nav-link js-scroll" href="cart">Cart</a>
          </li>    
                    
        </ul>
        
        {
          isLogged ? 
          <a className="  " href="/" onClick={logout}><span className="button button-a button-rouded button-big ml-5 py-1 ">Log out</span> </a>
          :
          <a className="  " href="/login"><span className="button button-a button-rouded button-big ml-5 py-1 ">Sign In</span> </a>
        }
        
        
      </div>
    </div>
  </nav>

    )
}
