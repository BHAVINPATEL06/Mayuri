import React from 'react'
import '../Components/DataChats'
import data from '../Components/DataChats'
import Component from '../Components/Component'



const Chats = () => {
  return (
    <>
        <div style={{color: 'white',textAlign:'center',fontFamily:'cursive',fontSize:"40px", marginTop:'70px'}}>Mayuri Foods Chats</div>
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

export default Chats