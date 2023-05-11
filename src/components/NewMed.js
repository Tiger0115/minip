import React,{useState} from 'react';


export default function NewMed() {

    const [mName, setmName]= useState("");
    const [uid, setUid]= useState("");
    const [disease, setDisease]= useState("");
    const [cpu, setCpu]= useState("");
    const [stock, setstock]= useState("");
    const [allergy, setAllergy]= useState("");


  return (
    <>
        
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
