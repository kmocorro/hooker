import React from 'react';
import Auther from './components/Auther';
// hehe
export default () => {

    function isLoggedIn(){
        const token = getToken();
        return token; //blnk false
    }

    function getToken(){
        return localStorage.getItem('ldap_token');
    }

    return (
        <div>
            { isLoggedIn()
                ? <h1>hello</h1>
                : <Auther />
            }
        </div>

    )
}
