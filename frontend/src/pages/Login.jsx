import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";

const Error = ({value}) => {
  return <span className='error'>{value}</span>
}

Error.propTypes = {
    value: PropTypes.string.isRequired
}
const initialValues = {
    email: '',
    password: '',
}
const validation = {
    email: (value) => {
        if (!value) {
            return 'Ingresa tu Email'
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Utiliza un email válido'
        }
        return null
    },
    password: (value) => {
        if (!value) {
            return 'La contraseña es requerida'
        }
        if (value.length < 6) {
            return 'La contraseña debe tener mínimo 6 caracteres'
        }
        return null
    }
}

const Login = () => {
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState(initialValues)
  const validarDatos = (e) => {
    e.preventDefault()
    const errors = {
          email:validation.email(values.email),
          password:validation.password(values.password),
        }
    
        setError(errors);
    if(errors.email || errors.password){
      return;

    }
    
    setValues(initialValues)
    alert ('¡Has iniciado sesion correctamente!')

  };

  return (
    <div className='border border-dark rounded-3 m-3 p-2 bg-dark text-light'>
    <h2 className='p-2 text-center'>{<IoIosLogIn className='me-2'/>}Login</h2>
    <form onSubmit={validarDatos} className='register d-flex flex-column align-items-center gap-2'>
      <div className='form-group'>
        <MdOutlineMail className='mx-1'/>
        <label htmlFor='email'>Email</label>
        <input 
        type="text" 
        name='email' 
        value={values.email}
        onChange={(e) => setValues((prev) => {
          return {
            ...prev,
            email:e.target.value
          }
        })} 
        className='form-control' 
        placeholder='Ingresa tu Email' 
        />
        <Error value={error?.email}/>
        
      </div>
      <div className='form-group'>
        <TbLockPassword className='mx-1'/>
        <label htmlFor='password'>Contraseña</label>
        <input 
        type="password" 
        name='password'
        value={values.password}
        onChange={(e) => setValues((prev) => {
          return {
            ...prev,
            password:e.target.value
          }
        })}  
        className='form-control'
        placeholder='Ingresa tu contraseña'
        />
        <Error value={error?.password}/>
      </div>
      <button type='submit' className='p-2 btn btn-light'>Iniciar sesión</button>

    </form>
    </div>
  )
}

export default Login
