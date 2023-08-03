import React, { useState } from 'react'
import "../App.css"
import toast, { Toaster } from 'react-hot-toast'
// import { NavLink } from 'react-router-dom'

const Component = (props) => {
    const  [Inc,setInc]= useState(0)
    return (
        <>
            <div className="card m-3 "  >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
                    {/* <span className="badge rounded-pill bg-danger" >{Inc} </span> */}
                </div>
                <img src={props.photo} className="card-img-top" alt="..." style={{height:'230px'}} />
                <div className="card-body">
                    <h5 className="card-title fs-3">{props.name}</h5>
                    <p className="card-text fs-4">{props.mrp}</p>
                    <div className='d-flex flex-row '>
                        {/* <button className='btn btn-outline-primary mx-2 fw-semibold ' onClick={()=>{ setInc(Inc+1)  ;toast.success(`${props.name} added to Cart`)}} >+</button> */}
                        <Toaster
                            position="top-center"
                            toastOptions={{
                                duration: 1500,
                                iconTheme: {
                                    primary: "red",
                                    secondary: "white"
                                },
                                role: "status",
                                ariaLive: "polite",
                                style: {
                                    background: "green",
                                    color: "whitesmoke"
                                }
                            }}
                        />
                        {/* <p className=' mx-2 fw-semibold ' >{Inc}</p> */}
                        {/* <button className='btn btn-outline-danger mx-2 fw-semibold ' disabled={Inc <= 0} onClick={() =>{setInc(Inc-1) ; toast.success(`${props.name} Removed from Cart`)} } >-</button> */}
                        {/* <NavLink className='btn btn-outline-success mx-2 ' to='/cart'>Go To Cart</NavLink> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Component