import React from 'react'
// import Navbar from './Navbar'

export default function Home() {

  const [mName, setmName]= useState("");
  const [uid, setUid]= useState("");
  const [disease, setDisease]= useState("");
  const [cpu, setCpu]= useState("");
  const [stock, setstock]= useState("");
  const [allergy, setAllergy]= useState("");



  return (
    <>
        {/* <Navbar/> */}
        <center>
        <div className='container my-5'>
            <table className='table table-bordered border-primary'>
              <thead>
              <tr>
                  <th>Sr. No.</th>
                  <th>Med Name</th>
                  <th>UID</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Total</th>
              </tr>
              </thead>

              <tbody>
                
              </tbody>

            </table>
            <div class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">Medicine Name</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

              <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
              <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              <button type="button" class="btn btn-primary">+ Add Medicine</button>
            </div>
            
        </div>
        </center>
    </>
  )
}
