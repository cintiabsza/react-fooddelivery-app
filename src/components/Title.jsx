import React from 'react'

function Title(props) {
  return (
    <div>
        <h1 className="text-orange-700 font-bold text-3xl text-center py-4">{props.text}</h1>
    </div>
  )
}

export default Title