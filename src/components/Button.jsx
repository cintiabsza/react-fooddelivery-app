import React from 'react'

 const Button = ({
    children,
    onClick,
    
  }) => {
    
    return (
       <div>
        <button  className='border rounded px-4 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700'
          onClick={onClick}
        >
          {children}
        </button>
   
      </div> 
    );
  };

export default Button