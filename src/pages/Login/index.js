import React from "react";

import LoginForm from "../../components/LoginForm/index";

export default function Login({logInFunction}) {
    return (
        <div className='welcome'>
            <h1>Welcome</h1>
            <div className='login-page'>
                <LoginForm submitFunction = {logInFunction}/>
            </div>
        </div>
    );
}