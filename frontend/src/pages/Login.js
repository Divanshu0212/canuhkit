import React from 'react'

function Login() {

    return (
        <div className='bg-[]'>
            <h2 className='text-3xl'>Login</h2>
            <div className='h-10'>
                <form onSubmit={(e) => e.preventDefault}>
                    <input type='email' placeholder='Enter Your Email' />
                    <input type='password' placeholder='Password' />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login