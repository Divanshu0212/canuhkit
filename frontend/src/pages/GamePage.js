import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AddReview from '../Components/AddReview'
import { useParams } from 'react-router-dom'
import { games_list } from '../assets/assets'

const GamePage = () => {
    const { id } = useParams()
    const navigate=useNavigate();

    const items = games_list

    const item = items.find(item => item.gameId === id);

    console.log(item.game_banner);


    return (
        <div>
            <Header />
            <div className="bg-gray-800 flex items-center justify-center min-h-screen">
                <div class="w-full h-screen bg-gray-900 p-8 overflow-y-auto">

                    <div
                        style={{ backgroundImage: `url(${item.game_banner})` }}
                        className='relative w-full h-1/2 bg-cover bg-center rounded-lg mb-8'>

                        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 rounded-lg"></div>
                    </div>


                    <div class="flex items-center justify-between w-full">
                        <div className='flex items-center'><img className='w-32 mr-3' src={item.game_icon} alt='' />
                            <h1 class="text-green-500 text-5xl font-bold">{item.game_name}</h1></div>
                        <div class="relative group">
                            <div class="cursor-pointer bg-green-500 h-8 w-8 pb-0.5 rounded-full hover:bg-green-700 flex items-center justify-center text-white">

                                +

                                <a class="hidden group-hover:block absolute top-0 right-0 bg-gray-800 text-white py-1 px-2 rounded-lg" href={item.game_community}>Join the Community</a>
                            </div>
                        </div>
                    </div>


                    <div class="flex items-center mt-4">
                        <div class="text-green-500 flex space-x-2">

                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957c.14.433.55.732 1.004.732h4.148c.969 0 1.371 1.24.588 1.81l-3.352 2.478c-.362.268-.52.751-.407 1.185l1.287 3.957c.3.921-.755 1.688-1.538 1.168l-3.351-2.478c-.362-.268-.848-.268-1.21 0l-3.351 2.478c-.783.52-1.838-.247-1.538-1.168l1.287-3.957c.113-.434-.045-.917-.407-1.185L1.5 9.426c-.783-.57-.381-1.81.588-1.81h4.148c.454 0 .863-.299 1.004-.732l1.286-3.957z" /></svg>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957c.14.433.55.732 1.004.732h4.148c.969 0 1.371 1.24.588 1.81l-3.352 2.478c-.362.268-.52.751-.407 1.185l1.287 3.957c.3.921-.755 1.688-1.538 1.168l-3.351-2.478c-.362-.268-.848-.268-1.21 0l-3.351 2.478c-.783.52-1.838-.247-1.538-1.168l1.287-3.957c.113-.434-.045-.917-.407-1.185L1.5 9.426c-.783-.57-.381-1.81.588-1.81h4.148c.454 0 .863-.299 1.004-.732l1.286-3.957z" /></svg>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957c.14.433.55.732 1.004.732h4.148c.969 0 1.371 1.24.588 1.81l-3.352 2.478c-.362.268-.52.751-.407 1.185l1.287 3.957c.3.921-.755 1.688-1.538 1.168l-3.351-2.478c-.362-.268-.848-.268-1.21 0l-3.351 2.478c-.783.52-1.838-.247-1.538-1.168l1.287-3.957c.113-.434-.045-.917-.407-1.185L1.5 9.426c-.783-.57-.381-1.81.588-1.81h4.148c.454 0 .863-.299 1.004-.732l1.286-3.957z" /></svg>
                            <svg class="w-6 h-6 fill-current text-gray-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957c.14.433.55.732 1.004.732h4.148c.969 0 1.371 1.24.588 1.81l-3.352 2.478c-.362.268-.52.751-.407 1.185l1.287 3.957c.3.921-.755 1.688-1.538 1.168l-3.351-2.478c-.362-.268-.848-.268-1.21 0l-3.351 2.478c-.783.52-1.838-.247-1.538-1.168l1.287-3.957c.113-.434-.045-.917-.407-1.185L1.5 9.426c-.783-.57-.381-1.81.588-1.81h4.148c.454 0 .863-.299 1.004-.732l1.286-3.957z" /></svg>
                            <svg class="w-6 h-6 fill-current text-gray-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957c.14.433.55.732 1.004.732h4.148c.969 0 1.371 1.24.588 1.81l-3.352 2.478c-.362.268-.52.751-.407 1.185l1.287 3.957c.3.921-.755 1.688-1.538 1.168l-3.351-2.478c-.362-.268-.848-.268-1.21 0l-3.351 2.478c-.783.52-1.838-.247-1.538-1.168l1.287-3.957c.113-.434-.045-.917-.407-1.185L1.5 9.426c-.783-.57-.381-1.81.588-1.81h4.148c.454 0 .863-.299 1.004-.732l1.286-3.957z" /></svg>
                        </div>
                    </div>


                    <p class="text-green-500 mt-6 text-lg">
                        {item.game_description}
                    </p>


                    <div class="mt-8 bg-gray-800 p-6 rounded-lg text-white">
                        <h2 class="text-green-500 text-2xl font-semibold mb-4">Comments</h2>

                        <AllReviews/>

                        <AddReview gameid={item.gameId}/>
                    </div>


                    <div class="w-full max-w-7xl mx-auto p-8">

                        <h1 class="text-green-500 text-4xl font-bold mb-8">ECHOING EXPERIENCES...</h1>


                        <div class="relative">
                            <div class="flex space-x-10	">

                                <div class="w-1/4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5y1kYYJQBa_5FjkFZExkGtT0aooxfwFtjTw&s')] bg-cover h-60 rounded-lg flex items-center justify-center relative group">


                                    <div onClick={()=>navigate('/game/3_2')} class="absolute bottom-0 left-0 w-full h-full bg-gray-800 opacity-0 group-hover:opacity-65 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                        <span class="text-lg font-bold">Mario Cart</span>

                                        <hr class="border-t border-gray-400 w-1/2 mt-4" />
                                    </div>
                                </div>


                                <div class="w-1/4 bg-[url('https://cdn2.steamgriddb.com/icon/de5e3308cd908ed8b63d4c2ab881ea07.png')] bg-cover h-60 rounded-lg flex items-center justify-center relative group">


                                    <div  onClick={()=>navigate('/game/3_3')} class="absolute bottom-0 left-0 w-full h-full bg-gray-800 opacity-0 group-hover:opacity-65 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                                        <span class="text-lg font-bold">Forza Horizon 5</span>
                                        <div class="flex space-x-1 mt-2">

                                        </div>
                                        <hr class="border-t border-gray-400 w-1/2 mt-4" />
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GamePage
