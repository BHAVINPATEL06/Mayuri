import React from 'react'
import Component from '../Components/Component'
import '../Components/DataSweet'
import data from '../Components/DataSweet'

const Sweet = () => {
  return (
    <>
    <div style={{color: 'white',textAlign:'center',fontFamily:'cursive',fontSize:"40px", marginTop:'70px'}}>Mayuri Foods Sweets</div>
    <div className="row">
      {data.map((element)=> {
        return <div className="col-md-4">
          <Component photo={element.photo} name={element.name} mrp={element.mrp} key={element.id} ></Component>
        </div>
      })}
    </div>
    </>
  )
}

export default Sweet