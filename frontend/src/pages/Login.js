import React, { useState } from 'react'

function Login() {

    const [data, setData]= useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const {name,value} = e.target

        setData ((preve)=>{
            return {
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (
        <div className='bg-[]'>
            <h2 className='text-3xl'>Login</h2>
            <div className='h-10'>
                <form onSubmit={handleSubmit}>
                    <input type='email' name='email' placeholder='Enter Your Email' value={data.email} onChange={handleOnChange} />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleOnChange} />
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login