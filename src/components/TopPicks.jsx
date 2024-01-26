import React from 'react'
import {topPicks} from '../data/data.jsx'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import Title from './Title.jsx'

const TopPicks = () => {
  return (
    <>
        <div className='max-w-[] m-auto px-4 py-4'>
            <Title 
            text="Top Picks"/>
        </div>
        <div className=" max-w[1520px] h-[200px] py-4 px-4  lg:px-14">
            <Splide options={{
                mediaQuery: 'min',
                perMove: 1, 
                gap: "1rem",  
                pagination: false,
                pauseOnHover: true,  
                rewind: true, 
                arrows: true,
                breakpoints: {
                    440: {
                        perPage: 2,
                  
                      },
                    
                    640: {
                        perPage: 2,
                  
                      },
                    768: {
                      perPage: 4,
                  
                    },
                    1024: {
                      perPage: 4,
                     
                    },
                    1440: {
                      perPage: 5,
                     
                    },
                  },
            
        }}>
            {// key must be done at the top level => <SplideSlide key={item.title}
                topPicks.map((item) => {
                    return (
                        <SplideSlide key={item.title}>
                        <div 
                        className='rounded-3xl relative'>
                            <div className='absolute w-full h-full bg-black/30 rounded-3xl text-white'>
                                <p className='px-2 pt-4'>{item.title}</p>
                                <p className='px-2'>{item.price}</p>
                                <button className='rounded border border-dotted border-white text-white mx-2 absolute bottom-4 px-2 bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-500'>Add to Cart</button>
                            </div>
                            <img className='h-[180px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300'
                            src={item.img}
                            alt={item.title}
                            />
                        </div>
                        </SplideSlide>
                        
                        
                    )
                })
                
            }
            </Splide>
        </div>
    </>
  )
}

export default TopPicks