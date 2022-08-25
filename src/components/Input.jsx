import React from 'react'

const Input = (props) => {
  return (
    <div className="form-group">
      <h3 className="title-input">Nombre</h3>
      <input
        value={props.inName}
        type="text"
        className="Name"
        name="Name"
        onChange={(e) => props.setName(e.target.value)}
      />
      <h3 className="title-input">Contraseña</h3>
      <input
        value={props.inPassw}
        type="password"
        className="Password"
        name="Password"
        onChange={(e) => {
          props.setPassw(e.target.value)
        }}
      />
    </div>
  )
}

export default Input
