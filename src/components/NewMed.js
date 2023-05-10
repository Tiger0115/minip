import React from 'react'
import Navbar from './Navbar'

export default function NewMed() {
  return (
    <>
        <Navbar/>

        
        <div className='container my-3'>
        <h3>Add New Medicine</h3>
        <br/>
        <form className="row g-3">

            <div className="col-12">
                <label for="inputAddress" className="form-label">Medicine Name</label>
                <input type="text" className="form-control" id="MedName"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">UID</label>
                <input type="text" className="form-control" id="UID"/>
            </div>

            <div className="col-md-12">
                <label className="form-label">Disease</label>
                <input type="text" className="form-control" id="Disease"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Cost per Unit</label>
                <input type="text" className="form-control" id="CostPerUnit"/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Incoming Stock</label>
                <input type="text" className="form-control" id="CostPerUnit"/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Allergy Warning</label>
                <input type="text" className="form-control" id="AllergyWarning"/>
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Add Medicine</button>
            </div>
            
        </form>
        </div>
    </>
  )
}
