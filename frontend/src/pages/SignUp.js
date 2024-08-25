import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import imageTobase64 from '../helpers/imageToBase64';
import { toast } from 'react-toastify'
import SummaryApi from '../common';

const SignUp = () => {
    const [data, setData]= useState({
        email : "",
        password : "",
        name :"",
        confirmPassword : "",
        profilePic :""
    })
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const {name,value} = e.target

        setData ((preve)=>{
            return {
                ...preve,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        

        if (data.password === data.confirmPassword){
            const dataResponse = await fetch (SummaryApi.signUP.url,{
                method : SummaryApi.signUP.method,
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify(data)
            })
    
            const dataApi = await dataResponse.json()

            if (dataApi.success){
                toast.success(dataApi.message)
                navigate('/login');
            }

            if (dataApi.error){
                toast.error(dataApi.message)
            }
            console.log("Aryan",dataApi)
        }else {
            toast.error("Please check Password and Confirm Password")
        }

    }

    const handleUploadPic = async(e) => {
        const file=e.target.files[0]

        const imagePic = await imageTobase64(file)

        setData((preve)=>{
            return {
                ...preve,
                profilePic : imagePic
            }
        })
    }

  return (
    <section id='login'>
        <div className='mx-auto container p-4'>

            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'> 
                    <div>
                        <img src={data.profilePic} alt='login-icon'/>
                    </div>
                    <form>
                        <label>
                            <div className='cursor-pointer bg-opacity-80 text-xs bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full'>
                                Upload Photo
                            </div>
                            <input type='file' className='hidden' onChange={handleUploadPic}/>
                        </label>
                    </form>
                </div>

                <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label>Name :</label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                                type="text" 
                                placeholder='enter your name'
                                name='name'
                                value={data.name}
                                onChange={handleOnChange}
                                required
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <div className='grid'>
                        <label>Email :</label>
                        <div className='bg-slate-100 p-2'>
                            <input 
                                type="email" 
                                placeholder='enter email'
                                name='email'
                                value={data.email}
                                onChange={handleOnChange}
                                required
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>

                    <div>
                        <label>Password :</label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input 
                                type="password"
                                placeholder='enter password'
                                value={data.password}
                                name='password'
                                onChange={handleOnChange}
                                required
                                className='w-full h-full outline-none bg-transparent'/>
                            
                        </div>
                    </div>

                    <div>
                        <label>Confirm Password :</label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input 
                                type="password"
                                placeholder='enter confirm password'
                                value={data.confirmPassword}
                                name='confirmPassword'
                                onChange={handleOnChange}
                                required
                                className='w-full h-full outline-none bg-transparent'/>
                        </div>
                    </div>
                    <button className='hover:bg-red-700 bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all m-auto block mt-6'>SignUp</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default SignUp