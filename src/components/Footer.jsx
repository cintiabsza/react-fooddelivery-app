import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="m-auto px-2 py-2 bg-[#333]">
        <div className="py-14 px-4 grid lg:grid-cols-3 gap-8 text-gray-800">

            <div className="lg:col-span-1 p-4 mt-6 ">
                <h1 className="w-full font-medium py-2 text-[#d8d6d6]">YumEats</h1>
                <p className="text-gray-400 text-sm py-2 w-[100%]">
                    Follow us on social media where we post lot of tips to help you to find a delicious meal!    
                </p>
                <div className="flex justify-between md:w-[60%] my-6">
                        <FaFacebookSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaTwitterSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaInstagramSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaDribbbleSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                        <FaGithubSquare size={30} className="text-3xl text-gray-400 hover:text-gray-300 cursor-pointer"/>
                </div>
            </div>

            <div className="lg:col-span-1 lg:justify-center flex p-4 mt-6">
            
                    <div>
                        <h6 className="font-medium text-[#d8d6d6] py-2">Legal</h6>
                        <ul>
                            <li className="py-2 pr-16 text-sm text-gray-400">Terms and Conditions</li>
                            <li className="py-2 text-sm text-gray-400">Privacy</li>
                            <li className="py-2 text-sm text-gray-400">Cookies</li>
                            <li className="py-2 text-sm text-gray-400"></li>
                            <li className="py-2 text-sm text-gray-400"></li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="font-medium text-[#d8d6d6] py-2">Let Us Help You</h6>
                        <ul>
                            <li className="py-2 text-sm text-gray-400">Your Account</li>
                            <li className="py-2 text-sm text-gray-400">Your Orders</li>
                            <li className="py-2 text-sm text-gray-400">FAQs</li>
                        </ul>
                    </div>
            </div>

            <div className='lg:col-span-1 flex p-4 mt-6'>
                <div>
                    <h1 className='font-medium text-[#d8d6d6] py-2'>Stay Update</h1>
                    <p className='text-sm text-gray-400 py-2'>Sign Up to join our newsletter</p>
                    <div className='flex flex-row w-full items-center justify-between text-sm'>   
                        <input 
                        type="email" 
                        placeholder='user@mailbox.com'
                        className='p-3 flex w-full rounded-md text-black lg:px-10'
                        />
                        <button className='bg-[#1c997c] text-white hover:bg-white hover:text-[#1c997c] hover:border-[#1c997c] rounded-md font-medium w-[200px] my-6 ml-2 p-3 lg:w[250px]'>Sign Up</button>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer