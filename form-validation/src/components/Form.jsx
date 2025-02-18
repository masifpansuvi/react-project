import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    const handleForm = (evt) => {
        evt.preventDefault();
        if( name, email, password, confirmPass) {
            if(password === confirmPass){
                alert('your have done sign up')
            }else{
                alert('password confirmation failed')
            }
        }else{
            alert('All field should be filled')
        }
    }

  return (
    <div className='form-container'>
        <form onSubmit={handleForm} >
            <div className='form'>
                <h2>SIGN UP</h2>
                <div>
                    <p className='title'>Name</p>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <p className={name == ''? 'nodata': 'data'} >{name?'':'Name is required'}</p>
                </div>
                <div>
                    <p className='title'>Email</p>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <p className={email == ''? 'nodata': 'data'} >{email?'':'email is required'}</p>
                </div>
                <div>
                    <p className='title'>Password</p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <p className={password == ''? 'nodata': 'data'} >{password?'':'password is required'}</p>
                </div>
                <div>
                    <p className='title'>Confirm Password</p>
                    <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)}/>
                    <p className={confirmPass==''? 'nodata': 'data'} >{confirmPass?'':'confirm the password'}</p>
                </div>
                <button className='btn'>
                    Sign Up
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default Form