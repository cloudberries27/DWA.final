import React from "react";

import SignUpForm from "../../components/SignUpForm/index";

export default function SignUp({signUpFunction}){
    return(
        <div className='welcome'>
            <h1>Sign Up</h1>
            <div className='login-page'>
                <SignUpForm submitFunction = {signUpFunction}/>
            </div>
        </div>
    );
}