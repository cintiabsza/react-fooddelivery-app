import React from 'react'
import Title from './Title'

 const GetApp = () => {
  return (
    <div className="w-full bg-white py-4 px-4">
       <div>
        <Title 
        text="Quick Delivery App"/>
       </div>
        <div className="max-w-[1520px] mx-auto grid md:grid-cols-2 rounded-lg">
            <img className="w-[400px] lg:w-[600px] m-auto my-20 md:p-4 rounded-3xl  "
                src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <div className="flex flex-col justify-center px-4 py-4">
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