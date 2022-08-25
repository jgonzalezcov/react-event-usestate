import React from 'react'

const Button = (props) => {
  return (
    <div className="container-button">
      <button
        onClick={() => {
          props.buttonClean()
        }}
      >
        Ingresar
      </button>
    </div>
  )
}

export default Button
