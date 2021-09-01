import React from 'react'

function signup() {
    return (
        <div className="d-flex justify-content-center w-100 h-100">
        <div className="card" style={{marginTop: "15%",width:"380px"}}>
            <div className="card-body">
                <h2 className="title-box text-center">SIGN UP</h2>
                
                <form >
                    <div className="form-group">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Name"  autocomplete="off" size="25" pattern="[A-Za-z\s]{1,}" required />
                    </div>
                    
                    <div className="form-group">
                      <input type="tel" className="form-control" name="phoneno" id="phoneno" placeholder="Phone Number"  pattern="[6-9]{1}[0-9]{9}" required />
                      
                  </div>
                    
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email" data-rule="email" autocomplete="off"  required />
                        
                      </div>
                      
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" data-rule="password" required/>
                       
                    </div>
                   
                      <div className="form-group text-center">
                      <input type="submit" className="button button-a button-big button-rouded  py-1" name="submit" value="submit" />
                      </div>
                </form>
            </div>
            
        </div>
    </div>
    )
}

export default signup
