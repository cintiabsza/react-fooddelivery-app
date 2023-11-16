import React, {useState} from 'react'
import { mealData } from '../data/data'
import Title from './Title.jsx'
import Button from './Button'

const Meal = () => {

const [foods, setFoods] = useState(mealData)
const filterCat = (category) => {
    setFoods(
        mealData.filter((item) => {
            return item.category === category
        })
    )
    }

  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <div>
            <Title 
            text="Our Meal"/>
        </div>
        <div>
            <div className='flex justify-center md:justify-center gap-2 py-2'>
                <Button 
                onClick={()=> setFoods(mealData)}> 
                 All
                 </Button> 
                <Button 
                onClick={()=> filterCat('pizza')}> 
                 Pizza
                 </Button> 
                <Button 
                onClick={()=> filterCat('chicken')}> 
                 Chicken
                 </Button> 
                <Button 
                onClick={()=> filterCat('salad')}> 
                 Salad
                 </Button> 
            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2'>
            {
                foods.map((item) => (
                    <div key={item.name}
                    className='border-none hover:scale-105 duration-300'> 
                        <img className='w-full h-[200px] object-cover rounded-lg'
                        src={item.image} 
                        alt={item.name}
                        />
                        <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p className=' bg-orange-600 rounded-full h-16 w-16 -mt-10 -mr-2 text-white py-4 px-2 border-4'>{item.price}</p>
                        </div>

                    </div>
                ))

            }
        </div>

    </div>
  )
}

export default Meal