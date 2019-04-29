import React from 'react';
import Auther from './components/Auther';

export default () => {

    function isLoggedIn(){
        let tokener = getToken();
        return tokener; //blnk false
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
