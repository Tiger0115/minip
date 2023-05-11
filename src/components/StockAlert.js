import React from 'react'
// import Navbar from './Navbar'

export default function StockAlert() {

  const [mName, setmName]= useState("");
  const [uid, setUid]= useState("");
  const [disease, setDisease]= useState("");
  const [cpu, setCpu]= useState("");
  const [stock, setstock]= useState("");
  const [allergy, setAllergy]= useState("");



  return (
    <>
     {/* <Navbar/> */}
     <div className='container my-5'>
     <table className='table table-bordered border-primary'>
              <thead>
              <tr>
                  <th>Sr. No.</th>
                  <th>Med Name</th>
                  <th>UID</th>
                  <th>Current Stock</th>
                  
              </tr>
              </thead>

              <tbody>
                
              </tbody>

        </table> 
        </div>
    </>
  )
}
