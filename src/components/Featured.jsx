import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

const Featured = () => {
    const sliders = [
       
        {
            url: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            url: 'https://images.unsplash.com/photo-1560717845-968823efbee1?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ]
  
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? 2 : currentIndex -1
        setCurrentIndex(newIndex)
        //you can use the number 2 or sliders.length
        //isFirstSlide? - starts from last index (2) and reduce 1
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === 2
        const newIndex = isLastSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex)
         //isLastSlide? - starts from first index (0) and increase 1
    }

    //const moveToNextSlide = () => {
    //    setCurrentIndex(slideIndex)
   // } I've chosen don't use this function. I put the setCurrentIndex directy on the onClick function
    return (
    <div className="max-w-[1520] h-[500px] w-full py-4 px-4 relative group">
         <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
         style={{
            backgroundImage: `url(${sliders[currentIndex].url})`,
            }}>
         </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-4xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
          <BsChevronCompactLeft size={18} onClick={prevSlider}/>  
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-4xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
          <BsChevronCompactRight size={18} onClick={nextSlider}/>  
        </div>
        <div className='flex top-4 justify-center py-2'>
            {sliders.map((slider, index) =>(
                <div className='text-2xl cursor-pointer'
                key={index}
                onClick={()=>setCurrentIndex(index)}
                >
                <RxDotFilled/>  
                </div>
                ))}
        </div>

    </div>
  )
}

export default Featured