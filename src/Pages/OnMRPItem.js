import React from 'react'
import Component from '../Components/Component'
import '../Components/DataOnMRP'
import data from '../Components/DataOnMRP'




const OnMRPItem = () => {
  return (
    <>
        <div style={{color: 'white',textAlign:'center',fontFamily:'cursive',fontSize:"40px", marginTop:'70px'}}>Mayuri Foods MRP Items </div>
    <div className="row" style={{marginBottom: '113px'}}>
      {data.map((element)=> {
        return <div className="col-md-4">
          <Component photo={element.photo} name={element.name} mrp={element.mrp} key={element.id} ></Component>
        </div>
      })}
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default OnMRPItem