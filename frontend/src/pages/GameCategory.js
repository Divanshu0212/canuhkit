import React from 'react'
import './GameCategory.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { category_list } from '../assets/assets'

const GameCategory = (id) => {

    const items = category_list
    const item = items.find(item => item.id === id);
    return (
        <>
        <Header/>
        <div class="mt-32 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-between">
            <header class="w-full py-4 text-4xl text-left pl-10 ext-3xl font-bold shadow-lg">
                (Category Name)
            </header>

            
            <div class="relative h-[800px] w-full">
                <div class="flex h-full w-full space-x-10">
                    
                    <div class="w-1/4 ml-10 mt-10 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5y1kYYJQBa_5FjkFZExkGtT0aooxfwFtjTw&s')] bg-cover h-60 rounded-lg flex items-center justify-center relative group">

                        
                        <div class="absolute bottom-0 left-0 w-full h-full bg-gray-800 opacity-0 group-hover:opacity-65 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                            <span class="text-lg font-bold">Game Name 1</span>
                            
                            <hr class="border-t border-gray-400 w-1/2 mt-4"/>
                        </div>
                    </div>

                    
                    <div class="w-1/4 mt-10 bg-[url('https://cdn2.steamgriddb.com/icon/de5e3308cd908ed8b63d4c2ab881ea07.png')] bg-cover h-60 rounded-lg flex items-center justify-center relative group">

                
                        <div class="absolute bottom-0 left-0 w-full h-full bg-gray-800 opacity-0 group-hover:opacity-65 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                            <span class="text-lg font-bold">Game Name 2</span>
                            <div class="flex space-x-1 mt-2">
                            </div>
                            <hr class="border-t border-gray-400 w-1/2 mt-4"/>
                        </div>
                    </div>

                    
                    <div class="w-1/4 mt-10 bg-[url('https://cdn2.steamgriddb.com/icon/de5e3308cd908ed8b63d4c2ab881ea07.png')] bg-cover h-60 rounded-lg flex items-center justify-center relative group">

                        
                        <div class="absolute bottom-0 left-0 w-full h-full bg-gray-800 opacity-0 group-hover:opacity-65 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                            <span class="text-lg font-bold">Game Name 3</span>
                            <div class="flex space-x-1 mt-2">
                            </div>
                            <hr class="border-t border-gray-400 w-1/2 mt-4"/>
                        </div>
                    </div>




                </div>
            </div>
        </div>
        <Footer/>
        </>
  )
}

export default GameCategory
