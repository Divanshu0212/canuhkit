import React from 'react'
import { useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageToBase64';
import { toast } from 'react-toastify'
import SummaryApi from '../common';
import { useState } from 'react'
import './SignUp.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const SignUp = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        profilePic: ""
    })
    const navigate = useNavigate();

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


        if (data.password === data.confirmPassword) {
            const dataResponse = await fetch(SummaryApi.signUP.url, {
                method: SummaryApi.signUP.method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const dataApi = await dataResponse.json()

            if (dataApi.success) {
                toast.success(dataApi.message)
                navigate('/login');
            }

            if (dataApi.error) {
                toast.error(dataApi.message)
            }
            console.log("Aryan", dataApi)
        } else {
            toast.error("Please check Password and Confirm Password")
        }

    }

    const handleUploadPic = async (e) => {
        const file = e.target.files[0]

        const imagePic = await imageTobase64(file)

        setData((preve) => {
            return {
                ...preve,
                profilePic: imagePic
            }
        })
    }

    return (
        <>
        <Header/>
            <section className='bg-[#1c1c1c] min-h-full w-full flex flex-col justify-center items-center'>
                <div className="relative gradient-bg p-8 w-[600px] box-border shadow-lg cut-corner">


                    <h1 className="text-2xl mb-8 text-left font-bold text-shadow">LET'S GET STARTED</h1>


                    <div className="photo-box relative w-24 h-24 rounded-full bg-gray-800 mx-auto mb-6 overflow-hidden flex justify-center items-center">
                        <img id="profile-pic" src={data.profilePic} alt="Profile Picture" className="w-full h-full object-cover absolute top-0 left-0 z-1 hidden" />
                        <input type="file" id="photo-upload" name="photo" accept="image/*" onChange={handleUploadPic} className="absolute w-full h-full opacity-0 cursor-pointer z-2" />
                    </div>


                    <form onSubmit={handleSubmit}>

                        <div className="flex items-center mb-6">
                            <label for="username" className="w-24">Username:</label>
                            <input type="text" id="username" name='name'
                                value={data.name}
                                onChange={handleOnChange}
                                placeholder='Enter Username'
                                required className="gradient-input ml-4" />
                        </div>


                        <div className="flex items-center mb-6">
                            <label for="email" className="w-24">Email:</label>
                            <input type="email" id="email"
                                placeholder='Enter Email'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                required

                                className="gradient-input ml-4" />
                        </div>


                        <div className="flex items-center mb-6">
                            <label for="password" className="w-24">Password:</label>
                            <input type="password" id="password" placeholder='Enter Password'
                                value={data.password}
                                name='password'
                                onChange={handleOnChange}
                                required className="gradient-input ml-4" />
                        </div>


                        <div className="flex items-center mb-6">
                            <label for="confirm_password" className="w-24">Confirm Password:</label>
                            <input type="password" id="confirm_password" placeholder='enter confirm password'
                                value={data.confirmPassword}
                                name='confirmPassword'
                                onChange={handleOnChange}
                                required className="gradient-input ml-4" />
                        </div>


                        <div className="flex justify-center">
                            <button className="w-1/3 bg-gray-900 text-white p-2 rounded hover:bg-gray-800 transition duration-300 cursor-pointer" >Sign up</button>
                        </div>
                    </form>
                </div>

            </section>
            <Footer/>
        </>
    )

}

export default SignUp