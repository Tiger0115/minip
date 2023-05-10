import React from 'react'
import NewNavbar from './NewNavbar'

export default function Login() {
  return (
    <>
      <NewNavbar/>
      <div className='container my-5'>
        <form className="row g-3">
  
        <div className="col-6">
            <label className="form-label" for="form2Example1">Email address</label>
            <input type="email" id="form2Example1" className="form-control" />
            
        </div>

        <br/>
        <div className="col-6">
            <label className="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" className="form-control" />
            
        </div>

       
        <div className="col-6">
            <div className="col d-flex justify-content-center">
            
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                    <label className="form-check-label" for="form2Example31"> Remember me </label>
                </div>
            </div>
            
            <div className="col-6">
            
            <a href="#!">Forgot password?</a>
            </div>
        </div>

        
        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

        
        <div className="col-12">
            <p>Not a member? <a href="/">Register</a></p>
            
            </div>
        </form>
      </div>
    </>
  )
}
