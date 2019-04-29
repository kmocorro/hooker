import React from 'react';
import Auther from './components/Auther';
// hehe
export default () => {

    function getToken(){
        return localStorage.getItem('ldap_token');
    }

    function loggedIn(){
        const token = getToken();
        return !!token;
    }


    return (
        <div>
            { loggedIn
                ? <Auther />
                : <h1>hello</h1>
            }
        </div>

    )
}
