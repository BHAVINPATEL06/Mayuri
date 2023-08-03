import React from 'react'
import '../Components/Data'
import Component from '../Components/Component'
import data from '../Components/Data'


const TeaCoffee = () => {
  return (
    <>
    <div style={{color: 'white',textAlign:'center',fontFamily:'cursive',fontSize:"40px", marginTop:'70px'}}>Mayuri Foods Tea-Coffee</div>
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







export default TeaCoffee

