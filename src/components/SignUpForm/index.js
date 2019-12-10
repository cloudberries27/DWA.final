import React from 'react'

export default function SignUp({submitFunction}){
    return (
        <div className='login-comp'>
            <form onSubmit={e=>submitFunction(e)}>
                <label htmlFor='createName'> Name </label>
                <input type='name' name='creatName' placeholder='Name'/>
                <label htmlFor='createEmail'> Email </label>
                <input type='email' name='createEmail' placeholder='Email'/>
                <label htmlFor='createPassword'> Create Password </label>
                <input type='password' name='createPassword' placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    )
}