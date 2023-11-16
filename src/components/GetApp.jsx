import React from 'react'
import Title from './Title'

 const GetApp = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
       <div>
        <Title 
        text="Quick Delivery App"/>
       </div>
        <div className="max-w-[1520px] mx-auto grid md:grid-cols-2">
            <img className="w-[550px] mx-auto my-4"
                src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
                     alt="Quick Delivery App"/>

        <div className="flex flex-col justify-center px-4">
        <p className="text-[#1c997c] font-bold md:py-4">Get The App</p>
                    <h1 className="md:text-3xl sm:text-3xl text-2xl font-bold py-0">Limitless Convenience on-demand</h1>
                    <p className='py-3 justify-center'>
                        You can order the food that you love and get your meal delivered in a few minutes. <br/>
                        Also you can search from a ruge variety of cusine and save your favorites restaurants to be notified when they have special discounts and new dishes! 
                        <br/>
                        Whith the app, you will be able to track the delivery and pay using the best payment method for you. 
                    </p>
                    <button className="bg-[#1c997c] text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-black hover:text-white">
                        Get Started
                    </button>

        </div>
            </div>
    </div>
    
  )
}
export default GetApp