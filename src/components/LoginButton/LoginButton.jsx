import React from 'react';
import "./LoginButton.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const LoginButton = (props) => {
    const {handleLogin, handleLogout, authUser} = props;

    return (
        <div className="login-button">
            {authUser ? (
                    <div className="login-button__logout" onClick={handleLogout}>
                        <FontAwesomeIcon icon={faUser} />
                        <p>Logout</p>    
                    </div>
            ): (
            <div className="login-button__login" onClick={handleLogin}>
                <FontAwesomeIcon icon={faUser} />
                <p>Login</p>    
            </div>
            )}
        </div>
    )
}

export default LoginButton