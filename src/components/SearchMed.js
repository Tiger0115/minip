import React from 'react'
// import Navbar from './Navbar'

export default function SearchMed() {

    const [mName, setmName]= useState("");
    const [uid, setUid]= useState("");
    const [disease, setDisease]= useState("");
    const [cpu, setCpu]= useState("");
    const [stock, setstock]= useState("");
    const [allergy, setAllergy]= useState("");



  return (
    <>
      {/* <Navbar/> */}

      <form className='container my-5'>
      <div className="row mb-3">        
        <label for="inputMed" className="col-sm-2 col-form-label">Enter Medicine Name or UID</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputMed"/>
            </div>
        </div>
        </form>

        <div className='container my-3'>
        <h3>Description - </h3>
        <br/>

            <div className="col-12">
                <label for="inputAddress" className="form-label">Medicine Name :</label>
                
            </div>

            <div className="col-md-12">
                <label className="form-label">UID : </label>
                
            </div>

            <div className="col-md-12">
                <label className="form-label">For Disease</label>
               
            </div>
            <div className="col-md-6">
                <label className="form-label">Cost per Unit : </label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Current Stock : </label>
                
            </div>

            <div className="col-md-6">
                <label className="form-label">Allergy Warning : </label>
                
            </div>
        </div>
    </>
  )
}
