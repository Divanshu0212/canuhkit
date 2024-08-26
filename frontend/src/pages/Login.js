import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';
import './Login.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.logIn.url, {
            method: SummaryApi.logIn.method,
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if (dataApi.success) {
            toast.success(dataApi.message)
            navigate('/home')
        }

        if (dataApi.error) {
            toast.error(dataApi.message)
        }
    }
    return (
        <div className='bg-[#1c1c1c]'>
            <Header />
            <div className='flex items-center justify-center bg-[#1c1c1c] h-[75vh]'>
                <div className="relative gradient-bg p-8 w-[600px] box-border shadow-lg cut-corner ">
                    <h1 className="text-2xl mb-8 text-white text-left font-bold text-shadow">ENTER THE ARENA</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center mb-6">
                            <label for="username" className="w-24 text-white text-lg">Email:</label>
                            <input id="username" type="email"
                                placeholder='enter email'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange} className="flex-1 bg-gray-800 p-2 rounded text-gray-200 ml-4" required />
                        </div>
                        <div className="flex items-center mb-6">
                            <label for="password" className='w-24 text-white text-lg'>Password:</label>
                            <input id="password" type="password"
                                placeholder='enter password'
                                value={data.password}
                                name='password'
                                onChange={handleOnChange} className="flex-1 bg-gray-800 p-2 rounded text-gray-200 ml-4" required />
                        </div>
                        <div className="flex justify-center">
                            <button className='w-1/3 bg-gray-900 text-white p-2 rounded hover:bg-gray-800 transition duration-300 cursor-pointer'>Login</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login