import React from 'react'
import toast, { Toaster } from 'react-hot-toast'



const Home = () => {
    return (
        <>
        <div className='fw-medium text-center fs-2  fst-italic' style={{ color: 'white',marginTop:'80px' }} >
            Hello!! VIT Students.
            <br /> Welcome to Mayuri
        </div>
        <div className="text-center fs-5 fst-italic" style={{ color: 'white' }}>
            <br />
            <br />
            <p>
            THIS IS THE PLACE WHERE YOU CAN CHECK OUT THE MENU OF MAYURI FOODS WITHOUT BEING THE PART OF CROWD.  
            </p>
            <br />
            <p style={{fontWeight:'bold'}}> FIND THE MENU WITHOUT WASTING TIME...</p>
            
        </div>
        
        <div className="button_1">
                <button className='button-89 fw-medium ' onClick={() => toast.success("Menu on Top Bar..") }> Get Started</button>
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
        </div>
    </>
    )
}

export default Home