import React from 'react'
import NewNavbar from './NewNavbar'

export default function Register() {
  return (
    <>
      <NewNavbar/>
        
        <div className='container my-3'>
        <h3>Add New Employee</h3>
        <br/>
        <form className="row g-3">

            <div className="col-12">
                <label for="inputAddress" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="FullName"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" id="Phone"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="address"/>
            </div>
            <div className="col-md-12">
                <label className="form-label">Owner Key</label>
                <input type="text" className="form-control" id="CostPerUnit"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">User Id</label>
                <input type="text" className="form-control" id="userid"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            
                       
        </form>
        </div>
    </>
  )
}
