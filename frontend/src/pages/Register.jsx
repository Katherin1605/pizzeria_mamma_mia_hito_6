import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TbLockPassword } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";

const Error = ({value}) => {
  return <span className='error'>{value}</span>
}

Error.propTypes = {
    value: PropTypes.string.isRequired
}
const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
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
    },
    confirmPassword: (value, password) => {
        if (!value) {
            return 'Es necesario confirmar tu contraseña'
        }
        if (value !== password) {
            return 'Las contraseñas no coinciden'
        }
        return null
    }
}

const Register = () => {
  const [values, setValues] = useState(initialValues)
  const [error, setError] = useState(initialValues)
  const validarDatos = (e) => {
    e.preventDefault()
    const errors = {
          email:validation.email(values.email),
          password:validation.password(values.password),
          confirmPassword:validation.confirmPassword(values.confirmPassword,values.password)
        }
    
        setError(errors);
    if(errors.email || errors.password || errors.confirmPassword){
      return;

    }
    
    setValues(initialValues)

    alert ('Te has registrado correctamente')

  };



  return (
    <div className='border border-dark rounded-3 m-3 p-2 bg-dark text-light'>
    <h2 className='p-2 text-center'>{<FaWpforms className='me-2'/>}Formulario de Registro</h2>
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
        placeholder='Ingresa una contraseña'
        />
        <Error value={error?.password}/>
      </div>
      <div className='form-group'>
        <TbLockPassword className='mx-1'/>
        <label htmlFor='confirmPassword'>Repita Contraseña</label>
        <input 
        type="password" 
        name='confirmPassword'
        value={values.confirmPassword} 
        onChange={(e) => setValues((prev) => {
          return {
            ...prev,
            confirmPassword:e.target.value
          }
        })}  
        className='form-control' 
        placeholder='Confirma tu contraseña'
        />
        <Error value={error?.confirmPassword}/>
      </div>
      <button type='submit' className='p-2 btn btn-light'>Registrar</button>

    </form>
    </div>
  )
}

export default Register
