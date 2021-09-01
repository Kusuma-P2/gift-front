import React from 'react'

export default function login() {
    return (
        <div className="d-flex justify-content-center w-100 h-100">
        <div className="card" style={{marginTop:"15%", width:"380px"}}>
            <div className="card-body">
                <form >
                    <h2 className="title-box text-center ">SIGN IN</h2>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" required />
                      </div> 
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" autocomplete="off" required />
                      </div>
                      <div className="form-group text-center">
                      <button type="submit" className="button button-a button-big button-rouded py-1">Sign In</button>
                      </div>
                       <p className="text-center">New User? <a href="/signup">sign Up</a></p>
                       {/* <p className="text-center"> <a href="password">Forgot Password?</a></p> */}
                </form>
            </div>
            
        </div>
    </div>
    )
}
