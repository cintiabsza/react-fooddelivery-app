import React from 'react'
import {categories} from '../data/data'
import Title from './Title.jsx'

const Categories = () => {
    
  return (
    <div className='max-w-[] m-auto px-4 py-4'>
         <div>
            <Title 
            text="Trending Categories"/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
            {categories.map((item) => {
                return (
                    <div key={item.id} 
                    className="flex justify-center items-center hover:scale-105 duration-300">
                         <img
                         className='px-2 object-cover  w-40 h-13 cursor-pointer'
                            src={item.image}
                            alt={item.name}/>  
                     </div>
                )
                
               
                 })
            }

        </div>
    </div>
  )
}

export default Categories