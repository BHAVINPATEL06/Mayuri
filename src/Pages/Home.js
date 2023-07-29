import React from 'react'
import { NavLink } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'



const Home = () => {
    return (

        <>
        <div className='fw-medium text-center fs-2 my-2 fst-italic' style={{ color: 'white' }} >
            Hello!! VIT Students.
            <br /> Welcome to Mayuri
        </div>
        <div className="text-center fs-5 fst-italic" style={{ color: 'white' }}>
            If you want to be free from your suffering, make up your mind. If you give up on your dream, you will suffer more. -Might Guy
        </div>
        <div className="button_1">
            {/* <NavLink to='/menu'> */}
                <button className='button-89 fw-medium '  onClick={() => toast.success("Menu on Top Bar..") }> Get Started</button>
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
            {/* </NavLink> */}
        </div>
    </>
    )
}

export default Home